/**
 * Nvyra API Client
 * Communicates with the Go backend for Modal invocation, payments, and more
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

/**
 * Get the auth token from Clerk
 */
async function getAuthToken(): Promise<string | null> {
    if (typeof window === 'undefined') return null;

    // @ts-expect-error - Clerk global
    const clerk = window.Clerk;
    if (!clerk?.session) return null;

    try {
        return await clerk.session.getToken();
    } catch {
        return null;
    }
}

/**
 * Make an authenticated API request
 */
async function apiRequest<T>(
    endpoint: string,
    options: RequestInit = {}
): Promise<T> {
    const token = await getAuthToken();

    const headers: HeadersInit = {
        'Content-Type': 'application/json',
        ...options.headers,
    };

    if (token) {
        (headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers,
    });

    if (!response.ok) {
        const error = await response.json().catch(() => ({ error: 'Request failed' }));
        throw new Error(error.error || `HTTP ${response.status}`);
    }

    return response.json();
}

// ============================================================================
// Modal API
// ============================================================================

export interface ModalInvokeRequest {
    input: unknown;
    metadata?: Record<string, string>;
}

export interface ModalInvokeResponse {
    output: unknown;
    status: string;
    request_id: string;
    tier: 'free' | 'paid';
    error?: string;
}

export interface ModalTierResponse {
    tier: 'free' | 'paid';
    is_paid: boolean;
    endpoint: string;
    user_id: string;
}

/**
 * Invoke the Modal endpoint (routes to free or paid based on user tier)
 */
export async function invokeModal(request: ModalInvokeRequest): Promise<ModalInvokeResponse> {
    return apiRequest<ModalInvokeResponse>('/api/modal/invoke', {
        method: 'POST',
        body: JSON.stringify(request),
    });
}

/**
 * Get the user's current tier
 */
export async function getModalTier(): Promise<ModalTierResponse> {
    return apiRequest<ModalTierResponse>('/api/modal/tier');
}

// ============================================================================
// Stripe API
// ============================================================================

export interface CheckoutSession {
    session_id: string;
    url: string;
}

export interface SubscriptionStatus {
    is_active: boolean;
    plan: string;
    status: string;
    current_period_end?: string;
    customer_id?: string;
}

/**
 * Create a Stripe checkout session for a specific tier
 */
export async function createCheckoutSession(
    priceId: string,
    successUrl: string,
    cancelUrl: string
): Promise<CheckoutSession> {
    return apiRequest<CheckoutSession>('/api/stripe/checkout', {
        method: 'POST',
        body: JSON.stringify({
            price_id: priceId,
            success_url: successUrl,
            cancel_url: cancelUrl,
        }),
    });
}

/**
 * Get the user's subscription status
 */
export async function getSubscriptionStatus(): Promise<SubscriptionStatus> {
    return apiRequest<SubscriptionStatus>('/api/stripe/subscription');
}

/**
 * Redirect to Stripe checkout for a specific tier upgrade
 */
export async function redirectToCheckout(priceId: string): Promise<void> {
    const successUrl = `${window.location.origin}/pricing?success=true`;
    const cancelUrl = `${window.location.origin}/pricing?canceled=true`;

    const session = await createCheckoutSession(priceId, successUrl, cancelUrl);
    window.location.href = session.url;
}

// ============================================================================
// Health Check
// ============================================================================

export interface HealthResponse {
    status: string;
    timestamp: string;
    version: string;
}

/**
 * Check if the backend is healthy
 */
export async function checkHealth(): Promise<HealthResponse> {
    const response = await fetch(`${API_BASE_URL}/health`);
    return response.json();
}
