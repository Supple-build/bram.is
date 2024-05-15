import {
	BsBriefcase,
	BsEasel,
	BsFilePerson,
	BsFileRichtext,
	BsFiletypeDoc,
	BsGear,
	BsHouse,
	BsListColumnsReverse,
	BsListStars,
	BsVinyl,
	BsVinylFill,
} from 'react-icons/bs'

import {getFolder} from './utilities/getFolder'
import {getTranslatedSingleton} from './utilities/getTranslatedSingleton'
import {getDocumentList} from './utilities/getDocumentList'
import {getTranslatedDocumentList} from './utilities/getTranslatedDocumentList'
import {getSingleton} from './utilities/getSingleton'

export default (S: any) =>
	S.list()
		.title('Content')
		.items([
			getFolder(S, {
				title: 'Pagina’s',
				icon: BsFileRichtext,
				items: [
					getTranslatedSingleton(S, {
						title: 'HomePage',
						type: 'page-home',
						icon: BsHouse,
					}),
					getTranslatedSingleton(S, {
						title: 'Curriculum Vitae',
						type: 'page-cv',
						icon: BsListStars,
					}),
					getSingleton(S, {
						title: 'Discography',
						type: 'page-discography',
						icon: BsVinyl,
					}),
					getDocumentList(S, {
						title: 'Record',
						type: 'page-record',
						icon: BsVinylFill,
					}),
				],
			}),

			getFolder(S, {
				title: 'Documents',
				icon: BsFiletypeDoc,
				items: [
					getTranslatedDocumentList(S, {
						title: 'Experience',
						type: 'experience',
						icon: BsListColumnsReverse,
					}),
					getDocumentList(S, {
						title: 'Skills',
						type: 'skills',
						icon: BsListColumnsReverse,
					}),
					getTranslatedDocumentList(S, {
						title: 'Education',
						type: 'education',
						icon: BsEasel,
					}),
					getTranslatedDocumentList(S, {
						title: 'Employment Type',
						type: 'employmentType',
						icon: BsBriefcase,
					}),
				],
			}),

			S.divider(),

			getTranslatedSingleton(S, {
				title: 'Settings',
				type: 'settings',
				icon: BsGear,
			}),

			getSingleton(S, {
				title: 'Personal',
				type: 'personal',
				icon: BsFilePerson,
			}),
		])
