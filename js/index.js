document.addEventListener("DOMContentLoaded", ()=>{
    let myform = document.getElementById('github-form')
    myform.addEventListener('submit', e => {
        e.preventDefault()
        let wordToSearch = document.getElementById('search')
        let name = wordToSearch.value.split(" ").join('')
        console.log(name)
    })
    
})

function searchUsers(word){
    fetch(`https://api.github.com/user/emkayint`)
    .then( res => res.json())
    .then( data => console.log(data))
}

searchUsers()

function displayinfo(dataset){
    dataset.forEach(data => {
        let elem = document.getElementById('user-list')
        let li = document.createElement('li')
        li.innerHTML = `<div class= "card"> 
            <img src = "${data.avatar_url}" class = 'image-fluid' style = "width: 300px; height: 300px">
            <p> ${data.login} </p>
            <p> ${data.name} </p>
            <p> ${data.location} </p>

        </div> `

        elem.appendChild(li)
    })
}