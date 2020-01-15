import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class CategoriesService{

	constructor(private http : HttpClient){

	}

	getCategoriesData(){
		return this.http.get('https://exploreworld-2711e.firebaseio.com/.json');
	}
}