import { Recipe } from "./recipe.model";
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Test naslov', 'Proba opisa blabla', 'https://podravkaiovariations.azureedge.net/2a7e4ce6-631f-11eb-a783-0242ac120051/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1600x1200-f2b21938-64bc-11eb-9498-0242ac130010.jpeg'),
        new Recipe('Test naslov 2', 'Proba opisa 22222', 'https://podravkaiovariations.azureedge.net/2a7e4ce6-631f-11eb-a783-0242ac120051/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1600x1200-f2b21938-64bc-11eb-9498-0242ac130010.jpeg')
    ];

    getRecipes(){
        return this.recipes.slice();
    }

}  