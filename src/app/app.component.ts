import { Component } from '@angular/core';
import { HeaderComponent } from './header.component'
import { RecipeComponent } from './recipe'
import { ShoppingListComponent } from './shopping-list'
import { DropdownDirective } from './dropdown.directive'
@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rb works!';
}
