Pure and Impure Pipes 
======================>

.html====>


<p>parent works!</p>
<button (click)="btnClick1()">Click2</button> <br> <hr> <hr>


   
    
    <div class="row justify-content-center">
        <div class="col-md-8 form-inline mb-4">

                <input type="text"  class="form-control " placeholder="Add Product" #add >        
                <button (click)="onadd(add)"> Add Product</button>
        </div>

        <div class="col-md-8">
            <div class="form-group">
                <input type="email" class="form-control mb-4" id="exampleFormControlInput1"
                 placeholder="Search product " [(ngModel)]="namesearch">
              </div>
        </div>

        <div class="col-md-8">
            <table class="table">
                <thead class='table table-dark'>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Availability</th>
                  </tr>
                </thead>
                <tbody>
                  <tr *ngFor="let product of productarray | filter : namesearch">
                    <th scope="row">{{product.srno}}</th>
                    <td>{{product.name}}</td>
                    <td>{{product.price}}</td>
                    <td><span class="btn btn-success">{{product.Availability}}</span></td>
                  </tr>
                  
                
                </tbody>
              </table>
              
        </div>
    </div>

 



.ts======================>



  namesearch:string="";

  productarray = [
    { 
      srno :1, name :'Mobile', price: 24000,  Availability :'Available'
    },
    {
      srno :2, name :'TV',     price :54000,  Availability : ' Not Available'
    },
    {
      srno :3, name :'Tablet', price: 4000,    Availability : 'Available'
    },
    { 
      srno :4, name :'LCD TV', price: 24000,  Availability :'Available'
    },
    {
      srno :5, name :'TV',     price :54000,  Availability : ' Not Available'
    },
    {
      srno :6, name :'Mobile(samsung)', price: 4000,    Availability : 'Available'
    }
  ]
  

  
  onadd(add){
  this.productarray.push({
  srno : 7, name : add.value , price: 9000,    Availability : 'Not Available'
  
  })
    }
