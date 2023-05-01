/* Window Object */
// let v;
// v = window;
// v = window.navigator
// v = window.location
// v = window.screen
// console.log(v);

/* Document Object (DOM) */
// const dom = document;
// console.log(dom);
// console.log(dom.doctype);
// console.log(dom.head);
// console.log(dom.body);
// console.log(dom.body.childNodes[0]);
// console.log(dom.body.childNodes[1]);
// console.log(dom.body.innerHTML);
// for (const key in dom) {
//   console.log(`${key}: ${dom[key]}`);
// }

/* getElement Selectors */
// let el;
// el = document.getElementById("page-title");
// console.log(el.id);
// el.style.background = "BLUE";
// el.textContent = "textContent";
// el.innerText = "innerText";
// el.innerHTML = "<span>innerHTML</span>";
// console.log(document.getElementsByTagName("div"));
// console.log(document.getElementsByClassName("page-area"));

/* querySelectors */
// console.log(document.querySelector("#page-title"));
// console.log(document.querySelector(".book-row"));
// console.log(document.querySelector("tr"));
// document.querySelector("tr").style.color="red";
// document.querySelector("tbody tr").style.color="blue";
// document.querySelector("tbody tr:last-child").style.color="orange";
// console.log(document.querySelector("tbody tr:nth-child(1)").childNodes);
// document.querySelector("tbody tr:nth-child(1)").childNodes[1].textContent="blah";
// document.querySelector("tbody tr:nth-child(1) td").textContent="blah*2";


/* querySelectorAll */
// let nodes;
// nodes = document.querySelectorAll("tbody tr");
// nodes = document.querySelectorAll(".book-row");
// nodes.forEach((nd, index) => {
//   nd.querySelector("td").textContent = `Book ${index}`;
// });

/* Create Element */
// const tr = document.createElement("tr");
// tr.className = "book-row";
// const tds = "<td>Crime and Punishment</td><td>Dostoevsky</td><td><a href='#' class='delete'>X</a></td>";
// tr.innerHTML = tds;
// console.log(tr.innerHTML);
// document.querySelector("#book-list").appendChild(tr);
// console.log(document.querySelector("#book-list"));

/* Replacing elements */
// Create new element
// const newHeading = document.createElement("h3");
// newHeading.id = "page-title";
// newHeading.appendChild(document.createTextNode("New Book List"));
// Find old heading
// const oldHeading = document.querySelector("#page-title");
// Find parent element parent
// const headingParent = document.querySelector(".page-area");
// Replace the heading
// headingParent.replaceChild(newHeading, oldHeading);

// Remove element
// const trs = document.querySelectorAll(".book-row");
// trs[1].remove();