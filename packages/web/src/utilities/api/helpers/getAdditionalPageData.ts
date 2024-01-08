import { localeCollection, type Locale } from 'src/utilities/locale';
import type { ParentPageProps } from '../queries';
import { getPageFolder } from './getParentPages';

export interface AlternativeTranslationsProps extends ParentPageProps {
	locale: Locale;
	href: string;
}

const getDataForAlernativeTranslations = (pages: any) =>
	pages.map((page: any) => ({
		...page,
		alternativeTranslations: page.alternativeTranslations
			? page.alternativeTranslations
					.filter((alternative: any) => alternative)
					.map((alternative: any) => ({
						...alternative,
						href: `${
							alternative.subFolderReference
								? `${getPageFolder(alternative)}/`
								: ''
						}${alternative.theme ? `${alternative.theme.slug}/` : ''}${
							alternative.slug || ''
						}`,
						locale: localeCollection.filter(
							(locale) => locale.id === alternative.localeID,
						)[0],
					}))
			: null,
	}));

export const getAdditionalPageData = (pages: any) =>
	getDataForAlernativeTranslations(pages);
