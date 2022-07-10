let btn = document.querySelector('#btn')
let menu = document.querySelector('#mobile-menu')


btn.addEventListener('click', function(){  

    if(menu.classList == 'second'){
        menu.classList.remove('second')
        menu.classList.add('first')
        document.body.style.overflowY = 'hiden'
    }else{
        menu.classList.remove('first')
        menu.classList.add('second')
    }
    
    

})



