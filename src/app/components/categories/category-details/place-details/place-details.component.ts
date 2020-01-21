import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { CategoriesService } from '../../../../services/categories.service';

@Component({
	selector : 'app-place-details',
	templateUrl :'./place-details.component.html'
})

export class PlaceDetailsComponent {
 
 constructor(private activatedRoute : ActivatedRoute, 
 	private categoriesService :CategoriesService){}
 	subscription : Subscription;
 	placeSelected;
 ngOnInit(){
 	/*this.activatedRoute.params
 		.subscribe((params : Params) => {
 		console.log(params['clid']);
 	});*/

 	this.subscription = this.categoriesService.getselectedCategoryListData()
 	.subscribe( (data) => {
 		//Data from Behavior Subject
 		this.placeSelected = data[0];
 	});
 }

 ngOnDestroy() {
	// unsubscribe to ensure no memory leaks
	this.subscription.unsubscribe();
}

}
