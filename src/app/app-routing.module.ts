import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryDetailsComponent } from './components/categories/category-details/category-details.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { PlaceDetailsComponent } from './components/categories/category-details/place-details/place-details.component';


const routes: Routes = [
	{
		path :'', component : CategoriesComponent
	},
	{
		path :'explore/:category/:cid', component : CategoryDetailsComponent,
			children : [
			{
				path : ':clid', component : PlaceDetailsComponent
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
