function tss()
{
	var v=document.getElementById("ts").value;
	if(v.search(/^[a-z]{1,}$/)!=0)
		{
			document.getElementById("sp").innerHTML="**invalid name";
			return false;
		}
}