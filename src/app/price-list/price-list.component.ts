import { Component, OnInit } from '@angular/core';
import { LoginserService } from '../shared/services/loginser.service';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss']
})
export class PriceListComponent implements OnInit{
pri :any;
constructor (public service:LoginserService){}

  ngOnInit(): void {
   this.getprices();
  }
  getprices(){
    this.service.getPricelist().subscribe((data)=>{
      this.pri = data
    })
  }

}
