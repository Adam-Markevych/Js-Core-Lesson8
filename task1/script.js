let but = form1.elements.but
but.addEventListener('click',function(e){
    e.preventDefault();
    let val = form1.elements.text1.value;
    if(val){
       form1.elements.text2.value = val;
       console.log(val);
       form1.text1.value = ''
    }
})
form2.elements.text3.addEventListener('change',function(){
    let val = form2.elements.text3.value;
    form2.elements.text3.placeholder = val;
    form2.text3.value = '';
})