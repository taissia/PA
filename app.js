// Funktsioonid
//Risküliku pindala arvutamine
function pindalaArvutamine(pikkus, laius){
    //arvutame pindala
    let pindala = pikkus * laius;
    //tagstame pindala põhiprogrammi
    return pindala;
    
}

//funktsioon, mis väljastab tulemus ekraani
function valjasta(pikkus = 0, laius = 0){
    //väljastame väärtus
    console.log('Pikkus = ' + pikkus);
    console.log('Laius = ' + laius);
    //salvestame arvutatud pindala
    pindala = pindalaArvutamine(pikkus, laius);
    console.log(pindala);
    //väljastame tulemus
    console.log('Pindala = ' + pindala);
}

valjasta(15, 5);
valjasta(154, 587);
valjasta();