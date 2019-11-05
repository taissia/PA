// Funktsioonid

// arvu paarsuse kontroll
function paarsuseKontroll(){
    //defineerime suvaline täisarv

    let arv = 5;
    //arvutame arv 2 jagamisel
    let jaak = arv % 2;
    //kui jaak võrdne nulliga
    if( jaak === 0 ){
        //tegu on paaris arvuga
        console.log(arv + ' on paaris');
    } else {
        //tegu on paaritu arvuga
        console.log(arv + ' on paaritu ');
    }
}

//Funktsiooni kasutamine
paarsuseKontroll();