import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import  { Recipe } from "../recipe";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  // styleUrls: ['./recipe-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('Dummy', 'Dummy', 'https://images-na.ssl-images-amazon.com/images/I/51PxTVqIUNL._SY355_.jpg');
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    console.log('click');
    this.recipeSelected.emit(recipe);
  }

}
