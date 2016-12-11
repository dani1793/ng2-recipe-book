import { Component, OnInit } from '@angular/core';
import { RecipeListComponent } from './recipe-list/recipe-list.component'
import { RecipeDetailComponent } from './recipe-detail'
import {Recipe} from "./recipe";


@Component({
  selector: 'rb-recipe',
  templateUrl: './recipe.component.html'
})
export class RecipeComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
