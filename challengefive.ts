 export function reversString(string:string){

    let reversedString=""

    for (let i=string.length-1; i>=0;i--){
        reversedString+=string[i]
    }
    return reversedString
}
const originalString="TWIZERIMANA Gedeon"
const stringReversa=reversString(originalString)
console.log(stringReversa)