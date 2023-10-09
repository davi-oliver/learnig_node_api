import http from 'node:http'
import { Database } from './database.js'

const users = []
const database = new Database()

const server = http.createServer((req, res) => {
    const { method, url } = req;
    console.log(method, url)
    if (method === 'GET' && url === '/users') {
        const users = database.select('users')

        return res.setHeader('Content-Type', 'application/json')
            .end(JSON.stringify(users))
    }
    if (method === 'POST' && url === '/users') {
        const user = {
            id: 1,
            name: 'Davi',
            email: "davi@gmail.com"
        }
        database.insert('users', user)
        return res.end('Create user')

    }


    return res.writeHead(404).end('Hello Davi')
})

server.listen(3333)