import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header.component';
import {RecipeComponent} from './recipe/recipe.component';
import {RecipeListComponent} from './recipe/recipe-list/recipe-list.component';
import {RecipeItemComponent} from './recipe/recipe-list/recipe-item.component';
import {RecipeDetailComponent} from './recipe/recipe-detail/recipe-detail.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ShoppingListAddComponent} from './shopping-list/shopping-list-add.component';
import {DropdownDirective} from './dropdown.directive';
import {RouterModule} from "@angular/router";
import {APP_ROUTES_PROVIDERS} from "./app.routes";
import {RecipeStartComponent} from './recipe/recipe-start.component';
import {RecipeRoutingModule} from "./recipe/recipe.routes";
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import {Observable} from "rxjs";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        RecipeComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipeDetailComponent,
        ShoppingListComponent,
        ShoppingListAddComponent,
        DropdownDirective,
        RecipeStartComponent,
        RecipeEditComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        //routes
        RouterModule.forRoot(APP_ROUTES_PROVIDERS),
        RecipeRoutingModule,
        ReactiveFormsModule,


    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
