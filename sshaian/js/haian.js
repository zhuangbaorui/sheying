window.onload =function(){
    let lun =document.querySelector('.lun');
    let datu =document.querySelectorAll('.datu');
    let button =document.querySelectorAll('.button');
    let btnl =document.querySelector('.binl');
    let btnr =document.querySelector('.binr');
    let index =0;
    let flag =true;

    for(let i=0;i<button.length;i++){
        button[i].onclick =function(){
            for(let j=0;j<button.length;j++){
                button[j].classList.remove('hot');
                datu[j].style.zIndex=10;
                animate(datu[j],{opacity:0})
            }
            button[i].classList.add('hot');
            datu[i].style.zIndex=999;
            animate(datu[i],{opacity:1})
            index =i;
        }
    }



    let t =setInterval(move,2000);
    lun.onmouseenter =function(){
        clearInterval(t)
    };
    lun.onmouseleave =function(){
        t =setInterval(move,2000)
    };
    btnr.onclick =function(){
        if(!flag){
            return;
        }
        flag =false;
        move()
    };
    btnl.onclick =function(){
        if(!flag){
            return;
        }
        flag =false;
        movel();
    }
    function move(){
        index++;
        if(index ===datu.length){
            index=0;
        }
        datu.forEach(function(element) {
            element.style.zIndex=10;
            animate(element,{opacity:0})
        });
        datu[index].style.zIndex=1000;
        animate(datu[index],{opacity:1},function(){
            flag = true;
        });
        button.forEach(element =>element.classList.remove('hot'));
        button[index].classList.add('hot');
    };
    function movel(){
        index--;
        if(index <0){
            index =datu.length-1;
        }
        datu.forEach(function(element) {
            element.style.zIndex=10;
            animate(element,{opacity:0})
        });
        datu[index].style.zIndex=1000;
        animate(datu[index],{opacity:1},function(){
            flag = true;
        });
        button.forEach(element =>element.classList.remove('hot'));
        button[index].classList.add('hot');
    }
}