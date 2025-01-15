// Write function to find multipication of 2 numbers using "+" operator You must use minimum posible iteration
//Input: 3,4 
//Output: 12

const multiplication = (a,b)=>{
    if(a>b){
        let temp = a;
        for(let i=1; i<b; i++){
            temp = temp + a;
        }
        return temp
    }else{
        let temp = b;
        for(let i=1; i<a; i++){
            temp = temp + b;
        }
        return temp
    }
}

console.log(multiplication(3,4));