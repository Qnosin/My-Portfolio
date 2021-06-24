const presetnt = document.querySelector('.Hello-present');
let x =0;

function sign(){
    const text = `My name is Jakub Putaj and I'm a Front End Web Developer!`;
    presetnt.textContent += text[x]
    x++;
    if(x == text.length){
        clearInterval(myInterval);
    }

}
const myInterval = setInterval(sign,100)




