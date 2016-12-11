import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component'

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [];
  recipe: Recipe = new Recipe('Dummy','Dummy','http://www.dummymag.com//media/img/dummy-logo.png');

  onSelected(recipe: Recipe){

    this.recipeSelected.emit(recipe);

  }

  constructor() { }

  ngOnInit() {
  }

}
