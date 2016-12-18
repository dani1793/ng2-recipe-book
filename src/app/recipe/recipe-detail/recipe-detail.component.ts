import {Component, OnInit, OnDestroy} from '@angular/core';
import {Recipe} from "../recipe";
import {ShoppingListService} from "../../shopping-list";
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {RecipeService} from "../recipe.service";

@Component({
    selector: 'rb-recipe-detail',
    templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {

    private recipeIndex: number;
    private subscription: Subscription;

    selectedRecipe: Recipe;

    constructor(private sls: ShoppingListService,
                private router: Router,
                private route: ActivatedRoute,
                private recipeService: RecipeService) {
    }

    onEdit() {
        this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
    }

    onDelete() {
        this.recipeService.deleteRecipe(this.selectedRecipe);
        this.router.navigate(['/recipes']);
    }

    onAddToShoppingList() {
        this.sls.addItems(this.selectedRecipe.ingredients);
        this.router.navigate(['/shopping-list']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(((params: any) => {
            this.recipeIndex = params['id'];
            this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
        }))
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

}
