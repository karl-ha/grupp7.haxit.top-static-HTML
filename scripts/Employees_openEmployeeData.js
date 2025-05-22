function openEmployeeData(id)
{

	const xhttp = new XMLHttpRequest();
	xhttp.onload = function() 
	{
		document.getElementById("employeesright").innerHTML = this.responseText;
	}
	xhttp.open("GET", "employees_right_"+id+".html", true);
	xhttp.send();
}