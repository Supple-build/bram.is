export type Swatch = {
	name: string;
	color: string;
	group?: string;
	accent?: string;
};

export const colors = [
	{
		name: 'ice-chip',
		color: '#f3f6f6',
		group: 'shade',
		accent: 'shade-black-box',
	},

	{
		name: 'black-box',
		color: '#0f282f',
		group: 'shade',
		accent: 'shade-ice-chip',
	},

	{
		name: 'celestial-powder',
		color: '#a3e4fa',
		group: 'brand',
		accent: 'shade-black-box',
	},

	{
		name: 'marshmallow-blue',
		color: '#90d6f9',
		group: 'brand',
		accent: 'shade-black-box',
	},

	{
		name: 'cotton-candy',
		color: '#ffbcd9',
		group: 'brand',
		accent: 'shade-black-box',
	},

	{
		name: 'pink-ciklet',
		color: '#ffa8c5',
		group: 'brand',
		accent: 'shade-black-box',
	},
] as Swatch[];
