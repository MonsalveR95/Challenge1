
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
    texto.value = ""    
}

function encriptar(valor) {
    const letters = valor.split('')
    const letter_encripted = letters.map(letter => { // ["ai", "enter", "j"]
        const encripted = json[letter] ?? letter
        return encripted
    })
    return letter_encripted.join('') // aienterj
}

const clave = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    uaft: "u"
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(texto.value);
    mensaje.value = textoDesencriptado;
    texto.value = "" 
}

function desencriptar(valor1){
    for(i = 0; i <= texto.length; i++){
        if(valor1.includes(Object.keys(clave))){
            valor1 = valor1.replaceAll()
        }
    }
}

//const palabras = valor.split(/(\d)/)
//const letraDesencrip = palabras.map(letra => {
//    const desen = clave[letra] ?? letra
//    return desen
//})
//return letraDesencrip.join('')