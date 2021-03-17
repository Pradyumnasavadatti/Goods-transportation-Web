function val2()
{
	document.getElementById("h").innerHTML="";
var txs=document.getElementById("name");
var tx=txs.value;
var txse=document.getElementById("psw");
var txw=txse.value;
if(tx=="")
{
	document.getElementById("h").innerHTML="Please enter name";
	return false;
}
else if(tx.search(/^(?=.*[A-Z])(?=.*[a-z_@])(?=.*\d).{8,15}$/)==0)
{                     
if(txw=="")
{
	document.getElementById("pp").innerHTML="Please enter password";
	return false;
}
else if(txw.search(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{5}$/)==0)
{
	return true;
}
else
{
	document.getElementById("pp").innerHTML="Invalid password";
	return false;
}
}	
else
{
	document.getElementById("h").innerHTML="Invalid username";
	return false;
}
}