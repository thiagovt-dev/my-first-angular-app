import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomRecipesService {

  constructor( private http: HttpClient) { }

  listRandomFood(take: number){
    const apiUrl = `https://api.spoonacular.com/recipes/random?apiKey=ee008590b32b4f5a913e5a26d4947eb2&number=${take} `;

    return this.http.get(apiUrl)
  }
}
