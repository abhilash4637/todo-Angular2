import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {TodoService} from "../todoservice";
@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.css']
})
export class TextfieldComponent implements OnInit {
@Output() onToggle=new EventEmitter();
  constructor(private todoService:TodoService) {

  }

  ngOnInit() {
  }
  onSubmit(e){
    if (e.textfield != null){
      this.todoService.addItem(e);
    this.toggle();
  }
  }
  toggle(){
    this.onToggle.emit();
  }
}
