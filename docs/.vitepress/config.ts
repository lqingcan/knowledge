import { defineConfig } from 'vitepress'
import { nav, sidebar } from './realConf'

export default defineConfig({
	title: '考公知识库',
	description: '涵盖行测各科的知识点',

	themeConfig: {
		nav: nav, // 把定义的nav给替换进来
		sidebar: sidebar,
		outlineTitle: '目录',
		outline: 'deep',
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }, // 右上角github图标
		],
		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © 2019-present Evan You',
		},
	},
	lastUpdated: true,
})
