import {Routes} from '@angular/router'
import {RecipeComponent} from "./recipe";
import {ShoppingListComponent} from "./shopping-list";
export const APP_ROUTES_PROVIDERS: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},

    {path: 'shopping-list', component: ShoppingListComponent}

];