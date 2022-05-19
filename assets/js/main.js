console.log("Level1_1");
let languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];
let langSort = languages.sort();
console.log(langSort);


console.log("Level1_2");
let sortierung2 = languages.sort().reverse();
console.log(sortierung2);


console.log("Level1_13");
let meinText1 = ["Hello", "World"];
let meinText2 = ["Anass", "Elaine", "Eric", "Georg"];
let meinText3 = ["Superman", "Wonderwoman", "Hulk", "Batman", "Spiderman"];
let join1 = meinText1.join();
let join2 = meinText1.join("");
let join3 = meinText1.join(" ");
let join4 = meinText1.join(" + ");
console.log(join1);
console.log(join2);
console.log(join3);
console.log(join4);
let join11 = meinText2.join();
let join22 = meinText2.join("");
let join33 = meinText2.join(" ");
let join44 = meinText2.join(" + ");
console.log(join11);
console.log(join22);
console.log(join33);
console.log(join44);
let join111 = meinText3.join();
let join222 = meinText3.join("");
let join333 = meinText3.join(" ");
let join444 = meinText3.join(" + ");
console.log(join111);
console.log(join222);
console.log(join333);
console.log(join444);

console.log("Level2_2");
let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];
let nA2Sort = numArray2.sort((a, b) => a - b);
console.log(nA2Sort);