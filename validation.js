// validation script here

let inputs = document.querySelectorAll('input');

const patterns = {
    telephone : /^\d{11}$/,
    username : /^\w{5,12}$/i,
    password : /^[\w@-]{8,20}$/i,
    slug : /^[a-z\d-]{8,20}$/,
    email : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
};

function check(field,regex) {
    if(regex.test(field.value)){
        field.className = 'valid';
    }else{
        field.className = 'invalid';
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup',(e)=>{
        check(e.target,patterns[e.target.attributes.name.value]);
    });
});