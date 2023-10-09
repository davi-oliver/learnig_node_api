// streams for the fundamentas page
// --------------------------------------------------------
// example usage:
// netflix & spotify
// --------------------------------------------------------

// para importar um arquivlo de clientes via CSV e inserir no banco de dados
// pode ser que um aquivo tenha 1GB  -> 1000000 linhas

// post -> /clients/import


// 10 mb/s - 10s

// vai demorar 100 s para inserir no banco de dados 

// process.stdin.pipe(process.stdout)

import { Readable, Writable, Transform} from 'node:stream'
let list = []
class OneTo extends Readable {
    index = 1
    _read() {
        // retorna quais sao os dados da stream 
        // -> fornece os dados para a stream
        const i = this.index++
        if (i > 100) {
            this.push(null)
        } else {

            setTimeout(() => {
                const buf = Buffer.from(`${i}\n`, 'utf-8')
                this.push(buf)
            }, 1000)
        }
    }
}

class MultiplyByTenStream extends Writable {
    _write(chunk, encoding, callback) {
        console.log(Number(chunk.toString()) * 10)
        callback()

    }
}

class InverseNumberStream extends Transform {
    _transform(chunk, encoding, callback) {
        const transformed = Number(chunk.toString()) * -1
        callback(null, Buffer.from(`${transformed}\n`))
    }
}

new OneTo()
    .pipe(new InverseNumberStream())
    .pipe(new MultiplyByTenStream())