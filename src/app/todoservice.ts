import {Injectable} from "@angular/core";

@Injectable()
export class TodoService{

  items:any=[];
  addItem(item){
    this.items.push(item);
  }
  getItem(){
    return this.items;

  }
}
