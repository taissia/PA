console.log('JS test')
//tsüklid

//for tsükkel
//üldtsükkel
let numbrid = [];
//lisame nimekirja sisse juhusliku numbri
for(let i = 0; i < 10; i++){
    let arv = Math.floor(Math.random() * 10);
    numbrid.push(arv);
}
//kontrollime tulemus
console.log(numbrid);
//sorteerime kasvujärjestuses
//numbrid.sort();

//kontrollime tulemus
console.log(numbrid)
for(let kord = 0; kord < numbrid.length; kord++){
    for(let i = 0; i < numbrid.length; i++){
        let abi;
        if (numbrid [i] > numbrid [i+1]){
            abi = numbrid[i+1];
            numbrid[i] = numbrid[i+1];
            numbrid[i+1] = abi;
            }
    
    }
}
//kontrollime tulemus
console.log(numbrid);