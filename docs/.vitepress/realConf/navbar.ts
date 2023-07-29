// docs/.vitepress/relaConf/navbar.ts
import { DefaultTheme } from 'vitepress'
export const nav: DefaultTheme.NavItem[] = [
	{
		text: '首页',
		link: '/', // 表示docs/index.md
	},
	{
		text: '行测理论',
		items: [
			{
				text: '言语理解',
				link: '/knowledge/Verbal/', // 表示docs/column/Travel/index.md
			},
			{
				text: '数量关系',
				link: '/knowledge/Quantitative/', // 表示docs/column/Growing/index.md
			},
			{
				text: '判断推理',
				link: '/knowledge/Logical/', // 表示docs/column/Travel/index.md
			},
			{
				text: '资料分析',
				link: '/knowledge/Data-Analysis/', // 表示docs/column/Growing/index.md
			},
		],
	},
	{
		text: '关于我',
		items: [
			{ text: 'Github', link: 'https://github.com/Jacqueline712' },
			{
				text: '掘金',
				link: 'https://juejin.cn/user/3131845139247960/posts',
			},
			{
				text: '飞书社区',
				link: 'https://pzfqk98jn1.feishu.cn/wiki/space/7193915595975491587?ccm_open_type=lark_wiki_spaceLink',
			},
		],
	},
]

// 在config.ts中引用
