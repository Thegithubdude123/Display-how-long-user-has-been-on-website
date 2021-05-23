function calctime()
{	var t=setTimeout("calctime()",1000);
    document.getElementById('time').innerHTML="You have sat through " + t + " Seconds!";
}
