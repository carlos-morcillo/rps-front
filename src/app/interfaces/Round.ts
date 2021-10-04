export interface Round {
	gameId: string;
	roundNumber: number;
	userActionCode: string;
	machineActionCode: string;
	winnerUUID: string;
	createdAt: string;
	resultCode: 'VICTORY' | 'DEFEAT' | 'TIE'
}