//1. this code introduces me in sentences
let name = 'Ajiboye Oladoye';
let age = 17;
let nationality = 'Nigerian';
let txt = `My name is ${name}. I'm ${age} years old. A ${nationality} `;
console.log('1.', txt);
 
//2. Displays the upper and lower cases of my favorite quote
let favQuote = 'Talk is cheap. Show me the code';
let uppercaseFavQuote = favQuote.toUpperCase();
let lowercaseFavQuote = favQuote.toLowerCase();
console.log('2.', uppercaseFavQuote);
console.log(lowercaseFavQuote);

//3. converts the text to an array, reverses it and changes it back to a string 
let word = 'Programming';
let wordToList = word.split('');
let reversedWord = wordToList.reverse().join('')
console.log('3.', reversedWord);
 
//4. finds average of three items
let laptop = 500000;
let clothes = 50000;
let car = 10000000;
let total = laptop + clothes + car;
console.log('4. The total amount of money spent is ' + total);
 
//5. displays the average score of five students
let studentA = 21;
let studentB = 26;
let studentC = 23;
let studentD = 30;
let studentE = 28;
let averageScore = (studentA + studentB + studentC + studentD + studentE) / 5;
console.log('5. The average score is ' + averageScore);

//6. shows the first and last items of the array of my favorite food
let favFood = ['Pounded Yam', 'Jollof Rice', 'Beans', 'Porridge', 'Amala'];
console.log('6.', favFood[0], favFood[4]);

//7. adds new items as the first and last items
favFood.unshift('Yam and Egg');
favFood.push('Beans Porridge');
console.log('7.', favFood)

//8. stores data of the names of some students in different classes 
let JSS1 = ["Chimamanda Adichie", "Olumide Adebayo", "Ifeoma Okafor", "Adebayo Akinyemi", "Chinedu Eze",
"Ngozi Nwosu", "Toluwani Olamide", "Adeola Adeyemi", "Uche Nwachukwu", "Ngozi Obi"
];
let JSS2 = ["Emeka Nwafor", "Amaka Okwu", "Tunde Oladipo", "Folake Bello", "Olufemi Ayodele",
"Ngozi Ibe", "Chijioke Uzoma", "Olamide Adewale", "Nneka Obi", "Ifeanyi Eze"
];
let JSS3 = ["Ayodele Akinola", "Chukwudi Okafor", "Kehinde Ajayi", "Temitope Akintoye", "Bola Adedeji",
"Nkem Madu", "Obinna Okoro", "Yetunde Ogunleye", "Chukwuemeka Onwukwe", "Sade Adesanya"
];
