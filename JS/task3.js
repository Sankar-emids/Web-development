//Solution 1

let urlString = "https://phegon.com/course?id=12332";

let splittedWords = urlString.split("id=");

let id = splittedWords[1];

console.log("Course Id = "+id);

// Solution 2

let actualUrl = new URL(urlString);
let id2 = actualUrl.searchParams.get("id");

console.log("Course Id = "+id2);