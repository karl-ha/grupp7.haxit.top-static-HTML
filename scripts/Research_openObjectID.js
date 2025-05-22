function openObjectID(ID)
{
	const xhttp = new XMLHttpRequest();
	xhttp.onload = function() 
	{
		document.getElementById("researchmiddle").innerHTML = this.responseText;
	}
	xhttp.open("GET", "research_middle.asp?id="+ID+"", true);
	xhttp.send();
}