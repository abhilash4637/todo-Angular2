import { Component, OnInit } from '@angular/core';
import {TodoService} from "../todoservice";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  items:any;

  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.items=this.todoService.getItem();

  }

}
