import { Component } from '@angular/core';
import { RandomRecipesService } from '../../../../services/random-recipes/random-recipes.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-food-cards',
  templateUrl: './food-cards.component.html',
  styleUrl: './food-cards.component.css'
})
export class FoodCardsComponent {
  foods: any = []
  loading: boolean = true
  loadingMore: boolean = false

  ngOnInit(){
    this.getFoods()
  }

  constructor(private service: RandomRecipesService){}

  getFoods(){
    this.service.listRandomFood(6).pipe(
      finalize(()=>this.loading = false)
    ).subscribe((data: any)=> {
      this.foods = this.foods.concat(data.recipes)})
  }

  loadMore(){
    this.loadingMore = true
    this.service.listRandomFood(3).pipe(
      finalize(()=> this.loadingMore = false)
    ).subscribe((data:any)=>this.foods = this.foods.concat(data.recipes))
  }
}
