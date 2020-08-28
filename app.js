function openInfo() {
    if (document.getElementById('infoText').style.display == "none") {

        document.getElementById('infoText').style.display = "block"
    } else {
        document.getElementById('infoText').style.display = "none"
    }
}

function openUse() {
    if (document.getElementById('useText').style.display == "none") {

        document.getElementById('useText').style.display = "block"
    } else {
        document.getElementById('useText').style.display = "none"
    }
}

function openBuild() {
    if (document.getElementById('buildText').style.display == "none") {

        document.getElementById('buildText').style.display = "block"
    } else {
        document.getElementById('buildText').style.display = "none"
    }
}
function openLinks() {
    if (document.getElementById('linksText').style.display == "none") {

        document.getElementById('linksText').style.display = "block"
    } else {
        document.getElementById('linksText').style.display = "none"
    }
}

function openCitations() {
    if (document.getElementById('citationsText').style.display == "none") {

        document.getElementById('citationsText').style.display = "block"
    } else {
        document.getElementById('citationsText').style.display = "none"
    }
}

var items
var ul = document.getElementById("citationsList");

const Http = new XMLHttpRequest();
const url='https://raw.githubusercontent.com/PixelMaker06/PoseidonAWS/master/cites.txt';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText);
  document.getElementById('citationsList').innerHTML = Http.responseText;
  items = Http.responseText.split(" ");
}


items.forEach(function (item) {
    let li = document.createElement('li');
    ul.appendChild(li);

    li.innerHTML += item;
});

