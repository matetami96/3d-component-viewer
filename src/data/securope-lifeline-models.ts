type ThreeDModel = {
	name: string;
	url: string;
	position: [number, number, number];
	scale?: [number, number, number];
	rotation?: [number, number, number];
	color?: string;
};

export const fullModel: ThreeDModel = {
	name: "wire-rope",
	url: "assets/securope-lifeline/full-model.stl",
	position: [0, 0, 0],
	scale: [5, 5, 5],
	rotation: [0, 0, 0],
	color: "grey",
};

export const securopeLifelineModels: ThreeDModel[] = [
	{
		name: "wire-rope1",
		url: "assets/securope-lifeline/Purge Line.stl",
		position: [0, 0, 24],
		scale: [5, 5, 5],
		rotation: [0, 90, 0],
		color: "grey",
	},
	{
		name: "wire-rope2",
		url: "assets/securope-lifeline/Purge Line.stl",
		position: [10, 0, 29],
		scale: [5, 5, 5],
		rotation: [0, 0.42, 0],
		color: "grey",
	},
	{
		name: "curve",
		url: "assets/securope-lifeline/RHF504 Courbe au sol.stl",
		position: [-11, 26, 1],
		scale: [0.05, 0.05, 0.05],
		rotation: [0, 2, 0],
		color: "grey",
	},
	{
		name: "line-tensioner",
		url: "assets/securope-lifeline/LDV137 Tendeur de ligne.stl",
		position: [-164.5, 26, -350],
		scale: [0.2, 0.2, 0.2],
		rotation: [0, -1.1, 0],
		color: "grey",
	},
	{
		name: "end-anchor1",
		url: "assets/securope-lifeline/LDV002 Ancre terminale 2012.stl",
		position: [-182.3, 6, -340],
		scale: [0.2, 0.2, 0.2],
		rotation: [4.68, 0, 2],
		color: "grey",
	},
	{
		name: "crimping-ring-for-junction",
		url: "assets/securope-lifeline/LDV010 Bague pour jonction.stl",
		position: [-132, 26, -240],
		scale: [0.4, 0.4, 0.4],
		rotation: [0, 0.47, 0],
		color: "grey",
	},
	{
		name: "intermediate-anchor1",
		url: "assets/securope-lifeline/LDV043 Ancre Intermédiaire NEO 2015 droit.stl",
		position: [-86.8, 8, -150],
		scale: [0.3, 0.3, 0.4],
		rotation: [0, 0.48, 0],
		color: "grey",
	},
	{
		name: "captive-glider",
		url: "assets/securope-lifeline/LDV060 Coulisseau captif.stl",
		position: [-60, 26, -98],
		scale: [0.3, 0.3, 0.4],
		rotation: [0, -2.7, 2.3],
		color: "grey",
	},
	{
		name: "glider",
		url: "assets/securope-lifeline/LDV001 Coulisseau 2015 avec mousqueton.stl",
		position: [-40, 26, -56],
		scale: [0.3, 0.3, 0.4],
		rotation: [0, -2.7, 2.3],
		color: "grey",
	},
	{
		name: "intermediate-anchor2",
		url: "assets/securope-lifeline/LDV043 Ancre Intermédiaire NEO 2015 droit.stl",
		position: [-20, 8, -17],
		scale: [0.3, 0.3, 0.4],
		rotation: [-0.01, 0.46, 0],
		color: "grey",
	},
	{
		name: "intermediate-anchor3",
		url: "assets/securope-lifeline/LDV043 Ancre Intermédiaire NEO 2015 droit.stl",
		position: [62, 8.5, 8],
		scale: [0.3, 0.3, 0.4],
		rotation: [0, -1.14, 0.1],
		color: "grey",
	},
	{
		name: "turnbuckle",
		url: "assets/securope-lifeline/LDV138 Tendeur en ligne.stl",
		position: [200, 26, -56],
		scale: [0.35, 0.35, 0.35],
		rotation: [0, 1.99, 0],
		color: "grey",
	},
	{
		name: "end-anchor2",
		url: "assets/securope-lifeline/LDV002 Ancre terminale 2012.stl",
		position: [326, 6, -111],
		scale: [0.2, 0.2, 0.2],
		rotation: [4.7, 0, 0.4],
		color: "grey",
	},
	{
		name: "spring",
		url: "assets/securope-lifeline/spring.stl",
		position: [300, -38, -83],
		scale: [0.35, 0.35, 0.35],
		rotation: [0, 3.56, 0],
		color: "grey",
	},
	{
		name: "energy-absorber",
		url: "assets/securope-lifeline/LDV032 Absorbeur dénergie avec ressort.stl",
		position: [364, 26, -128.5],
		scale: [0.09, 0.09, 0.09],
		rotation: [0, 3.56, 0],
		color: "grey",
	},
	{
		name: "crimping-ring-100-mm",
		url: "assets/securope-lifeline/LDV008 Bague de sertissage.stl",
		position: [390, 26, -140],
		scale: [0.3, 0.3, 0.2],
		rotation: [0, 1.99, 0],
		color: "grey",
	},
];
