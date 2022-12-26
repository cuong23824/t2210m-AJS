import {HttpClient} from "@angular/common/http";
import {Adapters} from "../enums/adapters";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ProductServices {
  constructor(private htttp: HttpClient) {
  }

  getProducts(limit: number) {
    const url = Adapters.BASE_URL + 'products?limit=' + limit;
    return this.htttp.get<any>(url);
  }

  getProductDetail(id:number){
    const url= Adapters.BASE_URL+'products/'+ id;
    return this.htttp.get<any>(url);
  }
  getCategories(){
    const url= Adapters.BASE_URL + '/products/categories';
    return this.htttp.get<any>(url);
  }
  getCategoryDetail(a:string){
    const url = Adapters.BASE_URL + '/products/category/' + a;
    return this.htttp.get<any>(url);
  }
  getSearch(s:string){
    const url= Adapters.BASE_URL + 'products/search?q=' +s;
    return this.htttp.get<any>(url);
  }
}
