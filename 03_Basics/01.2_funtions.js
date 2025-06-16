// Addition of n numbers 
function addNumbers(){
    var ans = 0
    for(i=0 ; i < arguments.length; i = i+ 1){
        ans += arguments[i]
        
    }
    return ans
}

function addNumbersV2(...num){
        let ans = 0 
        for(let i = 0 ; i < num.length ; i++){
            ans += num[i]
        }
        return ans

}
let result = addNumbers(10, 11, 12, 13 ,14, 15)
console.log(result);
let resultV2 = addNumbersV2(10, 11, 12, 13 ,14, 15)
console.log(resultV2);

