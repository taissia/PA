// Funktsioonid
//Risküliku pindala arvutamine
function pindalaArvutamine(pikkus, laius){
    //väljastame väärtuse
    console.log('Pikkus = ' + pikkus);
    console.log('Laius = ' + laius);
    //arvutame pindala
    let pindala = pikkus * laius;
    console.log('Pindala = ' + pindala);
}
pindalaArvutamine(5, 6);