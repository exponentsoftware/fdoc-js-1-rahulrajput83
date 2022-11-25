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

/* 1.d. How many words were used to construct this sentence. Now, don't exclude one letter words. */

const variety = paragraph => {
    const arr = paragraph.replaceAll(/[^a-zA-Z0-9 :]/g, '').split(" ")
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] === arr[j]) {
                swap = arr[j];
                arr[j] = arr[arr.length - 1];
                arr[arr.length - 1] = swap;
                arr.pop();
            }
        }
    }
    return arr.length;
}
console.log(variety(sentenceCount))


/* 2.a. Looping a triangle: Write a loop that makes seven calls to console.log to output the following triangle: */

const loop = () => {
    let tri = ''
    for(let i = 0; i < 7; i++) {
        tri += '#'
        console.log(tri)
    }
}

loop();


/* 2.b. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique */

const unique = () => {
    const arr = []
    for(let i = 0; i < 7; i++) {
        let number = Math.floor(Math.random() * 10);
        if(number < 10 && arr.indexOf(number) === -1 && number > -1) {
            arr.push(number)
        }
    }
    return arr
}

console.log(unique())


/* 2.c Reversing an array: Arrays have a reverse method which changes the array by inverting the order in which its elements appear. For this exercise, write a function, reverseArray. The  reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. Without reverse method. */

const reverseArray = (arr) => {
    let Array = [];
    for(let i = arr.length - 1; i >= 0; i--) {
        Array.push(arr[i]);
    }
    return Array
}

console.log(reverseArray(["A", "B", "C"]));


/* 2.d. Write a function which check if items of an array are unique? */

const checkUniqueness = arr => {
    for(let i = 0; i < arr.length; i++) {
        if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
            return false
        }
    }
    return true
} 

const arrOne = [1, 4, 6, 2, 1];
console.log(checkUniqueness(arrOne));
const arrTwo = [1, 4, 6, 2, 3]
console.log(checkUniqueness(arrTwo));