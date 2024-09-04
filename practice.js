// var a;
function sq_num()
{
    var a1=10;
    var res;
    res=a1*a1;
    return res;
}  
console.log("square=",sq_num());

function convert()
{
    var a2=100;
    var f;
    f=a2*9/5+32;
    return f;
}
console.log("fahrenheit=",convert());

function findArea()
{
    let radius=10;
    var area;
    area=3.14*radius*radius;
    return area;
}
console.log("area=",findArea());

function findPerimeter()
{
    let radius=10;
    var perimeter;
    perimeter=2*3.14*radius;
    return perimeter;
}
console.log("perimeter=",findPerimeter());

function lastElement()
{
    var arr1=["ANAS","HAMZA","ALI"];
    var last=arr1.pop();
    return last;
}
console.log("Last Element=",lastElement());
 function sum()
 {
    let arr2=[10,20,30];
    var sum=0;
    for(let i=0;i<arr2.length;i++)
    {
        sum=sum+arr2[i];
    }
    console.log("sum of array=",sum);

 }
 console.log(sum());

 function product()
 {
    let arr3=[10,20,30];
    var product1=1;
    for(let i=0;i<arr3.length;i++)
    {
        product1=product1*arr3[i];
    }
    console.log("product=",product1);
 }
 console.log(product());

 function individual_sum()

 {
    let array1 = [1,0,2,3,4];
    let array2 = [3,5,6,7,8,13];
    let sum;
    for(let i=0;i<array1.length;i++)
    {
        sum=array1[i]+array2[i];
        console.log(sum);
    }

 }console.log(individual_sum());


 var str1="thon";
//  var str2="python";

    if(str1[0]=="p" && str1[1]=="y")
        {
           console.log(str1);
        }
        else
        {
           console.log("py"+"",str1);
        }
 



 