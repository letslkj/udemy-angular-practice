import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "페퍼로니 피자",
      "맛있어요~!!",
      "https://cdn.dominos.co.kr/admin/upload/goods/20200311_x8StB1t3.jpg",
      [new Ingredient("Meat", 1), new Ingredient("potato", 1)]
    ),
    new Recipe(
      "신라면",
      "사나이를 울리는 맛~!!",
      "https://image.yes24.com/momo/TopCate2796/MidCate004/279536705.jpg",
      [new Ingredient("pepper", 1), new Ingredient("carrot", 1)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
