// var a = +prompt("enter value a ")
// var b = +prompt("enter value b ")
// function power(){
// return Number(a**b)
// }
// alert(power(a,b))

// function leapyear(){
//     var year =+prompt("enter a year")
//     if((year % 4 ===0 && year % 100 !==0 ) || (year % 400 ===0))
// {
// alert(year + " is a leap year")
// } else {
//     alert(year + " is not a leap year")
// }
// }
// leapyear()

// let a =prompt("Enter the length of side a:")
// let b =+prompt("Enter the length of side b:")
// let c =+prompt("Enter the length of side c:")
// function perimeter (a,b,c){
//     return (a+b+c)/2
// }
// function area (a,b,c){
//     let s = perimeter(a,b,c)
//     return Math.sqrt(s*(s-a)*(s-b)*(s-c))
// }
// let calculateArea = area(a,b,c);
// alert("the area of triangle is : " + calculateArea.toFixed(2))

// var sub1 = + prompt("enter marks in sub 1")
// var sub2 = + prompt("enter marks in sub 2")
// var sub3 = + prompt("enter marks in sub 3")
// var total = +prompt("enter total marks")
// function mark(){
// return ((sub1+sub2+sub3)/total)*100
// }
// function ave(){
//     return (sub1 + sub2 +sub3)/total
// }
// function main(){
//     let marks = mark()
//     let average = ave()
//     alert("average marks : " + average.toFixed(2))
//     alert("percentage : " + marks.toFixed(2) + " %")
// }
// main()

// function index (str,ltr){
// for(var i=0; i<str.length; i++){
//     if (str[i] === ltr)
//     return i 
// }
// return -1
// }
// var a = prompt("enter a string to find indexof")
// var b = prompt("enter a character of which index num wants to be known")
// alert(index(a,b))

// function vowelfind (text){
//     var vowel ="aeiouAEIOU"
//     var res = ""
//     var i =0;
//     while(i<text.length){
//         if(vowel.indexOf(text[i])=== -1){
//             res += text[i]
//         }
//         i++
//     }
//     return res
// }
// alert(vowelfind("hello, my name is ariba muskan"))

// function vowelsfinding (string){
//     var count =0;
//     var i=0;
//     while(i<string.length-1){
//     var char1 = string[i].toLowerCase()
//     var char2 = string[i+1].toLowerCase()
//     var pairs = []
    
//     switch(true){
//         case char1 ==="a" && (char2 === "a" || char2 === "e" || char2 === "i" || char2 === "o" || char2 === "u" ) :
//          case char1 ==="e" && (char2 === "a" || char2 === "e" || char2 === "i" || char2 === "o" || char2 === "u") :
//           case char1 ==="i" &&( char2 === "a" || char2 === "e" || char2 === "i" || char2 === "o" || char2 === "u") :
//            case char1 ==="o" &&( char2 === "a" || char2 === "e" || char2 === "i" || char2 === "o" || char2 === "u") :
//             case char1 ==="u" &&( char2 === "a" || char2 === "e" || char2 === "i" || char2 === "o" || char2 === "u") :
//                count++
//                pairs.push(char1 + char2)
//                console.log(pairs)
//                break
//     }
//    i++
// }
// return count ;
// }
// alert(vowelsfinding("Pleases read this application and give me gratuity"))

// var km = parseInt(prompt("enter distance in kilometer"))
// function m (m){
//  var m = km * 1000
// alert("distance in meter is : " + m )
// }
// (m())

// function f (f){
//     var f = km * 3280.84
//    alert("distance in feet is : " + f )
//    }
//    (f())

//    function i (i){
//     var i = km *    39370.1 
//    alert("distance in inches is : " + i )
//    }
//    (i())

//    function cm (cm){
//     var cm = km *     100000 
//    alert("distance in centimeters is : " + cm )
//    }
//    (cm()) 

// var pay = parseInt(prompt("enter your worked hour"))
// function overtime(){
//     var extra =( pay -40)*12
//     alert("your over time is : " + extra)
// }
// overtime()

// function calculate (amount){
//     var note100 = Math.floor(amount/100)
//     var remainig = (amount%100)
//     // console.log(note100)
//     // console.log(remainig)

//     var note50 = Math.floor(remainig/50)
//     var remainig = (remainig%50)
//     // console.log(note50)
//     // console.log(remainig)

//     var note10 = Math.floor(remainig/10)
//     var remainig = (remainig%10)

//     return[note100,note50,note10]
// }
// var am = parseInt(prompt("enter your currency"))
// var result = calculate(am)
// console.log("100 notes are : " + result[0])
// console.log("50 notes are : " + result[1])
// console.log("10 notes are : " + result[2])
// calculate(am)