import {defineType, defineField} from 'sanity'

export default defineType({
	title: 'Experience',
	name: 'experience',
	type: 'document',
	initialValue: {
		language: 'en',
	},
	fields: [
		defineField({
			name: 'language',
			type: 'string',
			readOnly: true,
			hidden: true,
		}),

		defineField({
			title: 'Title',
			name: 'title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),

		defineField({
			title: 'Role',
			name: 'role',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),

		defineField({
			title: 'Employment type',
			name: 'employmentType',
			type: 'string',
			validation: (Rule) => Rule.required(),
			options: {
				list: [
					'Full-time',
					'Part-time',
					'Permanent',
					'Self-employed',
					'Freelance',
					'Contract',
					'Internship',
					'Apprenticeship',
				],
			},
		}),

		defineField({
			title: 'URL',
			name: 'url',
			type: 'url',
		}),

		defineField({
			title: 'Image',
			name: 'image',
			description: '1440x900',
			type: 'image',
		}),

		defineField({
			title: 'Start date',
			name: 'dateStart',
			type: 'date',
			validation: (Rule) => Rule.required(),
		}),

		defineField({
			title: 'End date',
			name: 'dateEnd',
			type: 'date',
		}),

		defineField({
			title: 'Content',
			name: 'content',
			type: 'customBlock',
		}),
	],
})
