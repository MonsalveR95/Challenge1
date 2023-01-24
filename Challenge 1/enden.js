
const texto = document.querySelector(".textoaca");
const mensaje = document.querySelector(".mensaje");

const json = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'uaft'
}

function btnEncriptar(){
    const textoEncriptado = encriptar(texto.value)
    mensaje.value = textoEncriptado
}

function encriptar(valor) {
    const letters = valor.split('')
    const letter_encripted = letters.map(letter => { // ["ai", "enter", "j"]
        const encripted = json[letter] ?? letter
        return encripted
    })
    return letter_encripted.join('') // aienterj
}

