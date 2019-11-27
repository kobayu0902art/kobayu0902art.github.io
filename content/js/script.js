function calc(){
	let bs =Number(document.getElementById("bs").value);
	let iv =Number(document.getElementById("iv").value);
	let ev =Number(document.getElementById("ev").value);
	let nc =Number(document.getElementById("nc").value);
	let result = Math.floor((bs+iv/2+ev/8+5)*nc)
	document.getElementById("result").innerHTML = result;
}