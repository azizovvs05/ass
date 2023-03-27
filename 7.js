const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
    });
    
    readline.question(' nece yasiviz var?', yas => {
        if(yas >= 18){
            console.log("siqara icme izniniz var");
        }
        else{
            console.log("siqara icme izniniz yok");
        }


        readline.close();
    });
 