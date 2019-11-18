function funcAdd1() {
    document.getElementById( "sample" ).innerHTML =
        parseInt( document.getElementById( "sample" ).firstChild.nodeValue ) + 1;
}
function funcAdd2() {
    document.getElementById( "sample" ).innerHTML =
        parseInt( document.getElementById( "sample" ).firstChild.nodeValue ) + 2;
}
function getValue(idname){
  // value値を取得する
  var result = document.getElementById(idname).value;
}