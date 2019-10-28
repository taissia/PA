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
numbrid.sort();
//kontrollime tulemus
console.log(numbrid)
//for(let i = 0; i < numbrid.length; i++){
  //  console.log(numbrid[i]);
//}