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
     firebase.database().ref("Thietbi3").set({Den: "Da bat"})

})
btn6.addEventListener('click', ()=>{
    img3.src = 'lamp_off.png';
    firebase.database().ref("Thietbi3").set({Den: "Da tat"})

})

let btn_farm1 = document.querySelector('#farm1');
let btn_farm2 = document.querySelector('#farm2');
let btn_farm3 = document.querySelector('#farm3');
let btn_farm4 = document.querySelector('#farm4');
let nhiet_do = document.querySelector("#nhietdo1");
let do_am = document.querySelector("#doam1");
let anh_sang = document.querySelector("#anhsang1");

btn_farm1.addEventListener('click', ()=>{
    nhiet_do.src = 'temp1-icon.png';
    do_am.src = 'humidity-on.png';
    anh_sang.src = 'light-on.png';
    btn_farm1.style.backgroundColor = '#CCFF00';
    btn_farm2.style.backgroundColor = 'white';
    btn_farm3.style.backgroundColor = 'white';
    btn_farm4.style.backgroundColor = 'white';
})
btn_farm2.addEventListener('click', ()=>{
    nhiet_do.src = 'temp1-icon.png';
    do_am.src = 'humidity-on.png';
    anh_sang.src = 'light-on.png';
    btn_farm1.style.backgroundColor = 'white';
    btn_farm2.style.backgroundColor = '#CCFF00';
    btn_farm3.style.backgroundColor = 'white';
    btn_farm4.style.backgroundColor = 'white';
})
btn_farm3.addEventListener('click', ()=>{
    nhiet_do.src = 'temp1-icon.png';
    do_am.src = 'humidity-on.png';
    anh_sang.src = 'light-on.png';
    btn_farm1.style.backgroundColor = 'white';
    btn_farm2.style.backgroundColor = 'white';
    btn_farm3.style.backgroundColor = '#CCFF00';
    btn_farm4.style.backgroundColor = 'white';
})
btn_farm4.addEventListener('click', ()=>{
    nhiet_do.src = 'temp1-icon.png';
    do_am.src = 'humidity-on.png';
    anh_sang.src = 'light-on.png';
    btn_farm1.style.backgroundColor = 'white';
    btn_farm2.style.backgroundColor = 'white';
    btn_farm3.style.backgroundColor = 'white';
    btn_farm4.style.backgroundColor = '#CCFF00';
})

let btn_home = document.querySelector('#home');
let nhiet_do_so = document.querySelector('#nhietdo');
let do_am_so = document.querySelector('#doam');
let anh_sang_so = document.querySelector('#anhsang');

btn_home.addEventListener('click', ()=>{
    img1.src = 'bomnuoc_off.png';
    img2.src = 'baochay_off.png';
    img3.src = 'lamp_off.png';
    nhiet_do.src = 'temp-icon.png';
    do_am.src = 'humidity-off.png';
    anh_sang.src = 'light-off.png';
    btn_farm1.style.backgroundColor = 'white';
    btn_farm2.style.backgroundColor = 'white';
    btn_farm3.style.backgroundColor = 'white';
    btn_farm4.style.backgroundColor = 'white';
    nhiet_do_so.innerHTML = '&nbsp';
    do_am_so.innerHTML = '&nbsp;';
    anh_sang_so.innerHTML = '&nbsp;';
    firebase.database().ref("Thietbi1").set({Maybom: "Da bat"})
    firebase.database().ref("Thietbi2").set({Baochay:"Da tat"})
    firebase.database().ref("Thietbi3").set({Den: "Da tat"})
})

