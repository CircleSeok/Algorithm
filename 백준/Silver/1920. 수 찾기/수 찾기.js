const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const n_arr = input[1].split(' ').map(v=>+v);
const m_arr = input[3].split(' ').map(v=>+v);

const n_set = new Set(n_arr); 

const result = [];

m_arr.forEach(m => {
    if(n_set.has(m)){
        result.push(1);
    }
    else result.push(0);
});

console.log(result.join('\n'));
