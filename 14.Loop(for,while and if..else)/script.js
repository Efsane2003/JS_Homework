//////////////1.Convert Age to Days///////////////
function calcAge(age){
    return 365 *age;
}
let myAge=calcAge(20);
let myAge1=calcAge(0);
let myAge2=calcAge(65);
console.log("myAge="+myAge)
console.log("myAge="+myAge1)
console.log("myAge="+myAge2)



////////////////////// 3.Sum of even numbers(e.g: 2,4,6...) in 10///////////////////
let sum=0;
for(let i=0; i<10; i++){
    if(i%2==0){
        sum+=i;
    }
}
console.log("SUM= "+sum)

///////////////////// 4.Multiply the odd numbers(e.g: 1,3,5...) in 17////////////////
let a=1;
for(let i=1; i<17; i++){
    if(i%2==1){
        a*=i
    }
}
console.log( "Multiply= "+a)

//////////////////// 4.Multiply numbers between 10 and 18///////////////////
let b=1;
for(let i=10; i<=18;i++){
    b*=i
}
console.log("Multiply= "+b)

///////////////// 5.Sum numbers between 17 and 30. Except 19, 20/////////////
let sum2=0;
for(let i=17; i<=30 ; i++){
    if(i !=19 && i !=20){
        sum2+=i;
    }
}
console.log("SUM= "+sum2);

//////////// 7.Find of even numbers(e.g: 2,4,6...) in 16. And every number to the power of 2////////////////
for(i=0; i<=16; i++){
    if(i%2==0){
        console.log(`${i} x ${i} =  ${i*i}`)
    }
}