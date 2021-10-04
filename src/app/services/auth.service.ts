import { Injectable } from '@angular/core';
import { Device } from '@ionic-native/device/ngx';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	get uuid(): string {
		return this._device.uuid ?? this.getOrCreateUUID();
	}

	constructor(private _device: Device) { }

	getOrCreateUUID() {
		let uuid = localStorage.getItem('uuid');
		if (!uuid) {
			uuid = uuidv4();
			localStorage.setItem('uuid', uuid);
		}
		return uuid;
	}
}
