/* Question 6: Count Vowels
    Write a program that counts the number of vowels in a sentence. 
*/

const sampleSentence = "Popularity adds Credibility"

function countVowels(sentence) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let char of sentence.toLowerCase()) {
        if (vowels.includes(char)) count++;
    }
    console.log(`Total no of vowels in the sentence is: ${count}`)
    return count;
}

countVowels(sampleSentence)
