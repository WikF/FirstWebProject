//moja lista - dodawanie guzika x
//nazwy zmiennych po ang
//wszystkie zmienne na górze

var close;
var span;
var txt;
var div;
var i;
var txt;
var spanEdit;
var txtEdit;
var txtDel;
var li;
var p;
var edit;
var close;
var t;
var inputValue;
var mylist = document.getElementsByClassName("list");

for (i = 0; i < mylist.length; i++) {
  span = document.createElement("SPAN");
  txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  mylist[i].appendChild(span);
}

//guzik x zamyka element
close = document.getElementsByClassName("close");
i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    div = this.parentElement;
    div.style.display = "none";
  }
}
//

//moja lista - dodawanie edycji 

var mylist = document.getElementsByClassName("list");
var i;
for (i = 0; i < mylist.length; i++) {
  span = document.createElement("SPAN");
  txt = document.createTextNode("✎");
  span.className = "edit";
  span.appendChild(txt);
  mylist[i].appendChild(span);
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
      div = this.parentElement;
      div.style.display = "none";
    }
  }
}



//dodawanie nowego elementu + okienko kiedy chcemy wpisać puste pole
function newElement() {
  var li = document.createElement("li");
  inputValue = document.getElementById("myInput").value;
  t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  spanDel = document.createElement("SPAN");
  spanEdit = document.createElement("SPAN");
  txtEdit = document.createTextNode("✎");
  txtDel = document.createTextNode("\u00D7");
  spanDel.className = "close";
  spanEdit.className = "edit"
  li.className = "list"
  spanDel.appendChild(txtDel);
  spanEdit.appendChild(txtEdit);
  li.appendChild(spanDel);
  li.appendChild(spanEdit);

  edit = document.getElementsByClassName("edit");
  i;
  for (i = 0; i < edit.length; i++) {
    edit[i].onclick = function () {
      div = this.parentElement;
      p = prompt("Edit your entry");
      div.innerHTML = p;
      spanDel = document.createElement("SPAN");
      spanEdit = document.createElement("SPAN");
      txtEdit = document.createTextNode("✎");
      txtDel = document.createTextNode("\u00D7");
      spanDel.className = "close";
      spanEdit.className = "edit"
      spanDel.appendChild(txtDel);
      spanEdit.appendChild(txtEdit);
      div.appendChild(spanDel);
      div.appendChild(spanEdit);
    }

  }
    close = document.getElementsByClassName("close");
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      div = this.parentElement;
      div.style.display = "none";
      li.appendChild(spanDel);
      li.appendChild(spanEdit);
    }
  }
}


