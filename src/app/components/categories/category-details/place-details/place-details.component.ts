import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
	selector : 'app-place-details',
	templateUrl :'./place-details.component.html'
})

export class PlaceDetailsComponent {
 
 constructor(private activatedRoute : ActivatedRoute){}

 ngOnInit(){
 	this.activatedRoute.params
 	.subscribe((params : Params) => {
 		console.log(params['clid']);
 	});
 }
}
