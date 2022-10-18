import { Component } from '@angular/core';
import algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch(
  'latency',
  '6be0576ff61c053d5f9a3225e2a90f76'
);

@Component({
  selector: 'infinite-scroll',
  template: `
	<div class="container">
  <ais-instantsearch [config]="config">
    <div class="search-panel">
      <div class="search-panel__results">
        <div class="searchbox">
          <ais-search-box placeholder=""></ais-search-box>
        </div>

        <ais-infinite-hits>
          <ng-template
            let-hits="hits"
            let-results="results"
            let-refine="showMore"
          >
            <div *ngIf="hits.length === 0">No results found.</div>

            <ol class="ais-Hits-list">
              <li class="ais-Hits-item" *ngFor="let hit of hits">
                <ais-highlight attribute="name" [hit]="hit"></ais-highlight>
              </li>
              <div (onVisible)="refine()"></div>
            </ol>
            <ol class="ais-Hits-list">
              <li class="ais-Hits-item" *ngFor="let result of results">
                <ais-highlight attribute="name" [hit]="result"></ais-highlight>
              </li>
              <div (onVisible)="refine()"></div>
            </ol>
          </ng-template>
        </ais-infinite-hits>
      </div>
    </div>
  </ais-instantsearch>
</div> 
	`,
  styleUrls: ['../app.component.css'],
})
export class InfiniteScrollComponent {
  config = {
    indexName: 'instant_search',
    searchClient,
  };
}
