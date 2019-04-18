import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'Schnitzel', 
            'Lecker Schnitzel', 
            'https://placeimg.com/300/300/animals',
            [
                new Ingredient('Schweinfleisch', 1),
                new Ingredient('Pommes', 20)
            ]),
        new Recipe(
            'Burger', 
            'Burger aus Hamburg', 
            'https://placeimg.com/300/300/people',
            [
                new Ingredient('Brot', 2),
                new Ingredient('Burgerfleisch', 2),
                new Ingredient('Cheddarkäse', 2)
            ])
      ];
    
    constructor(private shoppingListService: ShoppingListService) {}
    
    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, recipe: Recipe) {
        this.recipes[index] = recipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

    addingredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
}