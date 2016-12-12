import { Component } from '@angular/core';
import { HeaderComponent } from './header.component'
import { RecipeComponent } from './recipe'
import { ShoppingListComponent } from './shopping-list'
import { DropdownDirective } from './dropdown.directive'
import {RecipeService} from "./recipe/recipe.service";
import {ShoppingListService} from "./shopping-list";

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService, ShoppingListService]
})
export class AppComponent {
  title = 'rb works!';
}
