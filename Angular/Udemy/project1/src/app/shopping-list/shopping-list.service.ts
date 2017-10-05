import { Injectable } from '@angular/core';

import { Ingredient } from './../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Garlic', 2),
  ];

  constructor() { }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.updated();
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.updated();
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.updated();
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.updated();
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  private updated() {
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
