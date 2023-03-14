import { Component, OnInit } from '@angular/core';
import { LoginserService } from '../shared/services/loginser.service';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss']
})
export class QuantityComponent implements OnInit{
  quan: any;

  constructor(private service:LoginserService){}
  ngOnInit(): void {
    this.getquanlist();
  }
getquanlist(){
  this.service.getQuantity().subscribe((data)=>{
    this.quan = data
    console.log(this.quan);
  })
}
}
