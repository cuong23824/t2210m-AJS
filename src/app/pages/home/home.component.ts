import {Component} from "@angular/core";

@Component({
  selector:'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent{
 className = 'T2210M';
 numberOfStudents:number = 5;
 textColor ='text-primary';
 categories = [
   'Fashion','Watch','Shoes','Diamond'
 ];

 product: any = {
   name: 'Iphone 14 pro max',
   price: 29000000,
 };

 products: any = [
   {
     id:1,
     name: 'Iphone 14 pro max',
     price: 29000000,
     qty: 10,
   },
   {
     id:2,
     name: 'Iphone 13 pro max',
     price: 25000000,
     qty: 0,
   },
   {
     id:3,
     name: 'Iphone 12 pro max',
     price: 21000000,
     qty: 5,
   },
 ]

 addStudent(){
   this.numberOfStudents++;
   this.textColor = 'text-primary';
 }
 removeStudent(){
   if(this.numberOfStudents>0)
   this.numberOfStudents--;
   if(this.numberOfStudents==0)
     this.textColor = 'text-danger';
 }
 addCart(){}
}
