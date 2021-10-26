import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ServerShopService } from '@core/services/server-shop.service';
import { Observable } from 'rxjs';
import { debounceTime, filter, startWith } from 'rxjs/operators';
import {ISearchResponse} from '@shared/models/ISearchResponse';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  public textControl = new FormControl();
  public searchPattern$: Observable<string>;
  public searchResult:ISearchResponse[] = [];

  constructor(private serverShopService: ServerShopService) {
    this.searchPattern$ = this.textControl.valueChanges.pipe(
      filter((str) => str.length > 2),
      debounceTime(500),
      startWith(this.textControl.value),
    );
   }

   ngOnInit() {
    this.searchPattern$.subscribe((pattern) => this.serverShopService.searchGoods(pattern).subscribe(response=> this.searchResult = response));
    console.dir(this.searchResult);
  }

  hideSearch = () => {
    this.searchResult = [];
  }
}
