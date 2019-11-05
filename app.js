// Funktsioonid
//Risküliku pindala arvutamine
function pindalaArvutamine(pikkus, laius){
    //arvutame pindala
    let pindala = pikkus * laius;
    //tagstame pindala põhiprogrammi
    return pindala;
    
}

//funktsioon, mis väljastab tulemus ekraani
function valjasta(pikkus, laius){
    //väljastame väärtus
    console.log('Pikkus = ' + pikkus);
    console.log('Laius = ' + laius);
    //salvestame arvutatud pindala
    let pindala = pindalaArvutamine(pikkus, laius);
    //väljastame tulemus
    console.log('Pindala = ' + pindala);
}

valjasta(15, 5);
valjasta(154, 587);