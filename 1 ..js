const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
    });
    
    readline.question('bir sayi daxil edin?', sayi => {
        if( 0 <= sayi <= 100){
            console.log("Sayi 0 ile 100 arasinda");
        }
        else{
            console.log("Sayi 0 ile 100 arasinda deyil");
        }

        readline.close();
        });
     

       


