const buttonInfo = document.querySelector('#info');
const buttonCollab = document.querySelector('#collabs');
const buttonAlbum = document.querySelector('#album');
const buttonCmt = document.querySelector('#comments');
const buttonInfo2 = document.querySelector('#info2');
const buttonCollab2 = document.querySelector('#collabs2');
const buttonAlbum2 = document.querySelector('#album2');
const buttonCmt2 = document.querySelector('#comments2');
const buttonInfo3 = document.querySelector('#info3');
const buttonCollab3 = document.querySelector('#collabs3');
const buttonAlbum3 = document.querySelector('#album3');
const buttonCmt3 = document.querySelector('#comments3');

buttonInfo.addEventListener('click', function(event) {
    fetch('http://127.0.0.1:8080/infos/list')
        .then(response => response.json())
        .then(body => renderList(body))
            .catch((error) => alert(error));
});

buttonCollab.addEventListener('click', function(event) {
    fetch('http://127.0.0.1:8080/collabs/list')
        .then(response => response.json())
        .then(body => renderList(body))
            .catch((error) => alert(error));
});

buttonAlbum.addEventListener('click', function(event) {
    fetch('http://127.0.0.1:8080/album/list')
        .then(response => response.json())
        .then(body => renderList(body))
            .catch((error) => alert(error));
});

buttonCmt.addEventListener('click', function(event) {
    fetch('http://127.0.0.1:8080/comments/list')
        .then(response => response.json())
        .then(body => renderList(body))
            .catch((error) => alert(error));
});

//2nd

buttonInfo2.addEventListener('click', function(event) {
    fetch('http://127.0.0.1:8080/infos2/list')
        .then(response => response.json())
        .then(body => renderList2(body))
            .catch((error) => alert(error));
});

buttonCollab2.addEventListener('click', function(event) {
    fetch('http://127.0.0.1:8080/collabs2/list')
        .then(response => response.json())
        .then(body => renderList2(body))
            .catch((error) => alert(error));
});

buttonAlbum2.addEventListener('click', function(event) {
    fetch('http://127.0.0.1:8080/album2/list')
        .then(response => response.json())
        .then(body => renderList2(body))
            .catch((error) => alert(error));
});

buttonCmt2.addEventListener('click', function(event) {
    fetch('http://127.0.0.1:8080/comments2/list')
        .then(response => response.json())
        .then(body => renderList2(body))
            .catch((error) => alert(error));
});


//3rd
buttonInfo3.addEventListener('click', function(event) {
    fetch('http://127.0.0.1:8080/infos3/list')
        .then(response => response.json())
        .then(body => renderList3(body))
            .catch((error) => alert(error));
});

buttonCollab3.addEventListener('click', function(event) {
    fetch('http://127.0.0.1:8080/collabs3/list')
        .then(response => response.json())
        .then(body => renderList3(body))
            .catch((error) => alert(error));
});

buttonAlbum3.addEventListener('click', function(event) {
    fetch('http://127.0.0.1:8080/album3/list')
        .then(response => response.json())
        .then(body => renderList3(body))
            .catch((error) => alert(error));
});

buttonCmt3.addEventListener('click', function(event) {
    fetch('http://127.0.0.1:8080/comments3/list')
        .then(response => response.json())
        .then(body => renderList3(body))
            .catch((error) => alert(error));
});

//functions
function renderList (infos){
    let container = document.getElementById('content');
    container.innerHTML = "";
    for(let info of infos){
       let item = document.createElement('li');
       item.innerHTML = info;
       container.appendChild(item);
    }
}

function renderList2 (infos){
    let container = document.getElementById('content2');
    container.innerHTML = "";
    for(let info of infos){
       let item = document.createElement('li');
       item.innerHTML = info;
       container.appendChild(item);
    }
}

function renderList3 (infos){
    let container = document.getElementById('content3');
    container.innerHTML = "";
    for(let info of infos){
       let item = document.createElement('li');
       item.innerHTML = info;
       container.appendChild(item);
    }
}

//ariana
let submit = document.getElementById('submit-post');

submit.addEventListener('click', async function(event){
    event.preventDefault();
    var x = document.forms["InputForm"]["comm"].value;
    if (x == "") {
      alert("Add some comments!");
      return false;
    }
    else{
      alert(x);
    }
    let comm = document.getElementById('comm').value;
    let parameters = {'comm': comm};
    let response = await fetch('http://127.0.0.1:8080/comments/add',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(parameters)
    
});
let body = await response.json();
renderList(body);
});


//taylor's comments
let submit2 = document.getElementById('submit-post2');

submit2.addEventListener('click', async function(event){
    event.preventDefault();
    var x = document.forms["InputForm2"]["tscomm"].value;
    if (x == "") {
      alert("Add some comments!");
      return false;
    }
    else{
      alert(x);
    }
    let comm2 = document.getElementById('tscomm').value;
    let parameters = {'tscomm': comm2};
    let response = await fetch('http://127.0.0.1:8080/comments2/add',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(parameters)
});
let body2 = await response.json();
renderList2(body2);
});



//justin's comments
let submit3 = document.getElementById('submit-post3');

submit3.addEventListener('click', async function(event){
    event.preventDefault();
    var x = document.forms["InputForm3"]["jbcomm"].value;
    if (x == "") {
      alert("Add some comments!");
      return false;
    }
    else{
      alert(x);
    }
    let comm3 = document.getElementById('jbcomm').value;
    let parameters = {'jbcomm': comm3};
    let response = await fetch('http://127.0.0.1:8080/comments3/add',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(parameters)
});
let body3 = await response.json();
renderList3(body3);
});
