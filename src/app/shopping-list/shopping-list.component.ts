import { Component, OnInit } from '@angular/core';
import { ShoppingListAddComponent } from './shopping-list-add.component';
import {Ingredient} from "../ingredients/ingredient";

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {

  public items: Ingredient[]=[]
  constructor() { }

  ngOnInit() {
  }

}
