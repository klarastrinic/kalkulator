
//funkcija koja brise sve sto smo unjeli u field, dohvaca id txt iz html-ea

function obrisi()
{
	var a=document.getElementById("txt");
	a.value="";
}

//funkcija koja dodaje broj 
function add(number)
{
	var a=document.getElementById("txt");
	a.value=a.value+number;
}
//funkcija koja racuna brojeve pomocu funkcije eval
function calculate()
{
	a=document.getElementById ("txt");
	a.value=eval(a.value);
}

//funkcija koja vraca samo jedan broj nazad
function nazad() {
 var v =document.getElementById("txt").value; 
 document.getElementById("txt").value = v.substr(0, v.length - 1); 
}

function sin() 
{
	var a = document.getElementById("txt").value;
	var b= Math.sin(a);
document.getElementById("txt").value =	b;
}

function cos()
{
	var a = document.getElementById("txt").value;
	var b = Math.cos(a);
	document.getElementById("txt").value= b;
}

function tan()
{
	var a = document.getElementById("txt").value;
	var b= Math.tan(a);
	document.getElementById("txt").value= b;
}


function sqrt() 
{
	var a = document.getElementById("txt").value;
	var b= Math.sqrt(a);
	document.getElementById("txt").value = b;
}

function log()
{
	var a = document.getElementById("txt").value;
	var b= Math.log10(a);
	document.getElementById("txt").value = b;
}

function cot()
{
	var a = document.getElementById("txt").value;
	document.getElementById("txt").value = Math.cos(a)/Math.sin(a);
}

