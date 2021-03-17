function val4()
{
	document.getElementById("nam").innerHTML="";
	document.getElementById("mnam").innerHTML="";
	document.getElementById("lnam").innerHTML="";
	document.getElementById("add").innerHTML="";
	document.getElementById("phn").innerHTML="";
	document.getElementById("el").innerHTML="";
	var na=document.getElementById("name");
	var n=na.value;
	var mno=document.getElementById("mname");
	var mn=mno.value;
	var lno=document.getElementById("lname");
	var ln=lno.value;
	var pho=document.getElementById("phone");
	var ph=pho.value;
	var ado=document.getElementById("address");
	var ad=ado.value;
	var emo=document.getElementById("email");
	var em=emo.value;
	
	if(n=="")
	{
		document.getElementById("nam").innerHTML="**Please Enter Name";
		return false;
	}
	if(mn=="")
	{
		document.getElementById("mnam").innerHTML="**Please Enter Middle Name";
		return false;
	}
	if(ln=="")
	{
		document.getElementById("lnam").innerHTML="**Please Enter Last Name";
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
	if(em=="")
	{
		document.getElementById("el").innerHTML="**Please Enter Phone number";
		return false;
	}
	if(n.search(/^[A-Za-z]{1,20}$/)!=0)
		{
			document.getElementById("nam").innerHTML="**Invalid name";
			return false;
		}
		if(mn.search(/^[A-Za-z]{1,20}$/)!=0)
			{
				document.getElementById("mnam").innerHTML="**Invalid middle name";
				return false;
			}
			if(ln.search(/^[A-Za-z]{1,20}$/)!=0)
			{
				document.getElementById("lnam").innerHTML="**Invalid last name";
				return false;
			}
			if(ad.search(/^[A-Za-z0-9,.]{1,40}$/)!=0)
				{
					document.getElementById("add").innerHTML="**Invalid address pattern";
					return false;
				}
				if(ph.search(/^[0-9]{10}$/)!=0)
					{
						document.getElementById("phn").innerHTML="**Invalid phone number";
						return false;
					}
					if(em.search(/^[a-zA-Z0-9_]+@[a-zA-Z0-9.]+\.[a-zA-z]{2,4}$/)!=0)
					{
						document.getElementById("el").innerHTML="**Invalid email";
						return false;
					}
}