let rootEl = document.querySelector("#root")
let bntEl = document.querySelector("#btn")
let modalEl = document.querySelector(".modal")
let closebtn=document.querySelector("#close")
let modalitems = document.querySelector(".modal-items")
let editbtn = document.createElement("button")

const person = [
    {
        id:1,
        name:"idibek"
    },
    {
        id:2,
        name:"John"
    },
    {
        id:3,
        name:"Anvar"
    },
    {
        id:4,
        name:"Mubashir"
    }    
]

function get() {
    person.forEach((e) => {
        let divEl = document.createElement("div")
        divEl.classList.add("div")
        divEl.style.display="flex"
        rootEl.appendChild(divEl)
        let nameEl = document.createElement("h3")
        nameEl.classList.add("text")
        let btnnEl = document.createElement("button")
        let inputEl = document.querySelector('#input')
        btnnEl.classList.add("edit")
        btnnEl.innerHTML="Edit"
        nameEl.innerHTML=e.name
        divEl.appendChild(nameEl)
        divEl.appendChild(btnnEl)
        btnnEl.onclick = () => {
            modalEl.style.display="flex"
            inputEl.value=e.name;
        }
    })
    closebtn.onclick = () => {
        modalEl.style.display="none"
    }
}
get()



