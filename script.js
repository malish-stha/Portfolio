function show(){
    document.querySelector('.hamburger').classList.toggle('open')
    document.querySelector('.navigation').classList.toggle('active')
}

window.addEventListener("mousemove", e => {
    let x = e.clientX;
    let y = e.clientY;
    
    const text = document.querySelector("p");
    
    const section = document.querySelector("section");
    
    text.style.transform = `translate(-${x * 0.06}px, -${y * 0.06}px)`;
    
    section.style.backgroundPositionX = `-${x * 0.09}px`;
    
    section.style.backgroundPositionY = `-${y * 0.09}px`;


    const text1 = document.getElementById("text1");
    const sec = document.getElementById("skill");

    text1.style.transform = `translate(-${x * 0.06}px, -${y * 0.06}px)`;
    
    sec.style.backgroundPositionX = `-${x * 0.1}px`;
    
    sec.style.backgroundPositionY = `-${y * 0.1}px`;


    const text2 = document.getElementById("text2");
    const proj = document.getElementById("project");

    text2.style.transform = `translate(-${x * 0.06}px, -${y * 0.06}px)`;
    
    proj.style.backgroundPositionX = `-${x * 0.1}px`;
    
    proj.style.backgroundPositionY = `-${y * 0.1}px`;


    const text3 = document.getElementById("text3");
    const conta = document.getElementById("contact");

    text3.style.transform = `translate(-${x * 0.06}px, -${y * 0.06}px)`;
    
    conta.style.backgroundPositionX = `-${x * 0.1}px`;
    
    conta.style.backgroundPositionY = `-${y * 0.1}px`;

    const tex = document.getElementById("tex");
    tex.style.transform = `translate(-${x * 0.03}px, -${y * 0.03}px)`;
    
  })