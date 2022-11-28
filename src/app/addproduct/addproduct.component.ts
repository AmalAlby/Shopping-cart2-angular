import { Component } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {

  image=""
  title=""
  sname=""
  description=""
  quantity=""

  read=()=>{
  let data:any={"title":this.title,"description":this.description,"image":this.image,"sname":this.sname,"quantity":this.quantity}
    console.log(data)
}
}
