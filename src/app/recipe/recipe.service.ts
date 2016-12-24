import {Injectable, EventEmitter} from '@angular/core';
import {Recipe} from './recipe'
import {Ingredient} from "../ingredients/ingredient";
import {Headers, Http, Response} from "@angular/http";
import {Observable, Subscription} from 'rxjs'

@Injectable()
export class RecipeService {

    recipesChanged = new EventEmitter<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe('Biryani', 'Very tasty', 'http://i.ndtvimg.com/i/2016-06/biryani_625x350_71466587674.jpg', [new Ingredient('rice', 200), new Ingredient('chicken', 1)]),
        new Recipe('Qourma', 'Very tasty indeed', 'http://www.boldsky.com/img/2014/10/17-chicken-korma-lucknow.jpg', [])
    ];

    constructor(private http: Http) {
    }

    getRecipes() {
        return this.recipes;
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    deleteRecipe(recipe: Recipe) {
        this.recipes.splice(this.recipes.indexOf(recipe), 1);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
    }

    editRecipe(oldRecipe: Recipe, newRecipe: Recipe){
        this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
    }

    storeData(){
        const body = JSON.stringify(this.recipes);
        const headers = new Headers({
            'Content-Type': 'application/json',
        });
        return this.http.put('https://recipebook-15fe3.firebaseio.com/recipes.json',body,{headers: headers})
    }

    fetchData(){
        return this.http.get('https://recipebook-15fe3.firebaseio.com/recipes.json')
            .subscribe((data: Response)=> {
                console.log(data)
                this.recipes = data.json();
                this.recipesChanged.emit(this.recipes);
            })

    }

}
