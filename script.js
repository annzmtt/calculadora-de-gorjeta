let conta = 0
let porcentagem = 0
let pessoas = 0

function receiveBillValue() {

    const contaInput = document.querySelector("#bill")

    conta = Number(contaInput.value)

    calcular()
}

function receiveNumberOfPeopleValue() {

    const pessoasInput = document.querySelector("#people")

    pessoas = Number(pessoasInput.value)

    calcular()
}

function receiveTipPercentageValue(valor) {

    porcentagem = valor / 100

    calcular()
}

function receiveCustomTipPercentageValue() {

    const gorjetaInput = document.querySelector("#custom-tip")

    if(gorjetaInput.value !== "") {

        porcentagem = Number(gorjetaInput.value) / 100

    } else {

        porcentagem = 0
    }

    calcular()
}

function calcular() {

    if(conta !== 0 && porcentagem !== 0 && pessoas !== 0) {

        const strongGorjetaTotal = document.querySelector(".amount strong")

        strongGorjetaTotal.innerHTML =
        `$${(conta * porcentagem / pessoas).toFixed(2)}`

        const strongTotal = document.querySelector(".total strong")

        strongTotal.innerHTML =
        `$${((conta + (conta * porcentagem)) / pessoas).toFixed(2)}`
    }
}

function reset() {

    document.querySelector("#bill").value = ""

    document.querySelector("#people").value = ""

    document.querySelector("#custom-tip").value = ""

    document.querySelector(".amount strong").innerHTML = "$0.00"

    document.querySelector(".total strong").innerHTML = "$0.00"

    conta = 0
    porcentagem = 0
    pessoas = 0
}