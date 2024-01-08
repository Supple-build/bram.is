import { localeCollection } from 'src/utilities/locale';
import type { PageProps } from '../queries';
import { getPageFolder } from './getParentPages';

export const getStaticPathsFromData = ({
	data,
	fragment,
}: {
	data: PageProps | PageProps[];
	fragment?: string;
}) =>
	Array.isArray(data)
		? data
				.filter(
					(page) =>
						localeCollection.filter(
							(locale) => locale.id === page.localeID || page.localeID === null,
						).length,
				)
				.map((page) => ({
					params: {
						locale: page.localeID || localeCollection[0].id,
						slug: getPageFolder(page),
						...(fragment ? { [fragment]: page.slug } : {}),
					},
					props: {
						pageData: page,
						pagesData: data,
					},
				}))
				.flat(Infinity)
		: data?.slug
		? [
				{
					params: {
						locale: data.localeID || localeCollection[0].id,
						slug: getPageFolder(data),
						...(fragment ? { [fragment]: data.slug } : {}),
					},
					props: {
						pageData: data,
					},
				},
		  ]
		: [];
