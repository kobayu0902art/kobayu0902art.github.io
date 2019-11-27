/*
function calc(){
	let bs =Number(document.getElementById("bs").value);
	let iv =Number(document.getElementById("iv").value);
	let ev =Number(document.getElementById("ev").value);
	let nc =Number(document.getElementById("nc").value);
	let result = Math.floor((bs+iv/2+ev/8+5)*nc)
	document.getElementById("result").innerHTML = result;
}
*/

function hcalc(){
	let hbs =Number(document.getElementById("hbs").value);
	let hiv =Number(document.getElementById("hiv").value);
	let hev =Number(document.getElementById("hev").value);
	let hresult = Math.floor((hbs+hiv/2+hev/8+60))
	document.getElementById("hresult").innerHTML = hresult;
}

function acalc(){
	let abs =Number(document.getElementById("abs").value);
	let aiv =Number(document.getElementById("aiv").value);
	let aev =Number(document.getElementById("aev").value);
	let anc =Number(document.getElementById("anc").value);
	let aresult = Math.floor((abs+aiv/2+aev/8+5)*anc)
	document.getElementById("aresult").innerHTML = aresult;
}

function bcalc(){
	let bbs =Number(document.getElementById("bbs").value);
	let biv =Number(document.getElementById("biv").value);
	let bev =Number(document.getElementById("bev").value);
	let bnc =Number(document.getElementById("bnc").value);
	let bresult = Math.floor((bbs+biv/2+bev/8+5)*bnc)
	document.getElementById("bresult").innerHTML = bresult;
}

function ccalc(){
	let cbs =Number(document.getElementById("cbs").value);
	let civ =Number(document.getElementById("civ").value);
	let cev =Number(document.getElementById("cev").value);
	let cnc =Number(document.getElementById("cnc").value);
	let cresult = Math.floor((cbs+civ/2+cev/8+5)*cnc)
	document.getElementById("cresult").innerHTML = cresult;
}

function dcalc(){
	let dbs =Number(document.getElementById("dbs").value);
	let div =Number(document.getElementById("div").value);
	let dev =Number(document.getElementById("dev").value);
	let dnc =Number(document.getElementById("dnc").value);
	let dresult = Math.floor((dbs+div/2+dev/8+5)*dnc)
	document.getElementById("dresult").innerHTML = dresult;
}

function scalc(){
	let sbs =Number(document.getElementById("sbs").value);
	let siv =Number(document.getElementById("siv").value);
	let sev =Number(document.getElementById("sev").value);
	let snc =Number(document.getElementById("snc").value);
	let sresult = Math.floor((sbs+siv/2+sev/8+5)*snc)
	document.getElementById("sresult").innerHTML = sresult;
}