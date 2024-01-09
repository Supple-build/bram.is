import {defineType, defineField} from 'sanity'
import {isUniqueSlug} from '../../utilities/isUniqueSlug'
import {filterReference} from '../../utilities/filterReference'

async function isUnique(slug: any, context: any) {
	return await isUniqueSlug({slug, context, type: 'generic-page'})
}

export default defineType({
	title: 'Curriculum Vitae',
	name: 'page-cv',
	type: 'document',
	fieldsets: [
		{
			name: 'urlStructure',
			title: 'URL structure',
		},
	],
	groups: [
		{
			name: 'seo',
			title: 'SEO',
		},
		{
			name: 'urlStructure',
			title: 'URL structure',
		},
	],
	fields: [
		defineField({
			name: 'language',
			type: 'string',
			readOnly: true,
			hidden: true,
		}),

		defineField({
			name: 'metaData',
			type: 'metaData',
			group: 'seo',
		}),

		defineField({
			title: 'Title',
			name: 'title',
			type: 'string',
		}),

		defineField({
			title: 'Experience',
			name: 'experience',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{type: 'experience'}],
					options: {
						filter: filterReference,
					},
				},
			],
		}),

		defineField({
			title: 'Parent page',
			description: 'Where in the hierachy does this page belong?',
			name: 'parentPage',
			type: 'pageSelector',
			fieldset: 'urlStructure',
			group: 'urlStructure',
		}),

		defineField({
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'metaData.title',
				isUnique: isUnique,
			},
			fieldset: 'urlStructure',
			group: 'urlStructure',
			validation: (Rule) => Rule.required(),
		}),
	],
})
