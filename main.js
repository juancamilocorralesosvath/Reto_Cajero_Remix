const selection = document.getElementsByClassName('selectionButton');
const screen = document.getElementById('firstScreen');
const validation = document.getElementById('validationScreen');
const message = document.getElementById("val-message");
const inputPassword = document.getElementById("inputPassword");
const homeScreen = document.getElementById("userHome");
const loginButton = document.getElementById("loginButton");
const userName = document.getElementById("userHomeName");
const depositSection = document.getElementById("deposit");
const depositInput = document.getElementById("depositInput");
const infoScreen = document.getElementById("info");
const infoTitle = document.getElementById("infoTitle");
const infoText = document.getElementById("infoText");
const withdrawSection = document.getElementById("withdraw");
const withdrawInput = document.getElementById("withdrawInput");
let globalUser;
const begin = (tag) => { 
  screen.style.display = "none";
  validation.style.display = "flex";
    //first approach:
/*  if(tag.innerHTML === mali.name){ 
   message.innerHTML = "hello mali!";
   password = inputPassword.value;
   result = 0;
   while(result === -1){
     result = validatePassword(password, mali);
     inputPassword.value = "";
   }
 }else if(tag.innerHTML === maui.name){ 
    message.innerHTML = "hello maui!";
 }else if(tag.innerHTML === gera.name){ 
    message.innerHTML = "hello gera!";
} */

  //optimizacion:
for(let i = 0; i < users.length; i++){ 
  if(tag.innerHTML === users[i].name){ 
    message.innerHTML = `hello ${users[i].name}`;
    globalUser = users[i];
  }
}

}

const passwordValidation = () => { 
  let localUser = globalUser;
  let result = false;
  let valuePassword = Number(inputPassword.value);
  console.log("valor del input: "+inputPassword.value);
  console.log("si se muestra el objeto, funciono papu: ",localUser);
        if(valuePassword === localUser.password){ 
          validation.style.display = "none";
          homeScreen.style.display = "flex";
          userName.innerHTML = "Welcome back "+localUser.name+"!";
        }
}
const showDeposit = () => { 
  depositSection.style.display = "block";
}
const showWithdraw = () => { 
  withdrawSection.style.display = "block";
}
const deposit = () => { 
  let localUser = globalUser;
  let value = Number(depositInput.value);
  let sum = localUser.money + value;
  if(sum <= 990){ 
    localUser.money = sum;
  
    homeScreen.style.display = "none";
    depositSection.style.display = "none";
    infoScreen.style.display = "flex";
    infoTitle.innerHTML = `${localUser.name}!`;
    infoText.innerHTML = `Ahora tienes en tu cuenta ${localUser.money} pesos! \n enhorabuena! ahora sigue camellando!`;

  }else{ 
    homeScreen.style.display = "none";
    depositSection.style.display = "none";
    infoScreen.style.display = "flex";
    infoTitle.innerHTML = `${localUser.name}...;(`;
    infoText.innerHTML = `no hemos podido ingresar esa cantidad a tu cuenta, recuerda que no puedes tener mas de 990 pesos!`;
  }
}
const withdraw = () => { 
  let localUser = globalUser;
  let value = Number(withdrawInput.value);
  let subs = localUser.money - value;
  if(subs >= 10){ 
    localUser.money = subs;
  
    homeScreen.style.display = "none";
    withdrawSection.style.display = "none";
    infoScreen.style.display = "flex";
    infoTitle.innerHTML = `${localUser.name}!`;
    infoText.innerHTML = `te quedan ${localUser.money} pesos! ten cuidado, recuerda ahorrar y no gastar tanto en chelas!`;

  }else{ 
    homeScreen.style.display = "none";
    withdrawSection.style.display = "none";
    infoScreen.style.display = "flex";
    infoTitle.innerHTML = `${localUser.name}...;(`;
    infoText.innerHTML = `no hemos podido retirar esa cantidad de tu cuenta, recuerda que no puedes tener menos de 10 pesos!`;
  }
}
const consult = () => { 
    let localUser = globalUser;
    homeScreen.style.display = "none";
    infoScreen.style.display = "flex";
    infoTitle.innerHTML = `${localUser.name}!`;
    infoText.innerHTML = `tienes ${localUser.money} pesos en tu cuenta!`;
}

const returnToHome = () => { 
    infoScreen.style.display = "none";
    homeScreen.style.display = "flex";
}

const exit = () => { 
  homeScreen.style.display = "none";
  screen.style.display = "flex";
}





