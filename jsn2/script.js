// alert confirm prompt windows menu 

// alert -> inglizchadan tarjima qilganda manosi so'roq ,ogohlantirish ->bironta proyekt qildiz va proyektizda so'radiz misol proyektiz 16yoshdan katta insonlar uchu loyiha shunda foydalanyatgan odamdi ogohlantirishiz mumkin
//alert data type 

//const message=alert("bu sayt 16 yoshdan kattalar uchun?!");
//console.log(message);

// alert data type asosan nima ?undefined yanikim aniqlanmagan qiymat

// confirm 
//inglizchadan manosi tasdiqlash degani 
//const age=confirm("bu sayt 18 yoshdan kattalar uchun tovar sotadi ,siz yosh chegarasidan o'tganmisiz?");

//console.log(age);
// windows menu -> prompt

// string -> soz va matn lar ustida ishlovchi data type
//const age=+prompt("Yoshingizni kiriting ?");
//const a=+prompt("Yoshingizni kiriting ?");
//const b=age+a;
//console.log(b);
// stringdi raqam qivosamak 16+16 =>1616 32mas "16 "+"16" =>"a"+"b"=>ab
// prompt doim string korinishida malumotni oladi
// prompt oldiga + qoshish uni number qilib beradi 

// typeof -> datani typeni bizga aniqlab beradi


let age=prompt("Yoshingizni kiriting ?");
age=Number(age);
let a=prompt("Yoshingizni kiriting ?");
a=Number(a);
const b=age+a;
console.log(b);

// const  let ishlatiladi ozgaryapti  Number ham ishlayapti  