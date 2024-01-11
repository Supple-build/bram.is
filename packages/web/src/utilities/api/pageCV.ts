import { getAdditionalPageData } from './helpers/getAdditionalPageData';
import {
	pageQuery,
	type PageProps,
	experienceQuery,
	type ExperienceProps,
	educationQuery,
	type EducationProps,
} from './queries';
import { getSanityData } from './sanity';

export interface PageCVProps extends PageProps {
	title: string;
	experience: {
		title: string;
		items: ExperienceProps[];
	};
	education?: {
		title?: string;
		items?: EducationProps[];
	};
}

export const projectionPageCV = `{
	title,
	experience{
		title,
		items[]->${experienceQuery({ name: '' })},
	},
	education{
		title,
		items[]->${educationQuery({ name: '' })},
	},
}`;

export async function getDataPageCV(): Promise<PageCVProps | PageCVProps[]> {
	const query = pageQuery({
		type: 'page-cv',
		projection: projectionPageCV,
		multiple: true,
	});
	const data = await getSanityData({ query });

	return getAdditionalPageData(data);
}
