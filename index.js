var readlineSync = require("readline-sync");
const chalk = require('chalk');

function isPrime(num){
  let flag = true;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

function check(bDate, bMonth){
  let chknum = (bDate*100)+bMonth+1;
  if(isPrime(chknum)){
    console.log(chalk.black.bgGreen("Your Birthday (DDMM) is a Prime number"));
    console.log(chalk.blue.bgYellow.bold("Take a screenshot & Share it with your  friends."));
  }
  else{
    console.log(chalk.bgRed("Your Birthday (DDMM) is not a Prime number"));
  }
}

function getInput(){
  let userInput = readlineSync.question(chalk.green("Enter your birthdate (mm/dd/yyyy): "));
  let birthdate = new Date(userInput);
  if(birthdate=="Invalid Date"){
    console.log(chalk.red("You have entered wrong input."));
    getInput();
  }
  return birthdate;
}

let bday = getInput();
check(bday.getDate(),bday.getMonth());