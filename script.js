// ?NOTE: ALL LIKE WITH THIS COLOR IS A COMMENT ELSE ARE ACTUAL CODE

const body = document.body;
// body.append("Hello, World!", " ", "bye");
//  ?to add anything to the page always add "",

const div = document.createElement("div");
// method above will add an empty div to the HTML
// div.innerText = "This line is useing innterText";
// ?code about will append text inside the div
// ?parenthesis will be used for functions only for value = " " should be used.

div.innerHTML = "<h1>This line is useing innterText</h1>";
// ? code above will append the value exactly how you are adding HTML elements through the HTML file by the use of HTML tags
// ? using the innerHTML has vulnerabilities since innerHTML can be manipulated in the console

// !this code below is the other way of programming the same ouput in the safest way that cannot be manipulated in t he HTML console
const h1 = document.createElement("h1");
h1.innerText =
  "This line has been written in innerText under a new createElement property for adding HTML attributes";
div.append(h1);
// div.textContent = "This line is using textContent";
// div.innerText = "This line is using innerText";
// ? the difference between textContent and innerText is that innerText will display the value the same as the default display on how you will see it on the page. Unlike textContent, it will display how the value was written in the HTML file, thus using innerText is much better than textContent

body.append(div);

// const div = document.querySelector("div");
// console.log(div.textContent);
// console.log(div.innerText);
