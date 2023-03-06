export class Satellite {

	name: string;
	type: string;
	launchDate: string;
	orbitType: string;
	operational: boolean;

	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
		this.type = type;
		this.launchDate = launchDate;
		this.orbitType = orbitType;
		this.operational = operational;
   }
	// Ref for Angular Part 3: In OL CSS for Warning Class, if the type is Space Debris, assign it to the type class. Can be found in Orbit List Css File

	isSpaceDebris(): boolean {
		return this.type === "Space Debris";
   }

}

// TODO 3a: fix isSpaceDebris check
