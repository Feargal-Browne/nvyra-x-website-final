import React from 'react';

export default function BrandLogo() {
  return (
    <div className="relative w-[401px] h-[84px] flex items-center px-[35px] py-[3px]">
      {/* Polygon Container - Relative to the 401px wide container */}
      <div className="relative w-[75.2px] h-[69.62px] flex-none">
        {/* Polygon 6 */}
        <div 
          className="absolute bg-black border border-[#325FC2]"
          style={{
            width: '63.06px',
            height: '55.18px',
            left: '35px', 
            bottom: '21.63px',
            borderWidth: '1.08732px',
            transform: 'rotate(15deg)',
            zIndex: 1
          }}
        />
        
        {/* Polygon 5 */}
        <div 
          className="absolute bg-black border border-white"
          style={{
            width: '54.64px',
            height: '53.55px',
            left: '45.33px', 
            top: '15.07px',
            borderWidth: '0.543661px',
            zIndex: 2
          }}
        />
      </div>

      {/* Text "Nvyra X" */}
      <span 
        className="font-sans text-white text-center flex items-center"
        style={{ 
          width: '166px',
          height: '29px',
          fontFamily: 'Jost',
          fontWeight: 400,
          fontSize: '32px',
          lineHeight: '46px',
          marginLeft: '20px' // Adjust spacing to ensure it fits the 401px container appropriately if needed, or rely on flex gap
        }}
      >
        Nvyra X
      </span>
    </div>
  );
}