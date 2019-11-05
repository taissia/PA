// Funktsioonid
//funktsiooni defineerimine
// function funktsiooniNimi([param1, param2, ...,paramN]){
    //funktsiooni sisu }
function paarsuseKontroll(arv){
    

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
paarsuseKontroll(7);
paarsuseKontroll(9);
paarsuseKontroll(7765);