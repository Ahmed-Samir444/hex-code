// make hex color code
let hexArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let hex = [];
for (let i = 0; i < 6; i++) {
    hex.push(hexArr[Math.floor(Math.random() * hexArr.length)]); 
};

let hexColor = `#${hex.join("")}`;
console.log(hexColor)

// create main div
let container = document.createElement("div");
container.id = "container";

// styling for container
container.style.cssText = "width: 80%; height: 80vh; margin: auto; box-shadow: 0px 2px 15px rgb(18 66 101 / 8%); background-color: #fff;";

// create main-heading
let mainHeading = document.createElement("h1");

let mainHeadingText = document.createTextNode("We offer you an infinite number of hex color code");

mainHeading.appendChild(mainHeadingText);

// add mainHeading to container
container.appendChild(mainHeading);
 
//  styling for mainHeading 
mainHeading.style.cssText = "font-size: 23px; text-align: center; padding: 20px 0; color: #777;";

// create box of color
let boxOfColor = document.createElement("div");
boxOfColor.id = "boxOfColor";

// styling for boxOfColor
boxOfColor.style.cssText = "width: 40%; height: 120px; border: 1px solid #000; margin: auto; margin-bottom: 20px;";
boxOfColor.style.backgroundColor = hexColor;

// add boxOfColor to container
container.appendChild(boxOfColor);

// create hexDesc
let hexDesc = document.createElement("p");
let hexDescText = document.createTextNode("your hex code color : "+(hexColor));

hexDesc.appendChild(hexDescText)

// styling for hexDesc
hexDesc.style.cssText = "font-size: 20px; text-align: center; padding: 20px 0; color: #777;";


// add hexDesc to container
container.appendChild(hexDesc);




















// styling for body
document.body.style.cssText = "background-color: #E8EAED;"

// add container to body
document.body.prepend(container)