function fact() {
   // const num = parseInt(prompt('Enter an integer: '));
    let fact = 1 ,num=5;
    for (i=1;i<=num;i++){
        fact = fact * i;
    }
    console.log(`the factorial of ${num} is ${fact}.`)
}
fact();
////
function factorial(n){
    if (n==0 || n==1){
        return 1;
    }
    else{
        return n * factorial(n-1);  
    }
}
