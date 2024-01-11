import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {documentInternationalization} from '@sanity/document-internationalization'
import {schemaTypes} from './schemas'
import deskStructure from './deskStructure'
import {studioDataSet, studioProjectID} from './environment'
import {languages} from './languages'

export default defineConfig({
	name: 'default',
	title: 'bram.is homepage',

	projectId: studioProjectID,
	dataset: studioDataSet,

	plugins: [
		deskTool({
			structure: deskStructure,
		}),
		visionTool(),
		documentInternationalization({
			// Required configuration
			supportedLanguages: languages,
			schemaTypes: [
				'settings',
				'experience',
				'education',
				'employmentType',
				'page-home',
				'page-cv',
			],
			weakReferences: true,
		}),
	],

	schema: {
		types: schemaTypes,
	},
})
