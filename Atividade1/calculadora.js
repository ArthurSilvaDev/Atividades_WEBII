const mediaA = (notas) => { 
    let soma = 0
    for (nota of notas){
        soma+=nota
    }

    return Math.round(soma/notas.length)
}

module.exports.media = mediaA