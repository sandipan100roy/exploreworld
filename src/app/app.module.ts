import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CategoriesComponent } from './components/categories/categories.component';
import { CategoriesService } from './services/categories.service';
import { CategoryDetailsComponent } from './components/categories/category-details/category-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
