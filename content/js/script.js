/*test用
function set(){
	document.getElementById("aresult").innerHTML = 124;
	document.getElementById("cresult").innerHTML = 124;
	document.getElementById("ehresult").innerHTML = 200;
	document.getElementById("ebresult").innerHTML = 100;
	document.getElementById("edresult").innerHTML = 100;
	document.getElementById("abs").value = 124;
	document.getElementById("cbs").value = 124;
	document.getElementById("ehbs").value = 300;
	document.getElementById("ebbs").value = 100;
	document.getElementById("edbs").value = 100;
	document.getElementById("power").value = 100;
	acalc()
	ccalc()
	ehcalc()
	ebcalc()
	edcalc()
	damagecalc()
}
*/

function ex1(){
	document.getElementById("hbs").value = 88;
	document.getElementById("abs").value = 120;
	document.getElementById("bbs").value = 75;
	document.getElementById("cbs").value = 100;
	document.getElementById("dbs").value = 75;
	document.getElementById("sbs").value = 142;
	
	
	document.getElementById("ehbs").value = 55;
	document.getElementById("eabs").value = 90;
	document.getElementById("ebbs").value = 80;
	document.getElementById("ecbs").value = 50;
	document.getElementById("edbs").value = 105;
	document.getElementById("esbs").value = 96;
	
	
	document.getElementById("aorc").value = 0;
	document.getElementById("power").value = 90;
	document.getElementById("match").value = 1.5;
	document.getElementById("comp").value = 2;
	
	
	document.getElementById("aev").value = 252;
	document.getElementById("bev").value = 4;
	document.getElementById("sev").value = 252;
	
	
	document.getElementById("ehev").value = 4;
	document.getElementById("eaev").value = 252;
	document.getElementById("esev").value = 252;
	hcalc()
	acalc()
	bcalc()
	ccalc()
	dcalc()
	scalc()
	ehcalc()
	eacalc()
	ebcalc()
	eccalc()
	edcalc()
	escalc()
	damagecalc()
}



function ex2(){
	document.getElementById("hbs").value = 88;
	document.getElementById("abs").value = 120;
	document.getElementById("bbs").value = 75;
	document.getElementById("cbs").value = 100;
	document.getElementById("dbs").value = 75;
	document.getElementById("sbs").value = 142;
	
	document.getElementById("hev").value = 0;
	document.getElementById("aev").value = 252;
	document.getElementById("bev").value = 4;
	document.getElementById("cev").value = 0;
	document.getElementById("dev").value = 0;
	document.getElementById("sev").value = 252;
	
	document.getElementById("anc").value = 1;
	document.getElementById("bnc").value = 1;
	document.getElementById("cnc").value = 1;
	document.getElementById("dnc").value = 1;
	document.getElementById("snc").value = 1;
	
	document.getElementById("snc").value = 1.1;
	document.getElementById("cnc").value = 0.9;
	
	hcalc()
	acalc()
	bcalc()
	ccalc()
	dcalc()
	scalc()
}
function ex3(){
	document.getElementById("hbs").value = 88;
	document.getElementById("abs").value = 120;
	document.getElementById("bbs").value = 75;
	document.getElementById("cbs").value = 100;
	document.getElementById("dbs").value = 75;
	document.getElementById("sbs").value = 142;
	
	document.getElementById("hev").value = 92;
	document.getElementById("aev").value = 244;
	document.getElementById("bev").value = 0;
	document.getElementById("cev").value = 0;
	document.getElementById("dev").value = 0;
	document.getElementById("sev").value = 172;
	
	document.getElementById("anc").value = 1;
	document.getElementById("bnc").value = 1;
	document.getElementById("cnc").value = 1;
	document.getElementById("dnc").value = 1;
	document.getElementById("snc").value = 1;
	
	document.getElementById("snc").value = 1.1;
	document.getElementById("cnc").value = 0.9;
	
	hcalc()
	acalc()
	bcalc()
	ccalc()
	dcalc()
	scalc()
}
function ex4(){
	document.getElementById("hbs").value = 55;
	document.getElementById("abs").value = 90;
	document.getElementById("bbs").value = 80;
	document.getElementById("cbs").value = 50;
	document.getElementById("dbs").value = 105;
	document.getElementById("sbs").value = 96;
	
	document.getElementById("hev").value = 4;
	document.getElementById("aev").value = 252;
	document.getElementById("bev").value = 0;
	document.getElementById("cev").value = 0;
	document.getElementById("dev").value = 0;
	document.getElementById("sev").value = 252;
	
	document.getElementById("anc").value = 1;
	document.getElementById("bnc").value = 1;
	document.getElementById("cnc").value = 1;
	document.getElementById("dnc").value = 1;
	document.getElementById("snc").value = 1;
	
	document.getElementById("snc").value = 1.1;
	document.getElementById("cnc").value = 0.9;
	
	hcalc()
	acalc()
	bcalc()
	ccalc()
	dcalc()
	scalc()
}
function ex5(){
	document.getElementById("hbs").value = 92;
	document.getElementById("abs").value = 105;
	document.getElementById("bbs").value = 90;
	document.getElementById("cbs").value = 125;
	document.getElementById("dbs").value = 90;
	document.getElementById("sbs").value = 98;
	
	document.getElementById("hev").value = 0;
	document.getElementById("aev").value = 0;
	document.getElementById("bev").value = 0;
	document.getElementById("cev").value = 252;
	document.getElementById("dev").value = 4;
	document.getElementById("sev").value = 252;
	
	document.getElementById("anc").value = 1;
	document.getElementById("bnc").value = 1;
	document.getElementById("cnc").value = 1;
	document.getElementById("dnc").value = 1;
	document.getElementById("snc").value = 1;
	
	document.getElementById("snc").value = 1.1;
	document.getElementById("anc").value = 0.9;
	
	hcalc()
	acalc()
	bcalc()
	ccalc()
	dcalc()
	scalc()
}
function ex6(){
	document.getElementById("hbs").value = 110;
	document.getElementById("abs").value = 135;
	document.getElementById("bbs").value = 60;
	document.getElementById("cbs").value = 50;
	document.getElementById("dbs").value = 65;
	document.getElementById("sbs").value = 88;
	
	document.getElementById("hev").value = 0;
	document.getElementById("aev").value = 252;
	document.getElementById("bev").value = 118;
	document.getElementById("cev").value = 0;
	document.getElementById("dev").value = 0;
	document.getElementById("sev").value = 140;
	
	document.getElementById("anc").value = 1;
	document.getElementById("bnc").value = 1;
	document.getElementById("cnc").value = 1;
	document.getElementById("dnc").value = 1;
	document.getElementById("snc").value = 1;
	
	document.getElementById("anc").value = 1.1;
	document.getElementById("cnc").value = 0.9;
	
	hcalc()
	acalc()
	bcalc()
	ccalc()
	dcalc()
	scalc()
}


function ex7(){
	document.getElementById("ehbs").value = 88;
	document.getElementById("eabs").value = 120;
	document.getElementById("ebbs").value = 75;
	document.getElementById("ecbs").value = 100;
	document.getElementById("edbs").value = 75;
	document.getElementById("esbs").value = 142;
	
	document.getElementById("ehev").value = 0;
	document.getElementById("eaev").value = 252;
	document.getElementById("ebev").value = 4;
	document.getElementById("ecev").value = 0;
	document.getElementById("edev").value = 0;
	document.getElementById("esev").value = 252;
	
	document.getElementById("eanc").value = 1;
	document.getElementById("ebnc").value = 1;
	document.getElementById("ecnc").value = 1;
	document.getElementById("ednc").value = 1;
	document.getElementById("esnc").value = 1;
	
	document.getElementById("esnc").value = 1.1;
	document.getElementById("ecnc").value = 0.9;
	
	ehcalc()
	eacalc()
	ebcalc()
	eccalc()
	edcalc()
	escalc()
}
function ex8(){
	document.getElementById("ehbs").value = 88;
	document.getElementById("eabs").value = 120;
	document.getElementById("ebbs").value = 75;
	document.getElementById("ecbs").value = 100;
	document.getElementById("edbs").value = 75;
	document.getElementById("esbs").value = 142;
	
	document.getElementById("ehev").value = 92;
	document.getElementById("eaev").value = 244;
	document.getElementById("ebev").value = 0;
	document.getElementById("ecev").value = 0;
	document.getElementById("edev").value = 0;
	document.getElementById("esev").value = 172;
	
	document.getElementById("eanc").value = 1;
	document.getElementById("ebnc").value = 1;
	document.getElementById("ecnc").value = 1;
	document.getElementById("ednc").value = 1;
	document.getElementById("esnc").value = 1;
	
	document.getElementById("esnc").value = 1.1;
	document.getElementById("ecnc").value = 0.9;
	
	ehcalc()
	eacalc()
	ebcalc()
	eccalc()
	edcalc()
	escalc()
}
function ex9(){
	document.getElementById("ehbs").value = 55;
	document.getElementById("eabs").value = 90;
	document.getElementById("ebbs").value = 80;
	document.getElementById("ecbs").value = 50;
	document.getElementById("edbs").value = 105;
	document.getElementById("esbs").value = 96;
	
	document.getElementById("ehev").value = 4;
	document.getElementById("eaev").value = 252;
	document.getElementById("ebev").value = 0;
	document.getElementById("ecev").value = 0;
	document.getElementById("edev").value = 0;
	document.getElementById("esev").value = 252;
	
	document.getElementById("eanc").value = 1;
	document.getElementById("ebnc").value = 1;
	document.getElementById("ecnc").value = 1;
	document.getElementById("ednc").value = 1;
	document.getElementById("esnc").value = 1;
	
	document.getElementById("esnc").value = 1.1;
	document.getElementById("ecnc").value = 0.9;
	
	ehcalc()
	eacalc()
	ebcalc()
	eccalc()
	edcalc()
	escalc()
}
function ex10(){
	document.getElementById("ehbs").value = 92;
	document.getElementById("eabs").value = 105;
	document.getElementById("ebbs").value = 90;
	document.getElementById("ecbs").value = 125;
	document.getElementById("edbs").value = 90;
	document.getElementById("esbs").value = 98;
	
	document.getElementById("ehev").value = 0;
	document.getElementById("eaev").value = 0;
	document.getElementById("ebev").value = 0;
	document.getElementById("ecev").value = 252;
	document.getElementById("edev").value = 4;
	document.getElementById("esev").value = 252;
	
	document.getElementById("eanc").value = 1;
	document.getElementById("ebnc").value = 1;
	document.getElementById("ecnc").value = 1;
	document.getElementById("ednc").value = 1;
	document.getElementById("esnc").value = 1;
	
	document.getElementById("esnc").value = 1.1;
	document.getElementById("eanc").value = 0.9;
	
	ehcalc()
	eacalc()
	ebcalc()
	eccalc()
	edcalc()
	escalc()
}
function ex11(){
	document.getElementById("ehbs").value = 110;
	document.getElementById("eabs").value = 135;
	document.getElementById("ebbs").value = 60;
	document.getElementById("ecbs").value = 50;
	document.getElementById("edbs").value = 65;
	document.getElementById("esbs").value = 88;
	
	document.getElementById("ehev").value = 0;
	document.getElementById("eaev").value = 252;
	document.getElementById("ebev").value = 118;
	document.getElementById("ecev").value = 0;
	document.getElementById("edev").value = 0;
	document.getElementById("esev").value = 140;
	
	document.getElementById("eanc").value = 1;
	document.getElementById("ebnc").value = 1;
	document.getElementById("ecnc").value = 1;
	document.getElementById("ednc").value = 1;
	document.getElementById("esnc").value = 1;
	
	document.getElementById("eanc").value = 1.1;
	document.getElementById("ecnc").value = 0.9;
	
	ehcalc()
	eacalc()
	ebcalc()
	eccalc()
	edcalc()
	escalc()
}


function ex12(){
	document.getElementById("power").value = 90;
	document.getElementById("aorc").value = 0;
	damagecalc()
}
function ex13(){
	document.getElementById("power").value = 100;
	document.getElementById("aorc").value = 0;
	damagecalc()
}
function ex14(){
	document.getElementById("power").value = 70;
	document.getElementById("aorc").value = 0;
	damagecalc()
}
function ex15(){
	document.getElementById("power").value = 130;
	document.getElementById("aorc").value = 1;
	damagecalc()
}
function ex16(){
	document.getElementById("power").value = 80;
	document.getElementById("aorc").value = 1;
	damagecalc()
}
function ex17(){
	document.getElementById("power").value = 100;
	document.getElementById("aorc").value = 0;
	damagecalc()
}
function ex18(){
	document.getElementById("power").value = 80;
	document.getElementById("aorc").value = 0;
	damagecalc()
}
function ex19(){
	document.getElementById("power").value = 90;
	document.getElementById("aorc").value = 0;
	damagecalc()
}
function ex20(){
	document.getElementById("power").value = 80;
	document.getElementById("aorc").value = 1;
	damagecalc()
}
function ex21(){
	document.getElementById("power").value = 85;
	document.getElementById("aorc").value = 0;
	damagecalc()
}


function ex22(){
	document.getElementById("match").value = 1.5;
	document.getElementById("comp").value = 2;
	damagecalc()
}
function ex23(){
	document.getElementById("match").value = 1;
	document.getElementById("comp").value = 2;
	damagecalc()
}
function ex24(){
	document.getElementById("match").value = 1.5;
	document.getElementById("comp").value = 1;
	damagecalc()
}
function ex25(){
	document.getElementById("match").value = 1;
	document.getElementById("comp").value = 1;
	damagecalc()
}


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
	aresult = Math.floor((abs+aiv/2+aev/8+5)*anc)
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
	cresult = Math.floor((cbs+civ/2+cev/8+5)*cnc)
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
	ehresult = Math.floor((ehbs+ehiv/2+ehev/8+60))
	document.getElementById("ehresult").innerHTML = ehresult;
	document.getElementById("ehdisp").innerHTML = ehresult;
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
	ebresult = Math.floor((ebbs+ebiv/2+ebev/8+5)*ebnc)
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
	edresult = Math.floor((edbs+ediv/2+edev/8+5)*ednc)
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

function damagecalc(){
	let aorc =Number(document.getElementById("aorc").value);
	let power =Number(document.getElementById("power").value);
	let match =Number(document.getElementById("match").value);
	let comp =Number(document.getElementById("comp").value);
	//let ehdresult =Number(document.getElementById("ehdisp").value);
	if (aorc == 0){
		//let adresult =Number(document.getElementById("adisp").value);
		//let ebdresult =Number(document.getElementById("ebdisp").value);
		temp = Math.floor(22*power*aresult/ebresult)
		temp = Math.floor(temp/50+2)
		mintemp = Math.floor(temp*0.85)
		temp = Math.floor(temp*comp)
		mintemp = Math.floor(mintemp*comp)
		temp = Math.ceil(temp*match-0.5)
		mintemp = Math.ceil(mintemp*match-0.5)
	}
	else{
		//let cdresult =Number(document.getElementById("cdisp").value);
		//let eddresult =Number(document.getElementById("eddisp").value);
		temp = Math.floor(22*power*cresult/edresult)
		temp = Math.floor(temp/50+2)
		mintemp = Math.floor(temp*0.85)
		temp = Math.floor(temp*comp)
		mintemp = Math.floor(mintemp*comp)
		temp = Math.ceil(temp*match-0.5)
		mintemp = Math.ceil(mintemp*match-0.5)
	}
	document.getElementById("mintemp").innerHTML = mintemp;
	document.getElementById("temp").innerHTML = temp;
	document.getElementById("mincurrentHP").innerHTML = ehresult-temp;
	document.getElementById("maxcurrentHP").innerHTML = ehresult-mintemp;
	document.getElementById("minrate").innerHTML = (ehresult-temp)/ehresult*100;
	document.getElementById("maxrate").innerHTML = (ehresult-mintemp)/ehresult*100;
}