import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Game } from '../interfaces/Game';
import { Round } from '../interfaces/Round';
import { Settings } from '../interfaces/Settings';
import { AuthService } from './auth.service';

@Injectable({
	providedIn: 'root'
})
export class GamesService {

	settings: Settings;

	constructor(
		private _httpClient: HttpClient,
		private _authSvc: AuthService
	) { }

	async fetchSettings(): Promise<any> {
		this.settings = await this._httpClient.get(environment.origin + 'settings').toPromise() as Settings;
	}

	get(): Observable<Game[]> {
		return this._httpClient.post(environment.origin + 'games/' + this._authSvc.uuid, {}) as Observable<Game[]>;
	}

	find(id: string): Observable<Game> {
		return this._httpClient.get(environment.origin + 'games/' + this._authSvc.uuid + '/' + id, {}) as Observable<Game>;
	}

	create(modeCode: string, numberOfRounds: number): Observable<Game> {
		return this._httpClient.put(environment.origin + 'games/' + this._authSvc.uuid + '/' + modeCode + '/' + numberOfRounds, {}) as Observable<Game>;
	}

	delete(id?: string): Observable<boolean> {
		let endpoint = environment.origin + 'games/' + this._authSvc.uuid;
		if (id) {
			endpoint += '/' + id;
		}
		return this._httpClient.delete(endpoint) as Observable<boolean>;
	}

	saveRound(id: string, params: Partial<Round>) {
		return this._httpClient.put(environment.origin + 'games/' + this._authSvc.uuid + '/' + id + '/rounds', params) as Observable<Game>;
	}

}
