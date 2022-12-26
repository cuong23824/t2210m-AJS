import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-btcategory',
  templateUrl:"./btcategory.component.html",
})

export class BtcategoryComponent{
  btcategory: any = ["smartphones","laptops","fragrances","skincare","groceries","home-decoration","furniture","tops","womens-dresses","womens-shoes","mens-shirts","mens-shoes","mens-watches","womens-watches","womens-bags","womens-jewellery","sunglasses","automotive","motorcycle","lighting"]
  btcategories: any =[]
  constructor(private http:HttpClient) {
  }

  ngOnInit(){
    this.getCategories();
  }
x='smartphones';

  getCategories(){
    const url = 'https://dummyjson.com/products/category/' +this.x;
    this.http.get<any>(url).subscribe(data=>{
      this.btcategories = data.btcategories;
    })
  }

}
