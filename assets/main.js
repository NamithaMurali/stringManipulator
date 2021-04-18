function stringManipulation(action){
  let str=input();
//capture possible invalid strings and avoid further processing
// str=null comes when you click cancel on prompt, str="" when you click ok in prompt without entering any data, 
// length of string is taken after trimming to capture if only white spaces are given in prompt
  if (str===null || str==="" || (str.trim()).length===0){         
          alert("Please enter a valid string!");
          return;
        }   
switch(action){
  case "reverseString":{    
    let reversedStr= reverse(str);
    document.getElementById("str").innerHTML = "String = " + str; 
    document.getElementById("result").innerHTML =
      "Reversed string = " + reversedStr;
    break;
   }
  case "palindromeCheck": {   
    let reversedStr= reverse(str);
    document.getElementById("palinStr").innerHTML = "String = " + str; 
     if(reversedStr===str){
        document.getElementById("checkResult").innerHTML = "True";
     }else{
       document.getElementById("checkResult").innerHTML = "False";
     }                     
    break;
  }
                       
  default: alert("Pass a valid value to function!");
}
}
//function to get input data
function input(){
  let str = prompt("Please enter the string");      
  return str;
}
//function to reverse the string
function reverse(str) {  
        let reversedStr=str.split("").reverse().join("");
        return (reversedStr);
      }
     
//count the frequency of a particular character in a string
function freqCount(){ 
  let str=input();  
  let character=prompt("Enter the character to be counted");
  if (str===null || str==="" || (str.trim()).length===0 || character===null ||character.length>1
  ||character==="" || (character.trim()).length===0 ){                 
          alert("Please enter a valid string and character!");
          return;
        }
  let str1=str.split("");
  let count=0;
  let frequency=str1.filter(char1 => {
    if (char1===character){
      count++;
    }
  });
document.getElementById("freqStr").innerHTML = "String = " + str+"\n Character = "+character;
document.getElementById("count").innerHTML = "Count = " + count;
}
//function to reset the results of a=each operation      
function reset() { 
        document.getElementsByClassName("wipe")[0].innerHTML = "";
        document.getElementsByClassName("wipe")[1].innerHTML = "";   
        document.getElementsByClassName("wipe")[2].innerHTML = "";
        document.getElementsByClassName("wipe")[3].innerHTML = "";   
        document.getElementsByClassName("wipe")[4].innerHTML = "";
        document.getElementsByClassName("wipe")[5].innerHTML = "";   
} 
  
    