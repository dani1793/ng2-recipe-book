import {Injectable} from '@angular/core';
import {Recipe} from './recipe'
import {Ingredient} from "../ingredients/ingredient";

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Biryani', 'Very tasty', 'http://i.ndtvimg.com/i/2016-06/biryani_625x350_71466587674.jpg', [new Ingredient('rice', 200), new Ingredient('chicken', 1)]),
        new Recipe('Qourma', 'Very tasty indeed', 'http://www.boldsky.com/img/2014/10/17-chicken-korma-lucknow.jpg', [])
    ];

    constructor() {
    }

    getRecipes() {
        return this.recipes;
    }
}
