var st = false
let ShowLoginPas = document.querySelector('#showlogin')
let ClosLoginPas = document.querySelector('#closlogin')
let ShowsignPas = document.querySelector('#showsign')
let ClossignPas = document.querySelector('#clossign')
let ShowsignPas2 = document.querySelector('#showsign2')
let ClossignPas2 = document.querySelector('#clossign2')

function login() {
    if (st) {
        document.querySelector('#passwordlogin').setAttribute('type', 'password');
        ShowLoginPas.classList.add('d-none')
        ClosLoginPas.classList.remove('d-none')
        st = false
    } else {
        document.querySelector('#passwordlogin').setAttribute('type', 'text');
        ClosLoginPas.classList.add('d-none')
        ShowLoginPas.classList.remove('d-none')
        st = true
    }
}

function sign() {
    if (st) {
        document.querySelector('#signupPassword').setAttribute('type', 'password');
        ShowsignPas.classList.add('d-none')
        ClossignPas.classList.remove('d-none')
        st = false
    } else {
        document.querySelector('#signupPassword').setAttribute('type', 'text');
        ClossignPas.classList.add('d-none')
        ShowsignPas.classList.remove('d-none')
        st = true
    }
}

function signr() {
    if (st) {
        document.querySelector('#signupPasswordRNew').setAttribute('type', 'password');
        ShowsignPas2.classList.add('d-none')
        ClossignPas2.classList.remove('d-none')
        st = false
    } else {
        document.querySelector('#signupPasswordRNew').setAttribute('type', 'text');
        ClossignPas2.classList.add('d-none')
        ShowsignPas2.classList.remove('d-none')
        st = true
    }
}



let Login = document.querySelector('#LogIn')
let SignUP = document.querySelector('#SignUp')
let btnSign = document.querySelector('#btn-signup')
let btnLogin = document.querySelector('#btn-loginnew')
let LoginCard = document.querySelector('#btn-log')
let Card = document.querySelector("#Card")
let PageInput = document.querySelector('#pageInput')
let Input = document.querySelector('#Input')
let PageCard = document.querySelector('#pagecard')
let PageEdit = document.querySelectorAll('.Edit')
let Edit = document.querySelector('#Edit')
let Save = document.querySelector('#Save')
let Log2 = document.querySelector('#LogIn1')
let btnSign2 = document.querySelector('#btn-sign')
let log3 = document.querySelector('#btn-sign2')


btnSign.addEventListener('click', function(Sign) {
    Login.classList.add('d-none')
    SignUP.classList.replace('d-none', 'd-block')
})
btnSign2.addEventListener('click', function(Sign2) {
    Login.classList.add('d-none')
    SignUP.classList.replace('d-none', 'd-block')
})
btnLogin.addEventListener('click', function(Log) {
    SignUP.classList.add('d-none')
    Login.classList.remove('d-none')
})
Log2.addEventListener('click', function(Log2) {
    SignUP.classList.add('d-none')
    Login.classList.remove('d-none')
})
log3.addEventListener('click', function(Log3) {
    SignUP.classList.add('d-none')
    Login.classList.remove('d-none')
})

LoginCard.addEventListener('click', function(LogCard) {
    Login.classList.add('d-none')
    Card.classList.remove('d-none')
})

PageInput.addEventListener('click', function(PageIn) {
    Card.classList.add('d-none')
    Input.classList.remove('d-none')
})
PageCard.addEventListener('click', function(PageCar) {
    Input.classList.add('d-none')
    Card.classList.remove('d-none')
})

function PageEd() {
    Card.classList.add('d-none')
    Edit.classList.remove('d-none')
}

Save.addEventListener('click', function(Sav) {
    Edit.classList.add('d-none')
    Card.classList.remove('d-none')
})