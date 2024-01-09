import {
	pageQuery,
	type PageProps,
	experienceQuery,
	type ExperienceProps,
} from './queries';
import { getSanityData } from './sanity';

export interface PageCVProps extends PageProps {
	title: string;
	experience: ExperienceProps[];
}

export const projectionPageCV = `{
	title,
	experience[]->${experienceQuery({ name: '' })},
}`;

export async function getDataPageCV(): Promise<PageCVProps | PageCVProps[]> {
	const query = pageQuery({
		type: 'page-cv',
		projection: projectionPageCV,
		multiple: true,
	});
	return await getSanityData({ query });
}
