import { Round } from "./Round";

export interface Game {
	id: string;
	roundNumber: number;
	numberOrRounds: number;
	modeCode: string;
	userUUID: string;
	createdAt: string;
	rounds: Round[];
	stateCode: string;
	winnerUUID?: string;
	resultCode?: string;
}
