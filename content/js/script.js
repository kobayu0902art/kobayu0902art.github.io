/*
リファクタリング例：
1)
function hcalc(){
	let hbs =Number(document.getElementById("hbs").value);
	let hiv =Number(document.getElementById("hiv").value);
	let hev =Number(document.getElementById("hev").value);
	let hresult = Math.floor((hbs+hiv/2+hev/8+60))
	document.getElementById("hresult").innerHTML = hresult;
}

function calc(bshtml,ivhtml,evhtml,nchtml){
	let bs =Number(document.getElementById(bshtml).value);
	let iv =Number(document.getElementById(ivhtml).value);
	let ev =Number(document.getElementById(evhtml).value);
	let nc =Number(document.getElementById(nchtml).value);
	let result = Math.floor((bs+iv/2+ev/8+5)*nc)
	return result
}

function acalc(){
	document.getElementById("aresult").innerHTML = calc("abs","aiv","aev","anc");
}
function bcalc(){
	//上と同様
}
…

2)
function hcalc(){
	let hbs =Number(document.getElementById("hbs").value);
	let hiv =Number(document.getElementById("hiv").value);
	let hev =Number(document.getElementById("hev").value);
	let hresult = Math.floor((hbs+hiv/2+hev/8+60))
	document.getElementById("hresult").innerHTML = hresult;
}

function calc(bshtml,ivhtml,evhtml,nchtml,resulthtml){
	let bs =Number(document.getElementById(bshtml).value);
	let iv =Number(document.getElementById(ivhtml).value);
	let ev =Number(document.getElementById(evhtml).value);
	let nc =Number(document.getElementById(nchtml).value);
	let result = Math.floor((bs+iv/2+ev/8+5)*nc)
	document.getElementById(resulthtml).innerHTML = result;
}

HTML側
onclick="calc("abs","aiv","aev","anc","aresult")"
…


*/





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






/* 味方側 */

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
	document.getElementById("adisp").innerHTML = aresult;
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
	document.getElementById("cdisp").innerHTML = cresult;
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


/* 相手側 */
function ehcalc(){
	let ehbs =Number(document.getElementById("ehbs").value);
	let ehiv =Number(document.getElementById("ehiv").value);
	let ehev =Number(document.getElementById("ehev").value);
	let ehresult = Math.floor((ehbs+ehiv/2+ehev/8+60))
	document.getElementById("ehresult").innerHTML = ehresult;
}

function eacalc(){
	let eabs =Number(document.getElementById("eabs").value);
	let eaiv =Number(document.getElementById("eaiv").value);
	let eaev =Number(document.getElementById("eaev").value);
	let eanc =Number(document.getElementById("eanc").value);
	let earesult = Math.floor((eabs+eaiv/2+eaev/8+5)*eanc)
	document.getElementById("earesult").innerHTML = earesult;
}

function ebcalc(){
	let ebbs =Number(document.getElementById("ebbs").value);
	let ebiv =Number(document.getElementById("ebiv").value);
	let ebev =Number(document.getElementById("ebev").value);
	let ebnc =Number(document.getElementById("ebnc").value);
	let ebresult = Math.floor((ebbs+ebiv/2+ebev/8+5)*ebnc)
	document.getElementById("ebresult").innerHTML = ebresult;
	document.getElementById("ebdisp").innerHTML = ebresult;
}

function eccalc(){
	let ecbs =Number(document.getElementById("ecbs").value);
	let eciv =Number(document.getElementById("eciv").value);
	let ecev =Number(document.getElementById("ecev").value);
	let ecnc =Number(document.getElementById("ecnc").value);
	let ecresult = Math.floor((ecbs+eciv/2+ecev/8+5)*ecnc)
	document.getElementById("ecresult").innerHTML = ecresult;
}

function edcalc(){
	let edbs =Number(document.getElementById("edbs").value);
	let ediv =Number(document.getElementById("ediv").value);
	let edev =Number(document.getElementById("edev").value);
	let ednc =Number(document.getElementById("ednc").value);
	let edresult = Math.floor((edbs+ediv/2+edev/8+5)*ednc)
	document.getElementById("edresult").innerHTML = edresult;
	document.getElementById("eddisp").innerHTML = edresult;
}

function escalc(){
	let esbs =Number(document.getElementById("esbs").value);
	let esiv =Number(document.getElementById("esiv").value);
	let esev =Number(document.getElementById("esev").value);
	let esnc =Number(document.getElementById("esnc").value);
	let esresult = Math.floor((esbs+esiv/2+esev/8+5)*esnc)
	document.getElementById("esresult").innerHTML = esresult;
}


/*
function damcalc(){
	let dam =Number(document.getElementById("damage").value);
	$(".currenthp").val(100-dam);
}
*/

