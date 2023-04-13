///////////// 1.Return the First Element in an Array.
const arr1=[1, 2, 3];
const arr2=[80, 5, 100];
const arr3=[-500, 0, 50];

function getFirstValue(arr){
    console.log(arr[0])
};
getFirstValue(arr1);
getFirstValue(arr2);
getFirstValue(arr3);



////////////// 2.Return the Last Element in an Array.
const arrstr1=[1, 2, 3];
const arrstr2=["cat", "dog", "duck"];
const arrstr3=[true, false, true];

function getLastItem(arrstr){
    console.log(arrstr[2])
};
getLastItem(arrstr1);
getLastItem(arrstr2);
getLastItem(arrstr3);



////////////// 3.Find the Index
const findIndex= function(arr, string){
    for(let i=0; i<arr.length;i++){
        if(arr[i]==string){
            return i
        }
    } 
}
console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"))
console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"))
console.log(findIndex(["a", "g", "y", "d"], "d"))
console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"))


/////////////// 4.Return the Sum of Two Numbers.
function addition(a,b){
    console.log(a+b)
};
addition(3,2);
addition(-3,-6);
addition(7,3);

/////////////// 5.Less Than 100?
let lessThan100=(x,y)=>{
    return (x+y)<100;
}
console.log(lessThan100(22, 15))
console.log(lessThan100(83, 34))
console.log(lessThan100(3,77))

//////////////// 6.Volume of a Box?
function volumeOfBox(width, length, height){
    return (width*length*height);
}
console.log(volumeOfBox(2,5,1));
console.log(volumeOfBox(4,2,2));
console.log(volumeOfBox(2,3,5));

///////////////// 7.Basketball Points
function points(twoPointers,threePointers){
    return ((twoPointers*2)+(threePointers*3))
    }
    console.log(points(1,1));
    console.log(points(7,5));
    console.log(points(38,8));

////////// 8.Create a function called 'fillInfo()'
const arr5=[
    {
        name:"my name",
        surname:"my surname",
        city:"my city"
    },
    {
        name:"my name",
        surname:"my surname",
        city:"my city"
    },
    {
        name:"my name",
        surname:"my surname",
        city:"my city"
    }
]
function fillInfo(){
    for(let value of arr5){
        value.name="Afsana",
        value.surname="Abbasova",
        value.city="Ganja"
    }
    return arr5;
}
console.log(fillInfo())    
