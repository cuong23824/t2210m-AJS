import {Component} from "@angular/core";
import {ProductServices} from "../services/product.services";

@Component({
  selector: 'app-search',
  templateUrl:'./search.component.html',
})

export class SearchConponent{

  s:string = '';
  constructor(private productServies:ProductServices) {
  }
  search:any = [];


  getSearch(){
    this.productServies.getSearch(this.s).subscribe(data=>{
      this.search = data.products;
    })
  }

}
