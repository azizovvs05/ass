const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
    });
    
    readline.question('bir ay girin:', ay => {
        if(ay == 1 && ay == 2 && ay == 3){
            console.log("QIS");
        }
        else if(ay== 3 && ay==4 && ay==5){
            console.log("YAZ");
        }
        else if(ay== 6 && ay== 7 && ay==8){
            console.log("YAY");
        }
       
        else{
            console.log("PAYIZ");
        }


        readline.close();
    });