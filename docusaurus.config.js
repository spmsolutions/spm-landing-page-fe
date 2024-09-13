const {themes} = require('prism-react-renderer');

require('dotenv').config({ path: '.env'})

const darkTheme = themes.dracula;

module.exports = {
	title: 'SPM Solutions',
	tagline: 'All the tools you need to rank higher on search engines',
	url: 'https://spm-solution.com/',
	baseUrl: '/',
	favicon: '/img/favicon.png',
	organizationName: 'spmsolutions',
	projectName: 'spm-landing-page-fe',
	staticDirectories: ['static'],
	trailingSlash: false,
	scripts: [
		{
			src: 'https://buttons.github.io/buttons.js',
			async: true,
			defer: true,
		}
	],
	themeConfig: {
		navbar: {
			logo: {
				alt: 'SPM Solutions Logo',
				src: '/img/logo1tag.svg',
			},
			items: [
				// {
				// 	to: 'docs/welcome',
				// 	activeBasePath: 'docs',
				// 	label: 'DevKit',
				// 	position: 'right',
				// },
				// {
				// 	to: 'forms/welcome',
				// 	activeBasePath: 'forms',
				// 	label: 'Forms',
				// 	position: 'right',
				// },
				// {
				// 	to: '/devkit-components/',
				// 	activeBasePath: 'devkit-components',
				// 	label: 'Components',
				// 	position: 'right',
				// },
				// {
				// 	to: '/playground/',
				// 	activeBasePath: 'playground',
				// 	label: 'Playground',
				// 	position: 'right',
				// },
				{
					to: '/#about-us',
					activeBasePath: '/#about-us',
					label: 'About',
					position: 'right'
				},
				{
					to: '/#services',
					activeBasePath: '/',
					label: 'Services',
					position: 'right'
				},
				{
					to: '/#contact-us',
					activeBasePath: '/#contact-us',
					label: 'Contact',
					position: 'right'
				},
				{
					to: '/blog',
					activeBasePath: 'blog',
					label: 'Blog',
					position: 'right',
				},
				// {
				// 	to: '/showcase',
				// 	activeBasePath: 'showcase',
				// 	label: 'Showcase',
				// 	position: 'right',
				// },
			],
		},
		footer: {
			links: [
				{
					title: 'Community',
					items: [
						{
							label: 'Twitter',
							href: 'https://twitter.com',
							icon: 'twitter',
						},
						{
							label: 'LinkedIn',
							href: 'https://linkedin.com/',
							icon: 'linkedin',
						},
					],
				},
			],
			copyright: 'Made with ❤️ by SPM Solutions team.',
		},
		algolia: {
			appId: '7YTJNLX1P8',
			apiKey: 'dc21b6df3ba4bc597ce294fff94c077a',
			indexName: 'spm_solution_search',
			startUrls: ['https://www.spm-solution.com', 'https://www.spm-solution.coms/blog'],
			contextualSearch: false,
		},
		prism: {
			theme: darkTheme,
			additionalLanguages: ['php', 'scss', 'css'],
		},
		colorMode: {
			defaultMode: 'light',
			disableSwitch: true,
			respectPrefersColorScheme: false,
		},
		docs: {},
		trailingSlash: false,
		onBrokenLinks: 'ignore',
		onBrokenMarkdownLinks: 'ignore'
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: false,
				gtag: {
					trackingID: 'GTM-P5GG5DH',
					anonymizeIP: true,
				},
				theme: {
					customCss: [
						require.resolve('./src/theme/styles.css'),
						require.resolve('@infinum/docusaurus-theme/dist/style.css'),
					],
				},
				blog: {
					blogTitle: 'Tutorials and articles about effective SEO and ultimate SEO practices, offered by spm-solution',
					blogDescription: 'Tutorials and articles about SEO, converting searches to sales, and services offered by spm-soltion',
					blogSidebarTitle: 'Latest posts',
					showReadingTime: true,
					postsPerPage: 9,
				},
				sitemap: {
					changefreq: 'weekly',
					priority: 0.5,
				},
			},
		],
	],
	plugins: [
		[
      "docusaurus2-dotenv",
      {
        systemvars: true,
      },
    ],
		'es-text-loader',
	],
	customFields: {
		keywords: [
			'seo tools',
			'web development tools',
			'seo project',
			'seo keywords',
			'on-page seo',
			'off-page seo',
			'technical seo',
			'keyword research'
		],
		image: 'img-why-boilerplate@2x.png',
	},
};
