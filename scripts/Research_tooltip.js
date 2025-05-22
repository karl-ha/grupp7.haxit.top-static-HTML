function showTooltip(event, number) 
{
            const tooltip = document.getElementById(number);
            tooltip.style.display = 'block';
            tooltip.style.left = event.pageX + 'px';
            tooltip.style.top = event.pageY + 'px';
}

function hideTooltip(event, number) 
{
            const tooltip = document.getElementById(number);
            tooltip.style.display = 'none';
}