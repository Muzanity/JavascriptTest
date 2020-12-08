//var test='my COOOL sentence';
//    var x = test.split('');
//   for(var i = 0; i<test.length; i++){
//       console.log(x[i]);
//        x[0]=x[0].toUpperCase()
//        if(i!=0){x[i]=x[i].toLowerCase()} 
//            console.log(x); }

//originally tried to split the sentence into individual items to go through each letter and recognize whether or not that should be
//capitalized but it wasn't working out to well. Coulnd't figure out how to join them together. Later realized String.join() could've helped.

function sentenceCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
console.log(sentenceCase("how now BROWN cow"));

//I was able to get the capitalize letter reserching the toUpperCase and toLowerCase methods but needed the help of stack overflow 
//to see how to lowercase the rest of my initial sentence.