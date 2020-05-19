import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, startWith } from 'rxjs/operators';

const CACHE_KEY = 'RepoCacheKey';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  repos;

  constructor(private http: HttpClient) {
    const path = 'https://api.github.com/search/repositories?q=angular';
    this.repos = this.http.get<any>(path).pipe(map((data) => data.items));

    this.repos.subscribe((next) => {
      localStorage[CACHE_KEY] = JSON.stringify(next);
    });

    this.repos = this.repos.pipe(
      startWith(JSON.parse(localStorage[CACHE_KEY] || '[]'))
    );
  }
}
