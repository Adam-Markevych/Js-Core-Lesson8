let f1 = document.forms.form;
console.log(f1);
let chek = f1.elements.checked;
console.log(chek);
let but1 = f1.elements.but1;
console.log(but1)
// but1.setAttribute('disabled',true);
chek.addEventListener('input',function(){
    if(chek.checked){
        but1.removeAttribute('disabled');
        but1.addEventListener('click',function(){
            document.querySelector('.form').style.display = "none";
            document.querySelector('.account').style.display = "block";
            let name = f1.elements["first-name"].value;
            let lastName = f1.elements["second-name"].value;
            let email = f1.elements["email"].value;
            let it = f1.elements["it"].value;
            document.querySelector('.account-name').textContent = name + ' ' + lastName;
            document.querySelector('.account-email').textContent = email;
            document.querySelector('.account-position').textContent = it;
            let man = document.querySelector('#man').checked;
            let woman = document.querySelector('#woman').checked;
            if(man === true){
               document.querySelector('.img').classList.add('man');
            }
            if(woman === true){
                document.querySelector('.img').classList.add('woman');
            }
        })
    }
    else{
        but1.setAttribute('disabled',true);
    }
})











