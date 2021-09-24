var sum = 0;
var count = 0;


function add(x)
{
  sum = sum + x;
  count = count+1;
  printInfo();
}


function printInfo()
 {
   document.getElementById("printInfo").innerHTML = "<hr>" + "The sum is: " + sum + "<br>" + "The count is: " + count;
 }

 function gone()

 {
   sum = 0;
   count = 0;
   document.getElementById("printInfo").innerHTML = "";
 }
