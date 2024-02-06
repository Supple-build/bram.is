export type Swatch = {
	name: string;
	color: string;
	group?: string;
	accent?: string;
};

export const colors = [
	{
		name: 'white-mink',
		color: '#efeee9',
		group: 'shade',
		accent: 'shade-coalmine',
	},

	{
		name: 'negroni',
		color: '#eec7a2',
		group: 'shade',
		accent: 'shade-coalmine',
	},

	{
		name: 'coalmine',
		color: '#220033',
		group: 'shade',
		accent: 'shade-white-mink',
	},

	{
		name: 'brainfreeze',
		color: '#00eeff',
		group: 'brand',
		accent: 'shade-coalmine',
	},

	{
		name: 'purple',
		color: '#800080',
		group: 'brand',
		accent: 'shade-white-mink',
	},

	{
		name: 'clairvoyant',
		color: '#480656',
		group: 'brand',
		accent: 'shade-white-mink',
	},
] as Swatch[];
