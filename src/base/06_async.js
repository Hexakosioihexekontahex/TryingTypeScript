// Event loop
/*
const timeout = setTimeout(() => {
    console.log('After timeout')
}, 2500)
clearTimeout(timeout)
*/
/*
const interval = setInterval(() => {
    console.log('Each interval')
}, 1000)
clearTimeout(interval)
*/
/*
const delay = (callback, wait = 1000) => {
    setTimeout(callback, wait)
}
const wait = 1000
delay(() => {
    console.log(`After ${wait}ms`)
}, wait)
*/
const delay = (wait = 1000) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve()
            reject('Something went wrong')
        }, wait)
    })
}

// delay(2500)
//     .then(() => console.log('After 2500ms'))
//     .catch(err => console.log('error: ' + err))
//     .finally(() => console.log('finally'))

const getData = () => new Promise(resolve => resolve([
    1, 1, 2, 3, 5, 8, 13
]))

// getData().then(data => console.log(data))

async function asyncExample() {
    try {
        await delay(3000)
        const data = await getData()
        console.log('Data' + data)
    } catch (e) {
        console.log(e)
    } finally {
        console.log('finally')
    }
}
asyncExample()
