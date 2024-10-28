function createLabel(text, htmlfor) {
    const label = document.createElement('label')
    label.htmlfor = htmlfor
    label.innerText = text

    return label
}

function createInput(id, value, name, type = 'texte', placeholer = '') {
    const input = document.createElement('input')
    input.id = id
    input.value = value
    input.name = name
    input.type = type
    input.placeholder = placeholer

    return input
}

const addTechBtn = document.getElementById('add-tech-btn')
const form = document.getElementById('dev-form')
const dev = []
let inputRows = 0

addTechBtn.addEventListener('click', function(ev) {
    const stackTech = document.getElementById('stackTech')

    const newRow = document.createElement('li');
    const indexRow = inputRows
    inputRows ++
    newRow.id = 'inputRow' + indexRow
    newRow.className = 'inputRow'

    const techNameLabel = createLabel('nome: ', 'techName-' + indexRow)
    const techNameInput = createInput('techName-' + indexRow, null, 'techName')

    const expLabel = createLabel('Experiência: ')
    const id1 = 'expRadio-' + indexRow + '.1'
    const expInput = createInput(id1, '0-2 anos', 'techExp-' + indexRow, 'radio')
    const expLabel1 = createLabel('0-2 anos', id1)
    const id2 = 'expRadio-' + indexRow + '.2'
    const expInput2 = createInput(id2, '2-4 anos', 'techExp-' + indexRow, 'radio')
    const expLabel2 = createLabel('2-4 anos', id2)
    const id3 = 'expRadio-' + indexRow + '.3'
    const expInput3 = createInput(id3, '5+ anos', 'techExp-' + indexRow, 'radio')
    const expLabel3 = createLabel('5+ anos', id3)

    const removeRowBtn = document.createElement('button')
    removeRowBtn.type = 'button'
    removeRowBtn.innerText = 'Remover'
    removeRowBtn.addEventListener('click', function() {
        stackTech.removeChild(newRow)
    })

    newRow.append(
        techNameLabel, techNameInput, expLabel, expInput, expLabel1, expInput2, expLabel2, expInput3, expLabel3, removeRowBtn
    )
    stackTech.appendChild(newRow)
})

form.addEventListener('submit', function (ev) {
    ev.preventDefault()

    const fullnameInput = document.getElementById('fullname')
    const inputRows = document.querySelectorAll('.inputRow')

    let technologies = []
    inputRows.forEach(function (row) {
        const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value
        const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
        technologies.push({ name: techName, exp: techExp })
    })

    const newDev = { fullname: fullnameInput.value, technologies: technologies }
    dev.push(newDev)
    alert('Dev cadastrado com sucesso')

    fullnameInput.value = ''
    inputRows.forEach(function (row) {
        row.remove()
    })

    console.log(dev)
})