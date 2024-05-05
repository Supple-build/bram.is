export type Swatch = {
	name: string;
	color: string;
	group?: string;
	accent?: string;
};

export const colors = [
	{
		name: 'dark',
		color: '#12355b',
		accent: 'light',
	},
	{
		name: 'mid',
		color: '#ececec',
	},
	{
		name: 'light',
		color: '#fcfcfc',
	},
	{
		name: 'primary',
		color: '#ee4266',
		group: 'brand',
	},
	{
		name: 'primary-glare',
		color: '#ee9daf',
		group: 'brand',
	},
	{
		name: 'secondary',
		color: '#3ddc97',
		group: 'brand',
	},
	{
		name: 'tertiary',
		color: '#161f2b',
		group: 'brand',
		accent: 'light',
	},
	{
		name: 'quaternary',
		color: '#fde74c',
		group: 'brand',
	},
	{
		name: 'quinary',
		color: '#5bc0eb',
		group: 'brand',
	},
	{
		name: 'quinary-shade',
		color: '#3e809c',
		group: 'brand',
		accent: 'light',
	},
	{
		name: 'background',
		color: '#fcfcfc',
	},
	{
		name: 'foreground',
		color: '#12355b',
		accent: 'background',
	},
	{
		name: 'background',
		color: '#ececec',
		group: 'slate',
	},
	{
		name: 'foreground',
		color: '#12355b',
		group: 'slate',
		accent: 'slate-background',
	},
] as Swatch[];
