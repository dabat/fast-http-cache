import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  map,
  startWith,
  shareReplay,
  distinctUntilChanged,
} from 'rxjs/operators';
import { Observable } from 'rxjs';

const CACHE_KEY = 'RepoCacheKey';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  repos$: Observable<any>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const path = 'https://api.github.com/search/repositories?q=angular';
    this.repos$ = this.http.get<any>(path).pipe(
      startWith(JSON.parse(localStorage[CACHE_KEY] || '[]')),
      map((data) => {
        localStorage[CACHE_KEY] = JSON.stringify(data);
        return data.items;
      }),
      distinctUntilChanged(),
      shareReplay()
    );
  }
}
