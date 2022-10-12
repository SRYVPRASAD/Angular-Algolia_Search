import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgAisModule } from 'angular-instantsearch';

import { AppComponent } from './app.component';
import { OnVisibleDirective } from './on-visible.directive';
import { SearchComponent } from './search/search.component';
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'search/:category', component: SearchComponent },
  { path: 'infinete-scroll', component: AppComponent },
];
@NgModule({
  declarations: [SearchComponent, AppComponent, OnVisibleDirective],
  imports: [
    NgAisModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
