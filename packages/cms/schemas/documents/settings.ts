import {defineType, defineField} from 'sanity'

export default defineType({
	title: 'Settings',
	name: 'settings',
	type: 'document',
	groups: [
		{
			name: 'seo',
			title: 'SEO',
		},
		{
			name: 'labels',
			title: 'Generic labels',
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
			title: 'Site URL',
			name: 'baseUrl',
			type: 'string',
			validation: (Rule) => Rule.required(),
			group: 'seo',
		}),

		defineField({
			title: 'Page title suffix',
			name: 'metaTitleSuffix',
			type: 'string',
			validation: (Rule) => Rule.required(),
			group: 'seo',
		}),

		defineField({
			title: 'Social share image',
			name: 'ogImage',
			description: 'Fallback social share image, 1200x632, no SVG',
			type: 'image',
			validation: (Rule) => Rule.required(),
			group: 'seo',
		}),

		defineField({
			title: 'Labels',
			name: 'labels',
			type: 'object',
			group: 'labels',
			fields: [
				defineField({
					title: 'Present',
					name: 'present',
					type: 'string',
					description: 'eg. "January 2024 - Present"',
					validation: (Rule) => Rule.required(),
				}),
			],
		}),
	],
})
