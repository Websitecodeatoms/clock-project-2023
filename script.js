let sc = document.querySelector('#sc');
let mn = document.querySelector('#mn');
let hr = document.querySelector('#hr');

setInterval(()=>{
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;    
    
    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
})



// clock script here

document.querySelector('body').addEventListener('mousemove', eyeball)

function eyeball(){
    const eye = document.querySelectorAll('.eye');
    eye.forEach((eye)=>{
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);

        let radian = Math.atan2(event.pageX - x, event.pageY - y );
        let rotation = (radian * (180 / Math.PI) * -1) + 270;

        eye.style.transform = "rotate("+rotation+"deg)"
    })
}