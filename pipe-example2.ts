
.ts==========================>

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  city:string = 'HyDeraBAd';
  salary:number = 752487500;
  n:number = 0.72;
  person:object = {firstname:'Srikanth',lastname:'Rallabandi'};
  dt:Date = new Date();

  movieDuration: number = 150;
}



.html==========================>



<div class="class1">
  <h4>Pipes in Angular</h4>
  City:{{city}}<br>
  Salary: {{salary}}<br>
  n:{{n}}<br>
  Current Time: {{dt}}<br>
  Person: {{person}}<br>
  <hr>
  Uppercase: {{city|uppercase}}<br>
  Lowercase: {{city|lowercase}}<br>
  Slice: {{city|slice:2:6}}<br>
  Number:{{salary|number}}<br>
  Number:{{salary|number:".2"}}<br>
  Currency: {{salary |currency}}<br>
  Currency: {{salary |currency:"INR"}}<br>
  Currency: {{salary |currency:"GBP"}}<br>
  Currency: {{salary |currency:"EUR"}}<br>
  Percent: {{n|percent}}<br>
  JSON: {{person|json}}<br>
  FullDate:{{dt|date:"fullDate"}}<br>
  ShortDate:{{dt|date:"shortDate"}}<br>
  MediumDate:{{dt|date:"mediumDate"}}<br>
  <hr>
  <h4>Custom Pipes</h4>
  Video Duration: {{movieDuration}}<br>
  Video Duration :{{movieDuration | duration}}<br>
  Video Duration :{{movieDuration | duration:'hours'}}<br>
  Video Duration :{{movieDuration | duration:'hoursAndMin'}}<br>
</div>


