import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe; //svojstvo, nedefiniran jer ne prosljeđujemo vrijednst - ona se dodijeli kada se pokrene event iz html template-a
  
  constructor() { }

  ngOnInit(): void {
  }

}
