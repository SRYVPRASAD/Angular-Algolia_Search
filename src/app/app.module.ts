import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgAisModule } from 'angular-instantsearch';

import { AppComponent } from './app.component';

import { OnVisibleDirective } from './on-visible.directive';
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
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfiniteScrollComponent,
    OnVisibleDirective,
    SearchComponent,
  ],
  imports: [
    NgAisModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
