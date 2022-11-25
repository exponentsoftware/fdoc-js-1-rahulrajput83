/* 1.a. Write a function which count the number of occurrence of words in a paragraph or a sentence.The function `countWords` takes a paragraph and two words as parameters. It compare  which word is most frequently occurred in the paragraph. */

const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';

let obj = {
    love: 0,
    you: 0
}

const first = (paragraph) => {
    const arr = paragraph.replaceAll(".", "").split(" ");
    for (let i = 0; i< arr.length; i++) {
        if(arr[i] === 'love' || arr[i] === 'you') {
            obj[arr[i]] = obj[arr[i]] + 1;
        }
    }
    return obj;
}

first(paragraph)

console.log(`The word ${obj.love > obj.you ? 'love' : 'you'} more frequently occurred than ${obj.love < obj.you ? 'love' : 'you'}.`);