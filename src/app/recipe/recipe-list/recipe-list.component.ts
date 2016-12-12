import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component'

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Biryani','Very tasty','http://i.ndtvimg.com/i/2016-06/biryani_625x350_71466587674.jpg',[]),
    new Recipe('Qourma','Very tasty indeed','http://www.boldsky.com/img/2014/10/17-chicken-korma-lucknow.jpg',[])
  ];
  onSelected(recipe: Recipe){

    this.recipeSelected.emit(recipe);

  }

  constructor() { }

  ngOnInit() {
  }

}
