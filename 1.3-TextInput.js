var textfeild;
var output;

function setup(){
  noCanvas();
  textfeild = createInput();
  textfeild.changed(newText);
  output = select("#output");
}

function newTyping() {
  output.html(textfeild.value());
  //console.log(textfeild.value());
  //createP(textfeild.value());
}

function newText() {
  //console.log(textfeild.value());
  createP(textfeild.value());
}
