import { Action } from "./Action";

export interface Settings {
	states: State[];
	actions: Action[];
	modes: Mode[];
}

export interface Mode {
	code: string;
	name: string;
	allowedActionCodes: string[];
}

export interface State {
	code: string;
	name: string;
}