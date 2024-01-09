import { customBlockQuery, type CustomBlockProps, type ImageProps } from '.';

export type ExperienceProps = {
	title: string;
	role: string;
	employmentType: string;
	url?: string;
	image?: ImageProps;
	dateStart: string;
	dateEnd?: string;
	content?: CustomBlockProps['value'];
};

export function experienceQuery({
	name = 'experience',
}: {
	name?: string;
}): string {
	return `${name}{
		title,
		role,
		"employmentType": employmentType->title,
		url,
		image,
		dateStart,
		dateEnd,
		${customBlockQuery({ name: 'content' })}
	}`;
}
