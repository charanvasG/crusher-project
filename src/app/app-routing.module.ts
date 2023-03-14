import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PriceListComponent } from './price-list/price-list.component';
import { ProductComponent } from './product/product.component';
import { QuantityComponent } from './quantity/quantity.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'login' , component:LoginComponent},
  {path:'dashboard',component:SidenavComponent,
  children:[
      {path:'products', component: ProductComponent},
      {path:'quantity' , component:QuantityComponent},
      {path:'price-list' , component:PriceListComponent}
  ]
},

 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
