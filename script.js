
//alert("hELLO WORLD!");

// alert confirm prompt
//const message=alert('HELLO WORLD');
//console.log(message);
// confirm inglizchadan tasdiqlash va ikki xil malumot qaytaradi yoki true yoki false 
//const age=confirm("are you above 18?");
//console.log(age);

//const message=+prompt(" son kiriting");
//console.log(typeof(message));//null 
// typeof ->malumot turini bilishchun4


// string nima?
// char 
// string bu so'zlar bilan ishlash uchun ishlatamiz  u chardan farqi xohlasez 1ta harfdi yozin xohlasez butun gapdi

//let a='Hello';
//a=Number(a);
//let b=prompt("ikkinCHI SON");
//b=Number(b);
//let c=a-b;s999
// 1usul prompt sozini oldiga +
// 2usul prompt ovolas paski qatorga Number funksiyasini yozb olasiz
// minusda string ham amal qilyapti lekin plus ishlamayapti
//minusda ozgaruvchidan bittasi string bop qosa NaN qaytaradi (Raqam emas)
//console.log(c);


// operators 
// + - * / % = ++ --  += -= *=

// a+=4  a=a+b  -=b a=a*b c+=b  c=c+b
// a=a+4 a+=4;
// increment increase  +1
// i++ 

//var a=4;
//v
//var c=a--;

//console.log(b);


//if 
// boolen true false  -> nimadir false else 
// if(meni ayam ) -> oyin oynaladi agar ob qoysachi oynalmedi ,agar stadion gaplashse  futbol oynemiz bomasachi barbr 
//let a=prompt('Sonni kiriting');
//a=Number(a);
//if(a%2==1){  // true bolsa if qismini 
// console.log('Toq son');

//} 
//else {     // false bolsa else 
// console.log('juft son');
//}

// takrorlanish 
// for while do while 

// 
// while -> davomida  misol uchun men dars otrgan paytim ,pul sanashyapti 
//
//let a=2;
//while(a<10)   // buyruq 
//{
// console.log(a);
// a=a+2;  //a ++
// amal 
//}
// amalimi oxrgi qiymati false bolsa chqb ketadi

//let a=3;
//do{
// console.log(a);
// a++;
//}  // true likka tekshiradi keyin false
//
// 
// 
//while(a<10);


//for - ? for sikl sikl bu takrorlanish

// abdunazar muslimbek omadillo -> uppercase 
// uppercase 
// bmw toyota kia gm <br> 

//const car=["BMW","VOLVO","TOYOTA","CHEVROLET","FERRARI"];
// array  massiv  


//let text="";
//for(let i=0;i<car.length;i++)
//{
//text+=car[i]+"<br>";
//}
//
// document.getElementById("demo").innerHTML=text;

//let a=6;

///for(let i=1;i<a;i++)0-
//{  
//  if(i%2==0)
//  {'
//  console.log()
// }'
//  console.log(i);
//}

// let i=0 yoki 1  ;i<a.lenght ;i<a ;i<=a ;i++

// 1 6 da  -> 2 
// do{ code  a++;} while()

//let kun = 9;   // 5kungi  malumot kere
//switch (kun)   // qavsdi ichi bir xil bolish ozgaruvchi bilan
//{
 // case 1:
  //  console.log("dushanba");
   // break;  // toxtatish
 // case 2:
   // console.log("seshanba");
  //  break;
 // case 3:
 //   console.log("chorshanba");
 //   break;
 // case 4:
 //   console.log("payshanba");
  //  break;
  //  case 5:
  //  console.log("juma");
  //  break;
  //  case 6:
  //  console.log("shanba");
  //   break;
  //   case 7:
  //  console.log("yakshanba");
  //  break;
  //  default:
  //    console.log("brat adashb qoldiz");
  //    break;



//

//let day;  // saqlanmagan 
s//witch (new Date().getDay()) {  //  .getday()  vazifasi bugungi kundi chiqarb bersh 0
 // case 0:
  //  day = "yakshanba";
  //  break;
 // case 1:
  //  day = "Monday";
  //  break;
 // case 2:
 //   day = "Tuesday";
  //  break;
//  case 3:
 //   day = "Wednesday";
 //   break;
 // case 4:
  //  day = "Thursday";
  //  break;
  //case 5:
  //  day = "Friday";
   // break;
  // case  6:
   // day = "Saturday";
//}
//document.getElementById("demo").innerHTML = "Today is " + day;




document.getElementById("mySelect").onchange = function() {
  myFunction();
};

function myFunction() {
  let x = document.getElementById("mySelect").value;
  document.getElementById("demo").innerHTML = "You selected: " + x;
}


document.getElementById("myInput").onchange = function() {
  inputFunction();
};

function inputFunction() {
    let inputVal = document.getElementById("myInput").value;
    document.getElementById("inputDemo").innerHTML = "You entered: " + inputVal;

}