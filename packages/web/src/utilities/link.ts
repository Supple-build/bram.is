import { localeCollection, type Locale } from './locale';

export const isExternalUrl = (url: string) => {
	return url.includes('//') /*|| url.includes(':')*/;
};

/**
 * Small helper method that prefixes the requested url with a locale.
 */
export const prefixUrlWithlocale = (href: string, locale: Locale) =>
	// check if href aready contains a available locale
	localeCollection.filter(
		(localeTest) =>
			href === localeTest.id || href.startsWith(localeTest.urlPrefix),
	).length === 0 &&
	!isExternalUrl(href) &&
	!href.startsWith('#') &&
	!href.startsWith('tel:') &&
	!href.startsWith('mailto:')
		? `${
				localeCollection[0].id !== locale.id ? locale.urlPrefix : ''
		  }/${href.replace(/^\//, '')}`
		: href;

export const parseLink = (href: string, locale: Locale): string => {
	return prefixUrlWithlocale(href, locale);
};
