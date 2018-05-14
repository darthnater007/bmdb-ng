import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { Actor } from '../model/actor';

const url = 'http://localhost:8080/Actors/';

@Injectable()
export class ActorService {
	
//	login(uName, pwd): Observable<Actor[]> {
//			return this.http.get(url+"Authenticate?uname="+uName+"&pwd="+pwd) as Observable<Actor[]>;
//	}

	list(): Observable<Actor[]> {
		return this.http.get(url + 'List') as Observable<Actor[]>;
	}

	create(actor: Actor): Observable<any>{
		console.log("actorsvc.create...");
		return this.http.post(url + "Add", actor) as Observable<any>;
	}

	get(id): Observable<Actor[]> {
		return this.http.get(url+"Get?id="+id) as Observable<Actor[]>;
	  }

	remove(id): Observable<any> {
		return this.http.get(url+"Remove?id="+id) as Observable<any>;
	  }

	change(actor: Actor): Observable<any> {
		return this.http.post(url+"Change", actor) as Observable<any>;
	  }
	constructor(private http: HttpClient) { }

}
