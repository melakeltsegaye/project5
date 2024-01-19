const card = document.querySelectorAll(".card");
const amou = document.querySelector(".amou");
let counter=0;

card.forEach((item)=> {
    item.addEventListener('click', ()=> {
        counter+=1;
        console.log(counter)
        localStorage.setItem("amount", counter);
    })
})

amou.innerText = localStorage.getItem("amount")