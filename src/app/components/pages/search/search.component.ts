import { Component } from '@angular/core';
import { SearchService } from '../../../services/search/search.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {

  loading = false;
  query = '';
  foods: any = [];

  constructor(private service: SearchService) {}

  ngOnInit(): void {}

  getSearch(): any {
    this.loading = true;
    this.service
      .search(this.query)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe((data) => {
        this.foods = data.results;
      });
  }
}
