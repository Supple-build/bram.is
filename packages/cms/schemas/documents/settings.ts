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
		{
			name: 'personal',
			title: 'Personal information',
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
					title: 'Name',
					name: 'name',
					type: 'string',
					description: 'eg. my `name` is',
					validation: (Rule) => Rule.required(),
				}),

				defineField({
					title: 'Date of birth',
					name: 'dateOfBirth',
					type: 'string',
					validation: (Rule) => Rule.required(),
				}),

				defineField({
					title: 'Location',
					name: 'location',
					type: 'string',
					validation: (Rule) => Rule.required(),
				}),

				defineField({
					title: 'Present',
					name: 'present',
					type: 'string',
					description: 'eg. "January 2024 - Present"',
					validation: (Rule) => Rule.required(),
				}),
			],
		}),

		defineField({
			title: 'Personal information',
			name: 'personal',
			type: 'object',
			group: 'personal',
			fields: [
				defineField({
					title: 'First name',
					name: 'givenName',
					type: 'string',
					validation: (Rule) => Rule.required(),
				}),

				defineField({
					title: 'Last name',
					name: 'familyName',
					type: 'string',
					validation: (Rule) => Rule.required(),
				}),

				defineField({
					title: 'Birth Date',
					name: 'birthDate',
					type: 'date',
					validation: (Rule) => Rule.required(),
				}),

				defineField({
					title: 'Job title',
					name: 'jobTitle',
					type: 'string',
					validation: (Rule) => Rule.required(),
				}),

				defineField({
					title: 'City',
					name: 'city',
					type: 'string',
					validation: (Rule) => Rule.required(),
				}),

				defineField({
					title: 'Country',
					name: 'country',
					type: 'string',
					validation: (Rule) => Rule.required(),
				}),

				defineField({
					title: 'Links',
					name: 'links',
					type: 'array',
					of: [
						{
							type: 'link',
						},
					],
					validation: (Rule) => Rule.required(),
				}),
			],
		}),
	],
})
