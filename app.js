// Funktsioonid
//funktsiooni defineerimine
// function funktsiooniNimi([param1, param2, ...,paramN]){
    //funktsiooni sisu }
function paarsuseKontroll(arv){
    //tulemuslause gefineerimine
    let lause;

    //arvutame arv 2 jagamisel
    let jaak = arv % 2;
    //kui jaak võrdne nulliga
    if( jaak === 0 ){
        //tegu on paaris arvuga
     
        lause = arv + ' on paaris';
    } else {
        //tegu on paaritu arvuga
        lause = arv + ' on paaritu ';
    }
    //tagastame antud väärtus
    return lause;
}

//Funktsiooni kasutamine
let paarsus;
paarsus = paarsuseKontroll(7);
console.log(paarsus);
//paarsus= asemel kohe paarsuseKontroll consolis
console.log(paarsuseKontroll(9));
paarsuseKontroll(7765);