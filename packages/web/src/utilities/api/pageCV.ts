import { pageQuery, type PageProps } from './queries';
import { getSanityData } from './sanity';

export interface PageCVProps extends PageProps {
	title: string;
}

export const projectionPageCV = `{
	title,
}`;

export async function getDataPageCV(): Promise<PageCVProps | PageCVProps[]> {
	const query = pageQuery({
		type: 'page-cv',
		projection: projectionPageCV,
		multiple: true,
	});
	return await getSanityData({ query });
}
