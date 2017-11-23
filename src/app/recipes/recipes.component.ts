import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Recipe} from './recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  encapsulation: ViewEncapsulation.None
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
