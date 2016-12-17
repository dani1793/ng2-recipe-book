import {RouterModule, Routes} from '@angular/router';
import {NgModule}             from '@angular/core';
import {RecipeStartComponent} from "./recipe-start.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeComponent} from "./recipe.component";


const RECIPE_ROUTES: Routes = [
    {
        path: 'recipes', component: RecipeComponent,
        children: [
            {path: '', component: RecipeStartComponent},
            {path: 'new', component: RecipeEditComponent},
            {path: ':id', component: RecipeDetailComponent},
            {path: ':id/edit', component: RecipeEditComponent}
        ]
    },


]


@NgModule({
    imports: [
        RouterModule.forChild(RECIPE_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})


export class RecipeRoutingModule {
}