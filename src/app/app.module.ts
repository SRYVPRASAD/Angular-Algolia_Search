import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgAisModule } from 'angular-instantsearch';

import { AppComponent } from './app.component';

import { OnVisibleDirective } from './on-visible.directive';
import { HomeComponent } from './home/home.component';
import { InfiniteScrollComponent } from './infinite-scroll/infiniteScroll';
import { SearchComponent } from './search/search.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'scroll', component: InfiniteScrollComponent },
  { path: '**', component: HomeComponent },
];
@NgModule({
  declarations: [
    SearchComponent,
    AppComponent,
    HomeComponent,
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
