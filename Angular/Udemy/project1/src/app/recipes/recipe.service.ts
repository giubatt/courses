import { Subject } from 'rxjs/Subject';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Lasanha',
      'Lasanha de carne boa',
      'http://s.glbimg.com/po/rc/media/2012/11/19/16_26_25_11_destaque_05_02_2010.jpg',
      [
        new Ingredient('Carne Moída (g)', 500),
        new Ingredient('Massa de lasanha (g)', 200),
        new Ingredient('Queijo (g)', 200)
      ]),
    new Recipe('Burger',
      'Very good',
      'http://www.tellusaboutus.com/comments/images/BK-WebComment/BB_WHOPPER-v1.png',
      [
        new Ingredient('Burger', 1),
        new Ingredient('Pão de Hamburger', 1)
      ]),
  ];

  private updated() {
    this.recipesChanged.next(this.recipes.slice());
  }

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(newRecipe: Recipe) {
    this.recipes.push(newRecipe);
    this.updated();
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.updated();
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.updated();
  }


}
