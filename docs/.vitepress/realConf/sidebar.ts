// docs/.vitepress/relaConf/navbar.ts
import { DefaultTheme } from 'vitepress'
export const sidebar: DefaultTheme.Sidebar = {
	// /knowledge/Verbal/表示对这个文件夹下的所有md文件做侧边栏配置
	'/knowledge/Verbal/': [
		// 第一部分
		{
			text: '中心理解',
			items: [
				{
					text: '知识点1',
					link: '/knowledge/Verbal/1',
				},
				{
					text: '知识点2',
					link: '/knowledge/Verbal/2',
				},
			],
		},
		// 第二部分
		{
			text: '成语积累',
			items: [
				{
					text: '知识点3',
					link: '/knowledge/Verbal/3',
				},
				{
					text: '知识点4',
					link: '/knowledge/Verbal/4',
				},
			],
		},
	],
}
