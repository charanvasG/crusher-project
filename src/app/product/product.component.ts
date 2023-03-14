import { Component, OnInit } from '@angular/core';
import { LoginserService } from '../shared/services/loginser.service';
import { ProductList } from '../shared/interfaces/product-list';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
 
  
 pro:any;
  constructor(private service:LoginserService,public http:HttpClient){}

  ngOnInit(){
    this.getproductlist();
}
 getproductlist(){
  this.service.getProduct().subscribe((data)=>{
    this.pro = data
    console.log(data);
  });
}
}