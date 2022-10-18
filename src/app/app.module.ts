import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgAisModule } from 'angular-instantsearch';

import { AppComponent } from './app.component';

import { OnVisibleDirective } from './on-visible.directive';

import { InfiniteScrollComponent } from './infinite-scroll/infiniteScroll';
import { SearchComponent } from './search/search.component';

const appRoutes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'search/:category', component: SearchComponent },
  { path: 'scroll', component: InfiniteScrollComponent },
];
@NgModule({
  declarations: [
    SearchComponent,
    AppComponent,
    InfiniteScrollComponent,
    OnVisibleDirective,
  ],
  imports: [
    NgAisModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
