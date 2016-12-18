import { Component, OnInit } from '@angular/core';
import { ShoppingListAddComponent } from './shopping-list-add.component';
import {Ingredient} from "../ingredients/ingredient";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {

  public items: Ingredient[]=[]
  selectedItem: Ingredient = null;
  constructor(private sls: ShoppingListService) { }

  onSelectItem(item: Ingredient){
    this.selectedItem = item;
  }
  ngOnInit() {
    this.items = this.sls.getItems();
  }

  onCleared(){
    this.selectedItem = null;
  }
}
