import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable()

export class CategoriesService{

	constructor(private http : HttpClient){

	}

	getCategoriesData(){
		//console.log("Frm");
		return this.http.get('https://exploreworld-2711e.firebaseio.com/.json');
	}

	getCategoryListDate(id){
		let filteredresponseData;
		return this.http.get('https://exploreworld-2711e.firebaseio.com/.json').pipe(
			//filter(responseData => responseData == id),
			map(responseData => {
				if(Array.isArray(responseData)){
					filteredresponseData = responseData.filter(
						data => data.cid == id
					);
				}
				//console.log(filteredresponseData);
				return filteredresponseData[0].categorylist;
			},
          		error => error)
		);
	}
}