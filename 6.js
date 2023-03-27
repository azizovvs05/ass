const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
    });
    
    readline.question('AS?',  AS => {
        if( AS == 1-JK ){
            console.log("Merhaba Jack Smith");
        }
        else{
            console.log("Ad ve Soyad");
        }

        readline.close();
        });
     
