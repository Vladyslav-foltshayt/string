function countLetter(string, letter){
    let count = 0;
    for(let k  = 0; k <  letter.length; k++){
        for(let i = 0; i <  string.length; i++ ){
            if(string[i] == letter[k]) count++;
        }}

    return count ;
}

console.log(countLetter("sasa", "a"));
console.log(countLetter("sasawexcsda", ["a","s"]));