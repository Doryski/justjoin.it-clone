import React from 'react'
import {
	Mic,
	PictureAsPdfOutlined,
	RssFeed,
	Equalizer,
	Facebook,
	People,
	Work,
	EmojiPeople,
} from '@material-ui/icons'

const employerPanelIcon = <Work />
const justJoinItIcon = <Facebook />
const aboutUsIcon = <People />
const eventIcon = <Mic />
const recruitmentIcon = <EmojiPeople />
const itIndexIcon = <Equalizer />
const rssFeedIcon = <RssFeed />
const pdfIcon = <PictureAsPdfOutlined />

export default [
	{
		title: 'Employer Panel',
		icon: employerPanelIcon,
	},
	{
		title: 'JustJoinIT',
		icon: justJoinItIcon,
	},
	{
		title: 'About us',
		icon: aboutUsIcon,
	},
	{
		title: 'Event',
		icon: eventIcon,
	},
	{
		title: 'Recruitment',
		icon: recruitmentIcon,
	},
	{
		title: 'IT Index',
		icon: itIndexIcon,
	},
	{
		title: 'RSS',
		icon: rssFeedIcon,
	},
	{
		title: 'Terms',
		icon: pdfIcon,
	},
	{
		title: 'Policy',
		icon: pdfIcon,
	},
]
