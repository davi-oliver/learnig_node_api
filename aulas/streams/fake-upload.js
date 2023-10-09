import { Readable } from 'node:stream'
class OneTo extends Readable {
    index = 1
    _read() {
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

fetch('https://localhost:3334', {
    method: 'POST',
    body: new OneTo(),
})