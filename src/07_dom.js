/*
// my try:
// https://www.worldometers.info/coronavirus/
const elements = document.getElementsByClassName("maincounter-number")
const cases = elements[0]
const recovered = elements[2]
try {
    setInterval(() =>
        {
            if (parseInt(cases.innerText.toString().replaceAll(',', '')) > 0) {
                cases.innerText.valueOf()
                const newValue = parseInt(cases.innerText.toString().replaceAll(',', '')) - 1
                cases.innerText = newValue
                const newRecovered = parseInt(recovered.innerText.toString().replaceAll(',', '')) + 1
                recovered.innerText = newRecovered
            } else {
                clearInterval(this)
            }
        }, 1000
    )
} catch(e) {
}
*/

// document
// window.alert('1')
// window.prompt('2')
// window.confirm('3')
/*
setTimeout(() => {
    mutateContainer()
    mutateBtn()
}, 1000)

function mutateContainer() {
    const container = document.getElementsByClassName('container').item(0)
    // console.dir(container)
    container.style.backgroundColor = 'gray'
    container.style.padding = '2rem'
}

function mutateBtn() {
    const btn = document.getElementById('btn')
    btn.innerText = 'Press F to pay respect'
    btn.draggable = true
    btn.style.color = 'yellow'
}*/

// old
// const heading2 = document.getElementsByTagName('h2')[0]
// const heading2 = document.getElementsByClassName('h2-class')[0]
// new
// const heading2 = document.querySelector('h2')
// const heading2 = document.querySelector('.h2-class')
// const heading2 = document.querySelector('#sub-heading')
// console.log(heading2)
// const heading3 = heading2.nextElementSibling
// console.log(heading3)
const h2list = document.querySelectorAll('h2')
// console.log(h2list[h2list.length - 1])
console.log(h2list[1])

function addStyleWithTimer(timer, node, text, color = 'red', fontSize) {
    // falsy: '', undefined, null, 0, false
    if (!!timer) {
        setTimeout(() => {
            addStylesTo(node, text, color, fontSize)
        }, timer)
    } else {
        addStylesTo(node, text, color, fontSize)
    }
}
function addStylesTo(node, text, color, fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem'
    node.onclick = () => node.style.backgroundColor = node.style.backgroundColor === 'black' ? 'white' : 'black'
    if (!!fontSize) {
        node.style.fontSize = fontSize
    }
    node.ondblclick = () => alert(text)
}

addStyleWithTimer(500, h2list[2], 'TypeScript!')
addStyleWithTimer(1000, h2list[3], 'Практикуйся', 'yellow')
addStyleWithTimer(1500, h2list[4].querySelector('a'), 'и всё получится!', 'white', '5rem')

h2list[4].addEventListener('click', listener => {
    listener.preventDefault()
    const url = listener.target.getAttribute('href')
    console.log('h2list[4] clicked', url)
    window.location = url
})
