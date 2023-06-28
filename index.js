// Write your code here!
const remmain = document.getElementById('main');
 remmain.remove();

  const newHeader = document.createElement("h1")
  

  newHeader.id = "victory";
  newHeader.textContent = "Stephen is the champion";
  document.body.append(newHeader);

  //document.querySelector('h1').id = "victory";

//document.querySelector('h1').innerHTML= "Stephen is the champion";

/*
const element = document.createElement("div");
document.body.append(element);

const ul = document.createElement("ul");
document.body.append(ul);
for (let i = 0; i < 3; i++) {
    const li = document.createElement("li");
    li.textContent = (i + 1).toString();
    ul.append(li);
  }
  element.append(ul);
*/
  