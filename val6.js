function val6()
{
	var n=document.getElementById("fname").value;
	var a=document.getElementById("address").value;
	var p=document.getElementById("phone").value;
	if(n=="")
	{
		document.getElementById("na").innerHTML="**Please fill name";
		return false;
	}
	if(a=="")
	{
		document.getElementById("ad").innerHTML="**Please fill address";
		return false;
	}
	if(p=="")
	{
		document.getElementById("ph").innerHTML="**Please fill phone number";
		return false;
	}
	if(n.search(/^[A-Za-z]{2,20}$/)!=0)
		{
			document.getElementById("na").innerHTML="**Invalid name";
			return false; 
		}
		if(a.search(/^[A-Za-z0-9.,]{5,20}$/)!=0)
		{
			document.getElementById("ad").innerHTML="**Invalid address";
			return false; 
		}
		if(p.search(/^[0-9]{10}$/)!=0)
		{
			document.getElementById("ph").innerHTML="**Invalid phone numer";
			return false; 
		}
}