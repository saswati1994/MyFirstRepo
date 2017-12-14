function firstprocessor(num,callback){
console.log("firstprocessor value is:",num);
num=num+5;
callback("output of firstprocessor",num)
}
function secondprocessor(num,callback){
    console.log("secondprocessor value is:",num);
    num=num+5;
  callback("output of secondprocessor",num)
}

    function thirdprocessor(num){
        console.log("thirdprocessor value is:",num)
    }


function main(){
    firstprocessor(5,function(textdata,num){
        console.log("processed data from firstprocessor:",textdata,num)
        secondprocessor(10,function(textdata,num){
        console.log("processed data from secondprocessor:",textdata,num)
        thirdprocessor(num);
        })
        })
    }
main();