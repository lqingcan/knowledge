import { defineConfig } from 'vitepress'
import { nav, sidebar } from './realConf'

export default defineConfig({
	title: '🍒考公知识库',
	description: '涵盖行测各科的知识点',
	// titleTemplate: false,
	head: [
		[
			'script',
			{},
			`
   var _hmt = _hmt || [];
   (function() {
   var hm = document.createElement("script");
   hm.src = "https://hm.baidu.com/hm.js?08c4d9f8928418dabd9c29443a6d0e45";
   var s = document.getElementsByTagName("script")[0];
   s.parentNode.insertBefore(hm, s);
   })();
    `,
		],
	],

	themeConfig: {
		nav: nav, // 把定义的nav给替换进来
		sidebar: sidebar,
		// siteTitle: '测试',
		outlineTitle: '目录',
		lastUpdatedText: '更新时间',
		outline: 'deep',
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }, // 右上角github图标
		],
		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © 2019-present Evan You',
		},
		docFooter: {
			prev: '上一页',
			next: '下一页',
		},
	},
	lastUpdated: true,
})
