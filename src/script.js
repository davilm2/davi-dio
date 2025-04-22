let nomeHeroi = "Hikaru"
let quantidadeXP = 6800
let nivel = ""

if (quantidadeXP <= 1000){
            nivel = "Ferro"
            console.log("o Herói de nome " + nomeHeroi + " está no nível de " + nivel);
                
        }else if(quantidadeXP >=1001 && quantidadeXP <= 2000){
            nivel = "Bronze"
            console.log("o Herói de nome " + nomeHeroi + " está no nível de " + nivel);
        }else if(quantidadeXP >=2001  && quantidadeXP <= 5000){
            nivel = "Prata"
            console.log("o Herói de nome " + nomeHeroi + " está no nível de " + nivel);
        }else if(quantidadeXP >=5001 && quantidadeXP  <= 7000){
            nivel = "Ouro"
            console.log("o Herói de nome " + nomeHeroi + " está no nível de " + nivel);
        }else if(quantidadeXP >=7001 && quantidadeXP <= 8000){
            nivel = "Platina"
            console.log("o Herói de nome " + nomeHeroi + " está no nível de " + nivel);
        }else if(quantidadeXP >8001 && quantidadeXP  <= 9000){
            nivel = "Ascendente"
            console.log("o Herói de nome " + nomeHeroi + " está no nível de " + nivel);
        }else if(quantidadeXP >=9001 && quantidadeXP <= 10000){
            nivel = "Imortal"
            console.log("o Herói de nome " + nomeHeroi + " está no nível de " + nivel);
        }else if(quantidadeXP >=10001 ){
            nivel = "Radiante"
            console.log("o Herói de nome " + nomeHeroi + " está no nível de " + nivel);
        }else{
            console.log("error 404")
        }

        

    

