// Pages
import homepagePage from './pages/homepage'
import cvPage from './pages/cv'
import discographyPage from './pages/discography'
import recordPage from './pages/record'

// Documents
import settingsDocument from './documents/settings'
import personalDocument from './documents/personal'
import employmentTypeDocument from './documents/employmentType'
import experienceDocument from './documents/experience'
import skillsDocument from './documents/skills'
import educationDocument from './documents/education'

// Objects
import metaDataObject from './objects/metaData'
import pageSelectorObject from './objects/pageSelector'
import customBlockObject from './objects/customBlock'
import linkObject from './objects/link'

export const schemaTypes = [
	// Pages
	homepagePage,
	cvPage,
	discographyPage,
	recordPage,
	// Documents
	settingsDocument,
	personalDocument,
	employmentTypeDocument,
	experienceDocument,
	skillsDocument,
	educationDocument,
	// Objects
	metaDataObject,
	pageSelectorObject,
	customBlockObject,
	linkObject,
]
