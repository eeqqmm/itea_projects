const fs = require("fs");
try {
    const arr = process.argv.slice(2);
const newArr = arr;
let operations = [],
numbers = [],
oldNum = 0,
resultNum ='';
arr.forEach((element,index) => {
   isEven(element,index); 
});

function isEven(value,index) {
	if (index%2 == 0){
        numbers.push(parseFloat(value));
    }
	else {
        operations.push(value);
    }
}
function calc(numbers,operations) {
   
    numbers.forEach((number,index) => {
        if (index == 0){
            oldNum = oldNum + number;
            
        } else {
                    switch (operations[index-1]) {
                        case 'add':
                            oldNum = oldNum + number;
                            
                            break;
                        case 'mult':
                            oldNum = oldNum * number;
                            
                            break;
                        case 'div':
                            oldNum = oldNum / number;
                           
                            break;
                        case 'sub':
                            oldNum = oldNum - number;
                           
                            break;
                        
                    }
                    
                    return oldNum; 
        }
    });
    
    return oldNum;
}

fs.writeFile("./result.txt", calc(numbers,operations).toString(), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 


} catch (error) {
    fs.writeFile("./error.txt", error, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The error was saved!");
    }); 
}

