const si = require('react-icons/si');
const keys = Object.keys(si);
const targets = ['pinecone', 'cohere', 'nvidia', 'google', 'cleanlab', 'turso'];
targets.forEach(t => {
    console.log(`${t}:`, keys.filter(k => k.toLowerCase().includes(t)));
});
