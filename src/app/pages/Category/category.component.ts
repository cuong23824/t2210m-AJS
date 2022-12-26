import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Adapters} from "../../enums/adapters";
import {ProductServices} from "../../services/product.services";

@Component({
  selector:'app-category',
  templateUrl:'./category.component.html',
})
export class CategoryComponent{
  limit:number= Adapters.LIMIT;

 products: any = []

  constructor(private productService: ProductServices) {
  }

  ngOnInit(){
   this.getProducts();
  }


  getProducts(){
   this.productService.getProducts(this.limit).subscribe(data=>{
     this.products = data.products;
   })
    }
  loadmore(){
   this.limit += 10;
   this.getProducts();
  }
}
