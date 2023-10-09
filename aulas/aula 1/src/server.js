// import module htpp 
// const http = require('http');
import http from 'node:http';

// CommonJS => utiliza requie
// ESModeules => utiliza import/export que para usar precisa estar dentro do packge.json no campo type: module

const server =  http.createServer((req, res) => {
    return res.end('Hello Davi')
})



server.listen(3333)



