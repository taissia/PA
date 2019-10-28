console.log('JS test')
//tsüklid

//while
//ellkontrollimisega tsükkel
//numbri defineerimine
let arv = 5; 
//def. jagaja algväärtus
let jagaja = 2;
while(arv % jagaja != 0){
    jagaja++;
}
//kontrollime, kas jagasime sama arvuga
if (arv == jagaja) {
    console.log(arv + ' on algarv');
}  else {
    console.log(arv + ' ei ole algarv');
}