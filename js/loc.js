let js = document.getElementById('js');
window.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('check') === 'true'){
        js.checked = 'true';
    }
    
    js.addEventListener('click', function(){
    console.log(js.checked);
    if(localStorage.getItem('check') === 'true'){
        localStorage.setItem('check', 'false');
    } else {
        localStorage.setItem('check', 'true');
    }
    
});
});


