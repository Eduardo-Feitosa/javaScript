function verificar(){
    let dados = document.getElementById('dados');
    let idade = Number(dados.value); 
    let res =  window.document.getElementById('res'); 
    let p = document.createElement('p');
   
    if(idade == 0 || idade > 150){
      alert('[ERRO]Revise seus dados')
    }else if(idade == 1 || idade <= 4){
       res.innerHTML = `Brinque muito`;
    }else if(idade <= 10){
        res.innerHTML = `primeiras seríes`;
    }else if(idade < 15){
       res.innerHTML = `ensino fundamental`
    }else if(idade = 15 && idade <=18){
        res.innerHTML = `ensino medio`
    }else{
        res.innerHTML = `graduação`
    }
    p.innerHTML = `Você tem ${idade} anos`
    res.appendChild(p)
    res.style.textAlign ='center'
    res.style.textAlign = 'center'

}
