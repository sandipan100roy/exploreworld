import { Component } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';

@Component({
	selector : 'categories-component',
	templateUrl : './categories.component.html'
})

export class CategoriesComponent{
	
	categoryList;
	constructor(private categoriesService : CategoriesService){}

	ngOnInit(){
		this.categoriesService.getCategoriesData()
		.subscribe( (data) => {
			this.categoryList = data;
			//console.log(data);
		},
		err => {
			console.log("Error from Server : ",err);
		});
	}
}