import { HttpClientModule } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { Device } from '@ionic-native/device/ngx';
import { Game } from '../interfaces/Game';
import { AuthService } from './auth.service';
import { GamesService } from './games.service';


describe('GamesService', () => {
	let service: GamesService;
	let game: Game;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientModule],
			providers: [AuthService, Device]
		});
		service = TestBed.inject(GamesService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should create a game', async () => {
		console.log('should create a game');
		game = await service.create('TRADITIONAL', 3).toPromise();
		expect(game).toBeTruthy();
		expect(game.numberOfRounds).toEqual(3);
		expect(game.modeCode).toEqual('TRADITIONAL');
		expect(game.rounds).toEqual(null);
	});

	it('should create a round', waitForAsync(async () => {
		console.log('should create a round');
		game = await service.saveRound(game.id, {
			userActionCode: "ROCK",
			machineActionCode: "PAPER",
			resultCode: "DEFEAT"
		}).toPromise();
		expect(game).toBeTruthy();
		expect(game.roundNumber).toEqual(2);
		expect(game.rounds.length).toEqual(1);
	}));

	it('should create a second round', waitForAsync(async () => {
		console.log('should create a second round');
		game = await service.saveRound(game.id, {
			userActionCode: "SCISSORS",
			machineActionCode: "PAPER",
			resultCode: "VICTORY"
		}).toPromise();
		expect(game).toBeTruthy();
		expect(game.roundNumber).toEqual(3);
		expect(game.rounds.length).toEqual(2);
	}));

	it('should create a second round', waitForAsync(async () => {
		console.log('should create a second round');
		game = await service.saveRound(game.id, {
			userActionCode: "SCISSORS",
			machineActionCode: "PAPER",
			resultCode: "VICTORY"
		}).toPromise();
		expect(game).toBeTruthy();
		expect(game.roundNumber).toEqual(3);
		expect(game.rounds.length).toEqual(3);
	}));
});
