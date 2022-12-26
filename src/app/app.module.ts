import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {StudentComponent} from "./student/student.component";
import {ClassComponent} from "./classes/class.component";
import {ProductComponent} from "./pages/Product/product.component";
import {HomeComponent} from "./pages/home/home.component";
import {CategoryComponent} from "./pages/Category/category.component";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./pages/Login/login.component";
import {RegisterComponent} from "./pages/Register/register.component";
import {HttpClientModule} from "@angular/common/http";
import {BtcategoryComponent} from "./pages/Btcategory/btcategory.component";
import {SearchConponent} from "./search/search.conponent";
import {FormsModule} from "@angular/forms";

// 1. khai bao danh sach cac routing
const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'category', component: CategoryComponent},
  {path:'product/:id',component: ProductComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'btcategory',component:BtcategoryComponent},
  {path:'search',component:SearchConponent},
]

@NgModule({
  declarations: [
     SearchConponent,AppComponent,StudentComponent,ClassComponent,ProductComponent,HomeComponent,CategoryComponent,LoginComponent,RegisterComponent,BtcategoryComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule, //khi có api
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
