function val3()
{
var txs=document.getElementById("psw");
var tx=txs.value;
if(tx=="")
{
	document.getElementById("pp").innerHTML="Please enter name";
	return false;
}
else if(tx.search(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{5}$/)==0)
{
	return true;
}
else
{
	document.getElementById("pp").innerHTML="Invalid username";
	return false;
}
}
