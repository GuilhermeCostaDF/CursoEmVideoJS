
function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
     
    var data = new Date();
    var hora = data.getHours();
    
    msg.innerHTML = "Agora são " + hora + " horas!";
    if (hora >= 0 && hora < 12){
        img.src= "manha.png"
        document.body.style.background='#ffd82b'
        document.getElementById('titulo').style.color = '#363636'
    }
    else if(hora>=12 && hora <= 18){
        img.src= "tarde.png"
        document.body.style.background='#328da8'
        document.getElementById('mainSection').style.background='#c7c7c7'
    }
    else{
        img.src="noite.png"
        document.body.style.background='#00232e'
        document.getElementById('author').style.color='#d4d4d4'
        document.getElementById('mainSection').style.background='#525c70'
    }
}