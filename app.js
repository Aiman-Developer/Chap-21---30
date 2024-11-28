//Chapter # 21-25//

//Question # 01//

// let firstName = prompt("First Name");
// let lastName = prompt("Last Name");
// let fullName = firstName + lastName;
// console.log("Hello!" + ' ' + fullName);

//Question # 02//

// let input = prompt("What is your favourite mobile phone model sir/maam");
// let mobile = input.length
// console.log("Your favourite mobile is" + ' ' + input + ' ' + "Length of string :" + " " + mobile );
// document.write("Your favourite mobile is" + ' ' + input + "<br> Length of string :" + " " + mobile);

//Question # 03//

// let country = "Pakistani";
// console.log("Index of 'n'" + country.indexOf("n"));
// document.write("String : Pakistani <br> Index of 'n'" + country.indexOf("n"));

//Question # 04//

// let world = "Hello World";
// console.log("Last index of 'l' " + world.lastIndexOf("l"));
// document.write("String : Hello World <br> Last index of 'l' " + world.lastIndexOf("l"));

//Question # 05//

// let country = "Pakistani";
// console.log("Character of index 3" + ' ' + country.charAt(3));
// document.write("String : Pakistani <br> Character of index 3" + " " + country.charAt(3));

//Question # 06//

// let firstName = prompt("First Name");
// let lastName = prompt("Last Name");
// let fullName = firstName + lastName;
// console.log("Hello!" + ' ' + fullName.concat());
// document.write("Hello!" + ' ' + fullName.concat());

//Question # 07//

// let city = "Hyderabad";
// let city2 = city.replace("Hyder","Islam");
// console.log(city2);
// document.write("I am from " +' '+ city +' '+ "But I live in" +' '+ city2);

//Question # 08//

// let message = "Ali and Sami are best friends. They play cricket and football together.";
// let replace = message.replace("and","&");
// console.log(replace);
// document.write(replace);

//Question # 09//

// let str = 472;
// console.log(typeof(str));
// document.write("value : 472 <br> Type :" +' '+ typeof(str));

//Question # 10//

// let user = "peanuts"
// console.log(user.toUpperCase());
// document.write(user.toUpperCase());

//Question # 11//

// function titleCase(input) {
//     return input.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(' ');
// }

// let input = "javascript";
// let title = titleCase(input);
// console.log(title);
// document.write("User input:" +' '+ input + "<br> Title case:" +' '+ title);

//Question # 12//

// let num = 35.36;
// let num1 = num.toString().replace(".","");
// console.log(num1);
// document.write(num1);

//Question # 13//

// let userName =prompt("Enter your Input: ");
// checkValidName(userName);
// function checkValidName(userName) {
//     let message;
//     let split=[];
//     let arr=[];
//     for(var i=0;i<userName.length;i++)
//     {
//         split[i]=userName.split("&nbsp;");
//         arr[i]=userName.charCodeAt(i);
//         if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64) {
//                 message="Correct User Name";
//         }
//         while(arr[i]==33||arr[i]==44||arr[i]==46||arr[i]==64) {
//             alert("please enter a valid userName");                                                                                                                   
//             // userName=prompt("Enter your Input: ");
//             // split[i]=un.split("&nbsp;");
//             // arr[i]=un.charCodeAt(i);
//             if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
//             {
//                 message="correct in";
//                 break;
//             }
//         }

//     }
//     alert(message);
// }

//Question # 14//

//  let cleanestItems = ["cake","apple pie","cookie","chips","patties"];
//  let itemsToCheck = prompt("Welcome to ABC Bakery.What do yoy want to order sir/ma'am?");
//  itemsToCheck = itemsToCheck.toLowerCase();

//  for (var i = 0 ; i <= 4; i++) {
//     if (itemsToCheck === cleanestItems[i]) {
//         console.log(itemsToCheck + "is available in our bakery");
//         alert(itemsToCheck + "is available in our bakery");
//     } else if(itemsToCheck !== cleanestItems[i]) {
//         alert("We are sorry." + itemsToCheck + "is not available in our bakery");
//         console.log("We are sorry." + itemsToCheck + "is not available in our bakery");
        
//     }

// }  

//Question # 15//

//  let pass1 = prompt("Enter password");
//  let pass2 = prompt("Confirm password");
// //  let length =pass1.length(6)

//  if (pass1 == pass2) {
// console.log("ok");
 
//   } else {
//     console.log("These password don't match");
    
//   }  if (pass1.length > 5) {
//     console.log("character ok");
    
// } else {
//     console.log("you have to enter at least 6 character");
//     alert("you have to enter at least 6 character")
// } 

//Question # 16//

// let uni = "University of Karachi";
// console.log(uni.split(""));

//Question # 17//

// let country = "Pakistan";
// let last = country.charAt(7)
// console.log(last);
// document.write("User input : Pakistan <br> Last character of input" +' '+ last);

//Question # 18//

// let str =  "The quick brown fox jumps over thelazy dog.";
// let count = rx.Match(str)
// console.log(count);

// let words = new[] {"dog", "coyote", "fox"};

// let input = "the quick brown fox jumps over the lazy dog";
// let wordCount = (input.match(/the/g) || []).length;
// console.log(wordCount);
// document.write("Text: the quick brown fox jumps over the lazy dog <br> There are" +' '+ wordCount +' '+ "occurrence(s) of word 'the'" );

//Chapter # 26-30//

//Question # 01//

// let int = 3.45214;
// console.log(Math.round(int));
// console.log(Math.floor(int));
// console.log(Math.ceil(int));
// document.write("number:" +' '+ int + "<br> round off value : " + Math.round(int) + "<br> floor value:" + Math.floor(int) + "<br> ceil value:" + Math.ceil(int) )

//Question # 02//

// let int = -2.673;
// console.log(Math.round(int));
// console.log(Math.floor(int));
// console.log(Math.ceil(int));
// document.write("number:" +' '+ int + "<br> round off value : " + Math.round(int) + "<br> floor value:" + Math.floor(int) + "<br> ceil value:" + Math.ceil(int) )

//Question # 03//

//  let number = prompt("Find the absolute value. Enter number");
// function absValue(number) {
//     if (number < 0) {
//         return -number
//     } else {
//         return number
//     }
// } 
// console.log(absValue(number));
// document.write("The absolute value of" +' '+number+ ' '+  "is" + ' '+ absValue(number))

//Question # 04//

// let math = Math.floor(Math.random()*5 +1)
// console.log(math);
// document.write("random dice value:" +' '+ math +"<br>");
// let num = Math.floor(Math.random()*5 +1)
// document.write("random dice value:" +' '+ num);
// console.log(num);

//Question # 05//

// let head = prompt("Enter heads player name");
// let tail = prompt("Enter tails player name");
// let game = Math.random()*2 + 1;
// let task = Math.floor(game);
// console.log(task);
// document.write(task)
// if (task == 0){
//     console.log(head + "!!!!! Head winnerrr");
//     document.write(head + "!!!!! Head winnerrr")
    
// } else {
//     console.log(tail + "!!!!! Tail Winneerrrr");
//     document.write(tail + "!!!!! Tail Winneerrrr")
    
// }

//Question # 06//

// let num = Math.floor(Math.random()*100 + 1);
// console.log("random number between 1 and 100:"+' '+ num);
// document.write("random number between 1 and 100:"+' '+ num);

//Question # 07//

// let weight = prompt("Enter your weight in kilograms");
// let kilo = parseInt(weight);
// console.log("The weight of user is " +' '+ kilo +' '+ "kilograms" );
// document.write("The weight of user is " +' '+ kilo +' '+ "kilograms" );

//Question # 08//

// let num = prompt("Input a number between 1 to 10.");
// let num2 = Math.floor(Math.random()*10 + 1);
// console.log(num2);
// if (num2 == num) {
//     console.log("Congratulation");
//     document.write("Congratulation")
// }else {
//     console.log("Try again");
//     document.write("Try again");
// }




















