var casual = require('casual');

for (var i =0; i <10; i++){
    //var nome = casual.first_name
    //var sobrenome = casual.last_name
    // rua = casual.street
    //var cidade = casual.city
    //var pais = casual.country
    //var cep = casual.zip(digits = 9)

    //console.log('Nome: ' + nome + ' ' + sobrenome + ', Rua: ' + rua + ', Cidade: ' + cidade +  ', Pais: ' + pais + ', cep: ' + cep)

    console.log('Nome: ' + casual.first_name + ' ' + casual.last_name + ', Rua: ' + casual.street + ', Cidade: ' + casual.city +  ', Pais: ' + casual.country + ', cep: ' + casual.zip(digits = 9))
}