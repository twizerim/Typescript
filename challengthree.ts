export function capitalizeFirstLetter(sentence:string) {
    
    const words = sentence.split(' ');

    
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    const capitalizedSentence = capitalizedWords.join(' ');

    return capitalizedSentence;
}
const inputSentence = "hello i am full stack softwarw developer";
const result = capitalizeFirstLetter(inputSentence);
console.log("Capitalized Sentence:", result);
