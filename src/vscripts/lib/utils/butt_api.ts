
// extend PlayerList

export class PlayerList {
	GetAllPlayers(): Array<CDOTAPlayer | undefined> {
		let out: Array<CDOTAPlayer | undefined> = [];
		for (let p = 0; p <= DOTA_MAX_PLAYERS; p++) {
			if (PlayerResource.IsValidPlayer(p)) {
				out.push(PlayerResource.GetPlayer(p));
			} 
		}
		return out
	}
	GetValidTeamPlayers(): Array<CDOTAPlayer | undefined> {
		let out: Array<CDOTAPlayer | undefined> = [];
		for (let p = 0; p <= DOTA_MAX_PLAYERS; p++) {
			if (PlayerResource.IsValidTeamPlayer(p)) {
				out.push(PlayerResource.GetPlayer(p));
			} 
		}
		return out
	}
	GetPlayersInTeam(teamID: DotaTeam): Array<CDOTAPlayer | undefined> {
		let out: Array<CDOTAPlayer | undefined> = [];
		for (let p = 0; p <= DOTA_MAX_PLAYERS; p++) {
			if (PlayerResource.IsValidPlayer(p) && PlayerResource.GetTeam(p) === teamID) {
				out.push(PlayerResource.GetPlayer(p));
			} 
		}
		return out
	}
	GetFirstPlayers(): Array<CDOTAPlayer | undefined> {
		let out: Array<CDOTAPlayer | undefined> = [];
		for (let p = 0; p <= DOTA_MAX_PLAYERS; p++) {
			let team: DotaTeam = PlayerResource.GetTeam(p as PlayerID);
			if (!out[team]) {
				out[team] = PlayerResource.GetPlayer(p as PlayerID);
			}
		}
		return out
	}
}

// extend PlayerResource

export class PlayerResourceButt {
	GetFriendlyPlayers(playerID: PlayerID): Array<CDOTAPlayer | undefined> {
		let teamID: DotaTeam = PlayerResource.GetTeam(playerID);
		let out: Array<CDOTAPlayer | undefined> = [];
		for (let p = 0; p <= DOTA_MAX_PLAYERS; p++) {
			if (PlayerResource.IsValidPlayer(p) && PlayerResource.GetTeam(p) === teamID) {
				out.push(PlayerResource.GetPlayer(p));
			} 
		}
		return out
	}

	GetFriendlyHeroes(playerID: PlayerID): Array<CDOTA_BaseNPC_Hero> {
		let teamID: DotaTeam = PlayerResource.GetTeam(playerID);
		let out: Array<CDOTA_BaseNPC_Hero> = HeroList.GetAllHeroes();
		for (let i = 0; i < out.length; i++) {
			let hero = out[i];
			if (hero.GetTeam() != teamID) {
				out.splice(i, 1);
			}
		}
		return out;
	}

	GetMainFriendlyHeroes(playerID: PlayerID): Array<CDOTA_BaseNPC_Hero | undefined>  {
		let teamID: DotaTeam = PlayerResource.GetTeam(playerID);
		let out: Array<CDOTA_BaseNPC_Hero | undefined> = HeroList.GetAllHeroes();
		for (let p = 0; p <= DOTA_MAX_PLAYERS; p++) {
			if (PlayerResource.GetSelectedHeroEntity(p as PlayerID) && PlayerResource.GetTeam(p as PlayerID) === teamID) {
				out.push(PlayerResource.GetSelectedHeroEntity(p as PlayerID));
			}
		}
		return out;
	}
}

// extend HeroList

export class HeroListButt {
	GetHeroesInTeam(teamID: DotaTeam) {
		let out: Array<CDOTA_BaseNPC_Hero> = HeroList.GetAllHeroes();
		for (let i = 0; i < out.length; i++) {
			let hero = out[i];
			if (hero.GetTeam() != teamID) {
				out.splice(i, 1);
			}
		}	
		return out;
	}
}

export class Butt {
	Roshan() { return undefined }
	AllOutposts() { return undefined }
	UnProtectAllOutposts() { return undefined }
	ProtectAllOutposts(duration: number) { return undefined }
	OldSideshopLocations() { return undefined }
	CreateSideShop(location: Vector) { return undefined }
}
