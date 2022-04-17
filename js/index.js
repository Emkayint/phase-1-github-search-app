document.addEventListener("DOMContentLoaded", ()=>{
    let myform = document.getElementById('github-form')
    myform.addEventListener('submit', e => {
        e.preventDefault()
        let wordToSearch = document.getElementById('search')
        let name = wordToSearch.value.split(" ").join('')
        // console.log(name)
        searchUsers(name)
    })
    
})

function searchUsers(word){
    fetch(`https://api.github.com/users/${word}`)
    .then( res => res.json())
    .then(displayinfo)
}


function displayinfo(data){
        let elem = document.getElementById('user-list')
        let li = document.createElement('li')
        li.innerHTML = `<div class= "card"> 
            <img src = "${data.avatar_url}" class = 'image-fluid' style = "width: 300px; height: 300px">
            <p> <span> Username </span> ${data.login} </p>
            <p> <span>Name</> ${data.name} </p>
            <p> <span>location</span> ${data.location} </p>

        </div> `
        elem.appendChild(li)
}