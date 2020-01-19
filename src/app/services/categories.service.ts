import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable()

export class CategoriesService{
	filteredresponseData;
	constructor(private http : HttpClient){

	}

	getCategoriesData(){
		//console.log("Frm");
		return this.http.get('https://exploreworld-2711e.firebaseio.com/.json');
	}

	getCategoryListData(cid){
		
		return this.http.get('https://exploreworld-2711e.firebaseio.com/.json').pipe(
			//filter(responseData => responseData == id),
			map(responseData => {
				if(Array.isArray(responseData)){
					this.filteredresponseData = responseData.filter(
						data => data.cid == cid
					);
				}
				//console.log(filteredresponseData);
				return this.filteredresponseData[0].categorylist;
			},
          		error => error)
		);
	}
}