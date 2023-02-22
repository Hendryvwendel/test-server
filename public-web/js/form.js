// make loader work
const loader = document.querySelector('.loader');

// select inputs
const submitBtn = document.querySelector('.submit-btn');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const tac = document.querySelector('#terms-and-cond');
const notification = document.querySelector('#notification');

submitBtn.addEventListener('click', () => {
     if(name.value.length < 3){
        showAlert('Je naam moet 3 tekens of langer zijn!!');
     } else if(!email.value.length){
         showAlert('vul je email-adres in!!')
     } else if(password.value.length < 8){
         showAlert('je wachtwoord moet 8 tekens of langer zijn!!');
     } else if(!tac.checked){
         showAlert('je moet akkoord gaan met de algemene voorwaarden');
     } else {
         loader.style.display = 'block';
         sendData('/signup', {
             name: name.value,
             email: email.value,
             password: password.value,
             tac: tac.checked,
             notification: notification.checked,
             seller: false
         })
     }
})

const sendData = (path, data) => {
    fetch(path, {
        method: 'post',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(data)
    }).then((res) => res.json())
    .then(response => {
        processData(response);
    })
}

const processData = (data) => {
    loader.style.display = null;
    if(data.alert){
        showAlert(data.alert);
    }
}


const showAlert = (msg) => {
    let alertBox = document.querySelector('.alert-box');
    let alertMsg = document.querySelector('.alert-msg');
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 3000);
}