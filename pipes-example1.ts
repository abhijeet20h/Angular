
Pipes ====>



.html======>



{{text | uppercase}} <br><br>
{{text | titlecase}}<br><br>
{{date}}<br><br>
{{date | date}}<br><br>   <!--here we used  " date pipe "--> 
{{date | date:"short"}}<br><br> <!--here we uses short parameter of date  different parameter also available-->
{{date | date:"fullDate" | uppercase}}<br><br> <!--we can use multiple pipes like this--> 
{{date | slice : 2 :5}}<br><br>  <!-- cut  -->


<!-- More info  in official site -->









.ts===============>


text = " hello welcome to my program"
date = new Date()
