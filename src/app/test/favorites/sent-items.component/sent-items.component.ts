import {Component} from "@angular/core";

@Component({
  selector:'app-sent-items',
  templateUrl:'./sent-items.component.html',
})
export class SentItemsComponent{
items:any=[
  {
    name:'Gemma Robinson',
    chat:'Apology for late response email',
    l:'Hello Colette Wooten',
  },
]
}
