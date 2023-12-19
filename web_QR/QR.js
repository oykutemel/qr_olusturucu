const wrapper=document.querySelector(".wrapper"),
qrInput=wrapper.querySelector(".form input"),
generateBtn=wrapper.querySelector(".form button"),
qrImg=wrapper.querySelector(".QR-kod img");

generateBtn.addEventListener("click",() => {
    let qrValue = qrInput.value;
    if(!qrValue) return;
    generateBtn.innerText = "Qr kod oluşturma";
    qrImg.src='https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}';
    qrImg.addEventListener("load" , ()=>{
        wrapper.classList.add("active");
        generateBtn.innerText = "Qr kod oluşturma";
    });
    
});

qrInput.addEventListener("keyup",()=>{
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }

});
