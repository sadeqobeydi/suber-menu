let icons = document.querySelectorAll("i")
let txt = document.querySelectorAll('p')

const ul = document.getElementById('ul')
const circle = document.getElementById('circle')



ul.addEventListener('click' , function(elemnt){
    if(elemnt.target.tagName == "I"){
        activis(elemnt.target)
        circleTransform(elemnt.target)
    }

})

function activis (element){
    icons.forEach((item)=>{
        if(element === item){
            item.classList.add("active")
            item.nextElementSibling.classList.add("active")
        }
        else{
            item.classList.remove("active")
            item.nextElementSibling.classList.remove("active")
        }
    })
}

function circleTransform(item){
    let ur = ul.getBoundingClientRect().left;
    let ir = item.getBoundingClientRect().left;

    circle.style.left = `${(ir - ur)-10}px`
}

