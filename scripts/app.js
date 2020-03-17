//moja lista - dodawanie guzika x
var mojaLista = document.getElementsByClassName("list");
var i;
for (i = 0; i < mojaLista.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  mojaLista[i].appendChild(span);
}

//guzik x zamyka element
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


//moja lista - dodawanie edycji 

var mojaLista = document.getElementsByClassName("list");
var i;
for (i = 0; i < mojaLista.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("✎");
  span.className = "edit";
  span.appendChild(txt);
  mojaLista[i].appendChild(span);
}

//funkcja edytowania
function edit() {
  var edit = document.getElementsByClassName("edit");
  var i;
  for (i = 0; i < edit.length; i++) {
    edit[i].onclick = function () {
      var div = this.parentElement;
      var p = prompt("Edit your entry");
      div.innerHTML = p;
      var spanDel = document.createElement("SPAN");
      var spanEdit = document.createElement("SPAN");
      var txtEdit = document.createTextNode("✎");
      var txtDel = document.createTextNode("\u00D7");
      spanDel.className = "close";
      spanEdit.className = "edit"
      spanDel.appendChild(txtDel);
      spanEdit.appendChild(txtEdit);
      div.appendChild(spanDel);
      div.appendChild(spanEdit);
    }

  }
  var close = document.getElementsByClassName("close");
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}



//dodawanie nowego elementu + okienko kiedy chcemy wpisać puste pole
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  var spanDel = document.createElement("SPAN");
  var spanEdit = document.createElement("SPAN");
  var txtEdit = document.createTextNode("✎");
  var txtDel = document.createTextNode("\u00D7");
  spanDel.className = "close";
  spanEdit.className = "edit"
  li.className = "list"
  spanDel.appendChild(txtDel);
  spanEdit.appendChild(txtEdit);
  li.appendChild(spanDel);
  li.appendChild(spanEdit);

  var edit = document.getElementsByClassName("edit");
  var i;
  for (i = 0; i < edit.length; i++) {
    edit[i].onclick = function () {
      var div = this.parentElement;
      var p = prompt("Edit your entry");
      div.innerHTML = p;
      var spanDel = document.createElement("SPAN");
      var spanEdit = document.createElement("SPAN");
      var txtEdit = document.createTextNode("✎");
      var txtDel = document.createTextNode("\u00D7");
      spanDel.className = "close";
      spanEdit.className = "edit"
      spanDel.appendChild(txtDel);
      spanEdit.appendChild(txtEdit);
      div.appendChild(spanDel);
      div.appendChild(spanEdit);
    }

  }
  var close = document.getElementsByClassName("close");
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
      li.appendChild(spanDel);
      li.appendChild(spanEdit);
    }
  }
}


