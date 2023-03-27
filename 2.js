const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
    });
    
    readline.question('bir sayi daxil edin?', sayi => {
        if( sayi/2 ){
            console.log("sayi ciftdir");
        }
        else{
            console.log("sayi tekdir");
        }

        readline.close();
        });
     
