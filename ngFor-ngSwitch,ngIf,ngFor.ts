



 <!-- ngFor  -->
 <!-- <div class="container">
     <hr>
 <ul class="list-group">
     <li class="list-group-item" *ngFor="let y of x">{{y.name+" , "+y.country}}</li>
 </ul>

 <hr>

 <select class="form-control">
     <option>Select Name & Country</option>
     <option *ngFor="let y of x">
         {{y.name+" , "+y.country}}
     </option>
 </select>
<hr>
 in table format
<table class="table table-border table-striped">
    <thead class="table-dark">
    <tr>
        <th>Name</th>
        <th>Country</th>
    </tr>
</thead>
<tbody>
    <tr  *ngFor="let y of x">
        <td>{{y.name}}</td>
        <td>{{y.country}}</td>
    </tr>
</tbody>
</table>

<select>
    <option *ngFor="let item of items" [value]="item.val">{{item.name}}</option>
</select>
</div> -->


<!-- 
Property binding


<p> Name is {{title}}</p>

<img [src]="y"> -->


<!-- 
NgIf
<button (click)="show=!show" > HELLO ABHI </button>  

<hr>

<button (click)="show=!show" > {{show ? "HIDE" : "SHOW"}} </button>
<div *ngIf="show"> TEXT TO SHOW</div> -->

<!-- 
NgSwitch

<div [ngSwitch]="n">
    <div *ngSwitchCase="'one'">ONE</div>
    <div *ngSwitchCase="'two'">TWO</div>
    <div *ngSwitchDefault>No Match</div>
</div> -->