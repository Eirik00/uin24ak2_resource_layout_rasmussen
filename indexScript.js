const navBar = document.getElementsByTagName("nav")[0];
const mainDoc = document.getElementsByTagName("main")[0];
const titleCard = document.getElementById("title");
const infoCard = document.getElementById("infoText");
const linkList = document.getElementById("linklist");


function pageData(index){
    Array.from(document.getElementsByClassName("selected")).forEach(element => {
        element.classList.toggle("selected");
    });

    titleCard.innerHTML = resources[index].category;
    infoCard.innerHTML = resources[index].text;
    linkList.innerHTML = "";
    resources[index].sources.forEach(e => {
        let el1 = document.createElement("li");
        let el2 = document.createElement("a");
        el2.innerHTML = e.title;
        el2.href = e.url;
        el1.appendChild(el2);
        linkList.appendChild(el1);
    });


}


resources.map( (p, index) => {
    let nw = document.createElement("a");
    nw.innerHTML = p.category;
    nw.onclick = function(){pageData(index-1);nw.classList.toggle("selected");};
    navBar.appendChild(nw);
    index++;
})

// initialisere nettsiden for element 1
pageData(0);
document.getElementsByTagName("a")[0].classList.toggle("selected");