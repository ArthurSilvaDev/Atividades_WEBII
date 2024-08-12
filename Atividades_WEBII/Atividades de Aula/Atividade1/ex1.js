let arr = [20, 45, 60, 50];

function media(arr){

    var total =0;
    var resultado =0;
    for( let i = 0; i < arr.length ; i++){
        resultado += arr[i];
    }
    total = resultado / arr.length;
    console.log(total);

}

const elevaAoQuadrado = (num) => num * num


media(arr);