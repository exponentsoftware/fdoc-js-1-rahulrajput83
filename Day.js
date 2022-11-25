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



/* 1.b. Write a function called ***cleanText***. The function takes raw text as a parameter and returns the clean text. */

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

const sentFunction = (paragraph) => {
    return paragraph.replaceAll(/[`~!@#$%^&*()_|+\-=;:'"`]/gi, '')
}

console.log(sentFunction(sentence))


/* 1.c. After cleaning the text in the sentence from question number b you will get the following text. Count the number of words in this text. Don't include words with only one letter. */

const sentenceCount =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`

const countFunc = (para) => {
    const arr  = para.split(" ");
    const arrLength = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length > 1) {
            arrLength.push(arr[i])
        }
    }
    return arrLength.length
}

console.log(countFunc(sentenceCount));