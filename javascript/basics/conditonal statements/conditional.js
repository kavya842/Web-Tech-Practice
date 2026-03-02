// let a = 63;

// if (a >= 80 && a <= 100) { 
//     console.log("A+"); 
// }
//  else if (a >= 60 && a < 80) { 
//     console.log("B"); 
// }
//  else if (a >= 50 && a < 60) { 
//     console.log("C"); 
// } 
// else if (a >= 40 && a < 50) { 
//     console.log("D"); 
// }
// else if (a >= 0 && a < 40) {
//         console.log("Fail"); 
// }
//  else { 
//     console.log("Invalid marks");
// }






let a = 63;
switch (true) {
  case (a >= 80 && a <= 100):
    console.log("A");
    break;
  case (a >= 60 && a < 80): 
    console.log("B");
    break;
  case (a >= 50 && a < 60):
    console.log("C");
    break;
  case (a >= 40 && a < 50):
    console.log("D");
    break;
  case (a >= 0 && a < 40):
    console.log("Fail");
    break;
  default:
    console.log("Invalid marks");
}





// let day="tuesday"
// switch (day){
//     case "monday":
//         console.log("Java &SQL"); 
// break;  
//     case "tuesday":
//         console.log("Python & Web Tech");
// break;  
//     case "wednesday":
//         console.log("Java & Web Tech");
// break;  
//     case "thursday":
//         console.log("React JS");
// break;  
//     case "friday":
//         console.log("Manual testing & SQL");
// break;  

//     case "saturday":
//         console.log("JS Mock"); 
// break;
//     case "sunday":
//         console.log("Holiday");
// break;  
//     default:
//         console.log("Enter a valid Day!!!!");      
// }