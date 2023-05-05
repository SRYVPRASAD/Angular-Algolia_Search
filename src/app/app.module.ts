import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgAisModule } from 'angular-instantsearch';

import { AppComponent } from './app.component';

import { OnVisibleDirective, CardComponent } from './shared';
import { HomeComponent } from './home/home.component';
import { InfiniteScrollComponent } from './infinite-scroll/infiniteScroll';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'search/:category', component: SearchComponent },
  { path: 'search', component: SearchComponent },

  { path: 'scroll', component: InfiniteScrollComponent },
  { path: '**', redirectTo: '', component: HomeComponent },
];

const components = [
  AppComponent,
  HomeComponent,
  InfiniteScrollComponent,
  SearchComponent,
];

const sharedComponents = [CardComponent, OnVisibleDirective];

@NgModule({
  declarations: [...components, ...sharedComponents],
  imports: [BrowserModule, NgAisModule.forRoot(), RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
