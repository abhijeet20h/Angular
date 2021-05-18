import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  constructor() { }

  messageAlert(){
    alert('Hello this is alert');
}

   GenerateRandomNumber(){
      let a = Math.random() * 10;
      let b = Math.random() * 10;
      let c = Math.random() * 10;
      let d = Math.random() * 10;
      let e = Math.random() * 10;
      let num = Math.round(a) +' '+Math.round(b)+' '+Math.round(c) +' '+Math.round(d)+' '+Math.round(e);
      return num;
  }
}


app-module.ts ==>
import { MyserviceService } from './appServices/myservice.service';
  providers: [MyserviceService  ],


.html=========>


<button (click)="btnClick1()">Click2</button>


.ts============>


import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../appServices/myservice.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent implements OnInit {

  constructor(private _msgService: MyserviceService) { }
  btnClick1(){
  this._msgService.messageAlert();

  }
  ngOnInit(): void {
  }

}


