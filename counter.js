document.addEventListener('DOMContentLoaded',()=>{
    const countvalue= document.querySelector('#counter-value');

    let count=0;

    document.querySelectorAll('.counter-btn').forEach(btns=>{
        btns.addEventListener('click',()=>{
            const action= btns.classList.contains('decrease') ? 'decrease' : btns.classList.contains('increase') ? 'increase' :'reset';

            if (action==='increase') count++;
            else if(action==='decrease') count --;
            else count=0;
            countvalue.textContent=count;
        });
    });


});