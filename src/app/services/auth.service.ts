import { Injectable } from '@angular/core';
import { Device } from '@ionic-native/device/ngx';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	uuid: string = this._device.version ?? '5b4c59fb-6ec4-4bc7-837d-fb2a4ffb78bb';

	constructor(private _device: Device) { }
}
