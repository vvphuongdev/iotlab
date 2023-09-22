let btn1 = document.querySelector('#btn1');
let img1 = document.querySelector('#bomnuoc');
let btn2 = document.querySelector('#btn2');
// functions nut bam
// const database=firebase.database();
// const deviceRef=database.ref('quan1');

btn1.addEventListener('click', ()=>{
    img1.src = 'bomnuoc_on.png'; 
    firebase.database().ref("Thietbi1").set({Maybom: "Da bat"})
})
btn2.addEventListener('click', ()=>{
    img1.src = 'bomnuoc_off.png';
    firebase.database().ref("Thietbi1").set({Maybom: "Da tat"})
})



let btn3 = document.querySelector('#btn3');
let img2 = document.querySelector('#baochay');
let btn4 = document.querySelector('#btn4');
// functions nut bam
btn3.addEventListener('click', ()=>{
    img2.src = 'baochay_on.png'; 
    firebase.database().ref("Thietbi2").set({Baochay: "Da bat"})
})

btn4.addEventListener('click', ()=>{
    img2.src = 'baochay_off.png';
    firebase.database().ref("Thietbi2").set({Baochay:"Da tat"})
})



let btn5 = document.querySelector('#btn5');
let img3 = document.querySelector('#batden');
let btn6 = document.querySelector('#btn6');

// functions nut bam
btn5.addEventListener('click', ()=>{
     img3.src = 'lamp_on.png';
     firebase.database().ref("Thietbi3").set({Den: "Dat bat"})

})
btn6.addEventListener('click', ()=>{
    img3.src = 'lamp_off.png';
    firebase.database().ref("Thietbi3").set({Den: "Dat tat"})

})