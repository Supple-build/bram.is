import { PortableText } from 'astro-portabletext';
type PortableTextProps = Parameters<typeof PortableText>[0];

export interface CustomBlockProps {
	value: PortableTextProps['value'];
	components?: PortableTextProps['components'];
}

export const customBlockQuery = ({ name }: { name: string }): string =>
	`${name}[]{
		...,
		markDefs[]{
			...,
			_type == "link" => @{
				href,
			},
		},
	}`;
