const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
        });
        
        readline.question('Nece yasin var?', yas => {
            if(yas >= 18){
                console.log("bu siteye erisim izni var");
            }
            else{
                console.log("bu siteye erisim izni yok");
            }


            readline.close();
        });
     