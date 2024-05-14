/* DOM or Document Object Model, is just the model that HTML uses
some examples of terminology can be seen in the HTML file in this same directory

Node: <html></html> or <body></body> these are refered to as nodes
Root node: generally it is <html> as its the master
Child node: a node that is directlly inside another node ex: <meta> in <head>
Descendant node: any node that is inside another (no matter how many levels) ex: <a> in <body>
Parent node: The parent of the child node (pretty intuitive)
Sibling node: any node that is in the same level as another*/

 

//SELECTING A DOM ELEMENT
const link = document.querySelector("a");
//Selects the link that is under the "p" (it is using the same way as CSS)
link.textContent = "Some other text to display";
link.href = "https://someotherlink.com";
//SELECTING ALL DOM ELEMENTS
const links = document.querySelector("a");


//CREATING AND APPEDNING NEW ELEMENTS
const sect = documetn.querySelector("section");
//create an element "p"
const para = document.createElement("p");
para.textContent = "We hope you do something with your life :)";
//appends to the section pointed to by "sect" the "para"
sect.appendChild(para);


//MOVING ELEMENTS
const linkPara = document.querySelector("p");
//moved the already existing paragraph to the end of the section
sect.appendChild(linkPara);
//this doesn't actually create a copy of the element rather a reference


//COPYING ELEMENTS
const linkParaClone = linkPara.cloneNode();


//REMOVING ELEMENTS
sect.removeChild(linkPara);
linkPara.remove();
linkPara.parentNode.removeChild(linkPara);


//MANIPULATING STYLES
const para = document.querySelector("p");
para.style.color = "white";
para.style.backgroundColor = "black";
para.style.padding = "10px";
para.style.width = "250px";
para.style.textAlign = "center";

//SETTING ATRIBUTES
/* For example if you have a specifc style in CSS which is under
the class name ".highlight" then you can add this to the "class" ATRIBUTE*/
para.setAttribute("class","highlight");
