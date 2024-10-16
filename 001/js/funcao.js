// script.js
let slideIndex = 1;
showSlides(slideIndex);

function prevSlide() {
    showSlides(slideIndex -= 1);
}

function nextSlide() {
    showSlides(slideIndex += 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    console.log(n);
    let slides = document.querySelectorAll('.carousel-images img');
    let dots = document.querySelectorAll('.carousel-dots .dot');

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    slides.forEach((slide, index) => {
        slide.style.display = (index + 1 === slideIndex) ? 'block' : 'none';
    });

    dots.forEach((dot, index) => {
        dot.className = (index + 1 === slideIndex) ? 'dot active' : 'dot';
    });

    carroinfo(n)
    parcela(n)
}





function carroinfo(n) {
    let nome = document.querySelector("#infocarro")
    let ano = document.querySelector("#ano")
    let preço = document.querySelector(".preço")
    let marca = document.querySelector("#marca")
    let select = document.querySelector("#select")
    let button = document.querySelector("#button")
    let estado = document.querySelector("#formato")
    let entrada = (document.querySelector("#entrada").value)
    let bmw = 847950
    let brabus = 1990000
    let corolla = 89900
    let uno = 7510
    let total
    let anoF
    let valorFinal
    let juros

    if (n === 1) {
        nome.textContent = "BMW X6"
        ano.textContent = "2017"
        preço.textContent = (bmw)
        marca.textContent = "BMW"
        anoF=2017
        
        if(anoF<=2010){

            juros=bmw*0.95 
                        estado.textContent="USADO"
            
        }
         else if(anoF>2010 && anoF<=2023){
            juros=bmw*0.90
             estado.textContent="SEMINOVO"
        }
         else if(anoF>2023){
            juros=bmw*1.20
            
            estado.textContent="NOVO"
            
        }
        valorFinal=juros-entrada
        
        
        

        button.addEventListener('click', () => {
            let resultado = document.querySelector('#Total')
            let info = document.querySelector('#INFO')
            if ((select.value) === 1) {
                resultado.textContent = (valorFinal)
                info.textContent= "Valor Total: R$"
            }
            else {
                total=(valorFinal / (select.value))
                resultado.textContent = total.toFixed(3)
                info.textContent= "Valor Total: R$"
            }



        })

    }
    else if (n === 2) {
        nome.textContent = "G6 BRABUS"
        ano.textContent = "2022"
        preço.textContent = (brabus)
        marca.textContent = "MERCEDEZ BENZ"
        anoF=2022
        
        if(anoF<=2010){
            juros=brabus*0.95              
             estado.textContent="USADO"
            
        }
         else if(anoF>2010 && anoF<=2023){
            juros=brabus*0.90
             estado.textContent="SEMINOVO"
        }
         else if(anoF>2023){
            juros=brabus*1.20   
            estado.textContent="NOVO"
            
        }
        valorFinal=juros-entrada
        button.addEventListener('click', () => {
            let resultado = document.querySelector('#Total')
            let info = document.querySelector('#INFO')
            if ((select.value) === 1) {
                resultado.textContent = (valorFinal)
                info.textContent= "Valor Total: R$"
            }
            else {
                total=(valorFinal / (select.value))
                resultado.textContent = total.toFixed(3)
                info.textContent= "Valor Total: R$"

            }



        })

    }
    else if (n === 3) {
        nome.textContent = "Corolla Hybrid "
        ano.textContent = "2017"
        preço.textContent = (corolla)
        marca.textContent = "TOYOTA"
        anoF=2017
        if(anoF<=2010){

            juros=corolla*0.95       
             estado.textContent="USADO"
            
        }
         else if(anoF>2010 && anoF<=2023){
            juros=corolla*0.90
             estado.textContent="SEMINOVO"
        }
         else if(anoF>2023){
            juros=corolla*1.20
            estado.textContent="NOVO"
            
        }
        valorFinal=juros-entrada
        button.addEventListener('click', () => {
            let resultado = document.querySelector('#Total')
            let info = document.querySelector('#INFO')
            if ((select.value) === 1) {
                resultado.textContent = (valorFinal)
                info.textContent= "Valor Total: R$"
            }
            else {
                total= (valorFinal / (select.value))
                resultado.textContent = total.toFixed(3)
                info.textContent= "Valor Total: R$"
            }



        })
    }
    else if (n === 4) {
        nome.textContent = "Fiat Uno"
        ano.textContent = "1992"
        preço.textContent = (uno)
        marca.textContent = "FIAT"
        anoF=1992
        if(anoF<=2010){
            juros= uno*0.95
             estado.textContent="USADO"
            
        }
         else if(anoF>2010 && anoF<=2023){
            juros= uno*0.90
             estado.textContent="SEMINOVO"
            

        }
         else if(anoF>2023){
            juros=uno*1.20
            estado.textContent="NOVO"
            
        }
        valorFinal=juros-entrada
        button.addEventListener('click', () => {
            let resultado = document.querySelector('#Total')
            let info = document.querySelector('#INFO')
            if ((select.value) === 1) {
                resultado.textContent = (valorFinal)
                info.textContent= "Valor Total: R$"
            }
            else {
                total=(valorFinal / (select.value))
                resultado.textContent = total.toFixed(3)
                info.textContent= "Valor Total: R$"
            }



        })

    }
}




