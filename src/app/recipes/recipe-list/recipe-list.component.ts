import { Component, EventEmitter, OnInit, Output } from "@angular/core";

import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      "페퍼로니 피자",
      "맛있어요~!!",
      "https://cdn.dominos.co.kr/admin/upload/goods/20200311_x8StB1t3.jpg"
    ),
    new Recipe(
      "신라면",
      "사나이를 울리는 맛~!!",
      "https://image.yes24.com/momo/TopCate2796/MidCate004/279536705.jpg"
    ),
    new Recipe(
      "King James",
      "Greatest of All Time!!",
      "http://image.kmib.co.kr/online_image/2020/0110/611614110014116199_1.jpg"
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
