const {themes} = require('prism-react-renderer');

const darkTheme = themes.dracula;

module.exports = {
	title: 'SPM Solutions',
	tagline: 'All the tools you need to rank higher on search engines',
	url: 'https://spmsolutions.github.io',
	baseUrl: '/spm-landing-page-fe',
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
							label: 'Facebook',
							href: 'https://facebook.com/infinumcom',
							icon: 'facebook',
						},
						{
							label: 'Instagram',
							href: 'https://instagram.com/infinumcom/',
							icon: 'instagram',
						},
						{
							label: 'Twitter',
							href: 'https://twitter.com/infinum',
							icon: 'twitter',
						},
						{
							label: 'Clutch',
							href: 'https://clutch.co/profile/infinum',
							icon: 'clutch',
						},
						{
							label: 'Dribbble',
							href: 'https://dribbble.com/infinum',
							icon: 'dribbble',
						},
						{
							label: 'LinkedIn',
							href: 'https://linkedin.com/company/infinum/',
							icon: 'linkedin',
						},
					],
				},
			],
			copyright: 'Made with ❤️ by SPM Solutions team.',
		},
		algolia: {
			appId: 'CWB1S6U3C4',
			apiKey: 'cbae3fc769aee256328548eff1e91c1c',
			indexName: 'infinum_eightshift',
			startUrls: ['https://eightshift.com', 'https://eightshift.com/docs', 'https://eightshift.com/forms'],
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
		docs: {
			sidebar: {
				autoCollapseCategories: true,
			}
		},
		trailingSlash: false
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					sidebarCollapsible: true,
				},
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
					blogTitle: 'Tutorials and articles about Eightshift development kit',
					blogDescription: 'Tutorials and articles about Eightshift development kit',
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
			'@docusaurus/plugin-content-docs',
			{
				id: 'forms',
				path: 'forms',
				routeBasePath: 'forms',
				sidebarPath: require.resolve('./sidebars-forms.js'),
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
