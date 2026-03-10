// let str="javascript"
// console.log(str);

// let str='javascript'
// console.log(str);

// let str=`java
// script`
// console.log(str);

// let version=6
// let str='javascript ${version}';
// console.log(str);

//! Methods in String !//
// let str ='JavaScRipT'
//! lenth()
// 1) console.log(str.length); // it will give length of the string //
//! toLowerCase

// 2)  console.log(str.toLowerCase());
//! toUpperCase

// 3) console.log(str.toUpperCase());
//! at()

// 4) console.log(str.at(2));
// 5) console.log(str.at(-2));  // (-ve will work) //
//! CharAt()

// 6) console.log(str.charAt(2));
// 7) console.log(str.charAt(-2)); // (-ve will not work) //
//! charCodeAt()

// 8) console.log(str.charCodeAt(1)); // 97 is the output // 
//! replace()

//9) let str="hello";
// console.log(str.replace("lo",'p'));
//! replaceAll()

//10)  let str="hellolololololo";
// console.log(str.replaceAll("lo",'p'));

//! concat()
// let str="ja"
// let str1="va"
// let str2="script"
// console.log(str.concat(str1,str2));

//! trim()
// let str="          javascript          ";
// console.log("we are learning " +str + "in web tech");

// console.log("we are learning  " +str.trimStart() + " in web tech");

// console.log("we are learning  " +str.trimEnd() + " in web tech");

// console.log("we are learning  " +str.trim() + "  in web tech");
//! padstart() , padEnd()
// let str="java"
// let str1="script"
// console.log(str.padStart(8,str1));
// console.log(str.padStart(12,str1));
// console.log(str.padstart(3,str1));

// console.log(str.padEnd(8,str1));
// console.log(str.padEnd(12,str1));
// console.log(str.padEnd(3,str1));

//!indexOf()
// let str="javascript"
// console.log(str.indexOf("a"));
// console.log(str.indexOf("a",2));
// console.log(str.lastIndexOf("a"));
// console.log(str.lastIndexOf("a",2))

//! startsWith()
// let str="javascript"
// console.log(str.startsWith("ja"));
// console.log(str.startsWith("va"));
// console.log(str.startsWith("pt"));

//! endsWith
// let str="javascript"
// console.log(str.endsWith("pt"));
// console.log(str.endsWith("t"));
// console.log(str.endssWith("p"));

//! includes()
// str="javascript"
// console.log(str.includes("va"));
// console.log(str.includes("vk"));

//! repeat()
// let str="python "
// console.log(str.repeat(3));

//! slice() it is used to get a part of the string
// let str="javascript"
// console.log(str.slice(2,7));
// console.log(str.slice(2,-2));

//!substring()
// let str="javascript"
// console.log(str.substring(2,7));
// console.log(str.substring(4,-2));
// console.log(str.substr(2,6));

//!split()
// let str="javascript"
// let newArr=str.split("")
// let newArr=str.split(" ")
// console.log(newArr);

let rating=1;
console.log("❤️".repeat(rating)+"🖤".repeat(5-rating));














