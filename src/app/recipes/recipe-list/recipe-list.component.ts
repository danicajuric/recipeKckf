import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]=[new Recipe('Test naslov', 'Proba opisa blabla', 'https://podravkaiovariations.azureedge.net/2a7e4ce6-631f-11eb-a783-0242ac120051/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1600x1200-f2b21938-64bc-11eb-9498-0242ac130010.jpeg')];
  constructor() { }

  ngOnInit(): void {
  }

}
