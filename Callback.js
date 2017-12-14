function firstProcessor(num,callback){
    console.log("Processing in firstProcessor",num);
    num=num+5;
    callback("OUTPUT of firstProcessor",num)
}

function secondProcessor(num){
    console.log("Recieved data  ",num);
}


function main(){
    firstProcessor(5,function(textdata,num){
        console.log("just got the processed data from firstProcessor:",textdata,num)
       
    })
    secondProcessor(num);
}

main();