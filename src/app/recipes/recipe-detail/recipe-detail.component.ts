import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Recipe } from "../recipe";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  // styleUrls: ['./recipe-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
