import {
	BsFileRichtext,
	BsFiletypeDoc,
	BsGear,
	BsHouse,
	BsListColumnsReverse,
	BsVinyl,
	BsVinylFill,
} from 'react-icons/bs'

import {getFolder} from './utilities/getFolder'
import {getTranslatedSingleton} from './utilities/getTranslatedSingleton'
import {getDocumentList} from './utilities/getDocumentList'
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
					getDocumentList(S, {
						title: 'Experience',
						type: 'experience',
						icon: BsListColumnsReverse,
					}),
				],
			}),

			S.divider(),

			getTranslatedSingleton(S, {
				title: 'Settings',
				type: 'settings',
				icon: BsGear,
			}),
		])
