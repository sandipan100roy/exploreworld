import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryDetailsComponent } from './components/categories/category-details/category-details.component';
import { CategoriesComponent } from './components/categories/categories.component';


const routes: Routes = [
	{
		path :'', component : CategoriesComponent
	},
	{
		path :'explore/:category', component : CategoryDetailsComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
