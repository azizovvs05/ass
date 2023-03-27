const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
    });
    
    readline.question('not girin?', not => {
            if(not>90 && not<=100){
            console.log("A");
        }
        else if(not>80 && not<=90) {
            console.log("B");
        }
        else if(not>70 && not<=80) {
            console.log("C");
        }else if(not>60 && not<=70) {
            console.log("D");
        }else if(not>50 && not<=60) {
            console.log("E");
        }
        else{
            console.log("Kesildiz");
        }

        readline.close();
    });