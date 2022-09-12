const faq_desc1 = document.getElementById('faq_desc1');
const faq_desc2 = document.getElementById('faq_desc2');
const faq_desc3 = document.getElementById('faq_desc3');
const faq_desc4 = document.getElementById('faq_desc4');
const faq_desc5 = document.getElementById('faq_desc5');
const faq_desc6 = document.getElementById('faq_desc6');
const faq_desc7 = document.getElementById('faq_desc7');

const faq_arrow1 = document.getElementById('faq_arrow1');
const faq_arrow2 = document.getElementById('faq_arrow2');
const faq_arrow3 = document.getElementById('faq_arrow3');
const faq_arrow4 = document.getElementById('faq_arrow4');
const faq_arrow5 = document.getElementById('faq_arrow5');
const faq_arrow6 = document.getElementById('faq_arrow6');
const faq_arrow7 = document.getElementById('faq_arrow7');

function descFunction (elem, arrow){
    if(elem.style.display !== 'block'){
        elem.style.display='block';
        arrow.style.transform = 'rotate(0deg)';
        arrow.style.opacity = '1';
    } else {
        elem.style.display='none'
        arrow.style.transform = 'rotate(180deg)';
        arrow.style.opacity = '0.3';
    }
}

faq_arrow1.addEventListener('click',()=>descFunction(faq_desc1,faq_arrow1))
faq_arrow2.addEventListener('click',()=>descFunction(faq_desc2,faq_arrow2))
faq_arrow3.addEventListener('click',()=>descFunction(faq_desc3,faq_arrow3))
faq_arrow4.addEventListener('click',()=>descFunction(faq_desc4,faq_arrow4))
faq_arrow5.addEventListener('click',()=>descFunction(faq_desc5,faq_arrow5))
faq_arrow6.addEventListener('click',()=>descFunction(faq_desc6,faq_arrow6))
faq_arrow7.addEventListener('click',()=>descFunction(faq_desc7,faq_arrow7))

