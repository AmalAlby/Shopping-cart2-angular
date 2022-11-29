import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent {

  constructor(private api:ApiService){

    api.store().subscribe(

      (resposne)=>{
        this.data=resposne;
      }

    )

  }

  data:any=[]

}
