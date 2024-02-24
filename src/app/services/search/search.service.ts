import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Define a interface para representar a estrutura dos dados retornados pela API
interface SearchResult {
  // Defina aqui as propriedades esperadas no objeto retornado pela API
  results: any[];

}

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  // Tipar o retorno do método search com a interface definida
  search(query: string): Observable<SearchResult> {
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=ee008590b32b4f5a913e5a26d4947eb2&query=${query}&number=10`;

    return this.http.get<SearchResult>(apiUrl);
  }
}
