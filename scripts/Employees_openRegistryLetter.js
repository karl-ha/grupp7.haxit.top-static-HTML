function openRegistryLetter(letter)
{
	const xhttp = new XMLHttpRequest();
	xhttp.onload = function() 
	{
		document.getElementById("employeesmiddle").innerHTML = this.responseText;
	}
	xhttp.open("GET", "employees_middle_"+letter+".html", true);
	xhttp.send();
}