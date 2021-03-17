function val5()
{
	document.getElementById("nam").innerHTML="";
	document.getElementById("add").innerHTML="";
	document.getElementById("phn").innerHTML="";
	document.getElementById("mnam").innerHTML="";
	var na=document.getElementById("fname");
	var n=na.value;
	var mno=document.getElementById("item");
	var mn=mno.value;
	var pho=document.getElementById("phone");
	var ph=pho.value;
	var ado=document.getElementById("address");
	var ad=ado.value;
	var radi=sendform.mode;
	var ch=0;
	if(n=="")
	{
		document.getElementById("nam").innerHTML="**Please Enter Name";
		return false;
	}
	if(ad=="")
	{
		document.getElementById("add").innerHTML="**Please Enter Address";
		return false;
	}
	if(ph=="")
	{
		document.getElementById("phn").innerHTML="**Please Enter Phone number";
		return false;
	}
	if(mn=="")
	{
		document.getElementById("mnam").innerHTML="**Please item name";
		return false;
	}
	
		for(var i=0;i<radi.length;i++)
		{
			if(radi[i].checked)
			{
				ch=1;
			}
		}
		if(ch!=1)
		{
			document.getElementById("op").innerHTML="**Please select one";
			return false;
		}
	if(n.search(/^[A-Za-z]{1,10}$/)!=0)
		{
			document.getElementById("nam").innerHTML="**Invalid name";
			return false;
		}
		if(mn.search(/^[A-Za-z]{1,10}$/)!=0)
		{
			document.getElementById("mnam").innerHTML="**Invalid middle name";
			return false;
		}
		if(ad.search(/^[A-Za-z.,]{1,30}$/)!=0)
		{
			document.getElementById("add").innerHTML="**Invalid address";
			return false;
		}
		if(ph.search(/^[0-9]{10}$/)!=0)
		{
			document.getElementById("phn").innerHTML="**Invalid phone numer";
			return false;
		}
}