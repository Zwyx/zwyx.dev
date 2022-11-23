// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

require("dotenv").config();

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const envVariablesForCustomFields = [
	["GISCUS_REPO", "giscusRepo"],
	["GISCUS_REPO_ID", "giscusRepoId"],
	["GISCUS_CATEGORY", "giscusCategory"],
	["GISCUS_CATEGORY_ID", "giscusCategoryId"],
];

const customFields = Object.fromEntries(
	envVariablesForCustomFields.map(([variableName, customFieldName]) => {
		const value = process.env[variableName];

		if (!value) {
			console.error(`Missing value for environment variable '${variableName}'`);
			process.exit(1);
		}

		return [customFieldName, value];
	}),
);

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Zwyx",
	tagline: "Web dev",
	url: "https://zwyx.dev",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/Zwyx-220x220-rounded-favicon.ico",

	// https://docusaurus.io/docs/deployment#docusaurusconfigjs-settings
	trailingSlash: false,

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: false,
				blog: {
					blogTitle: "Zwyx's blog",
					blogDescription: "Web dev and stuff",
					blogSidebarTitle: "Latest posts",
					blogSidebarCount: "ALL",
					postsPerPage: "ALL",
					editUrl: "https://github.com/zwyx/zwyx.github.io/tree/master/",
					feedOptions: {
						type: "all",
						title: "Zwyx's blog",
						description: "Web dev and stuff",
						copyright: `Copyright © ${new Date().getFullYear()} Zwyx.`,
					},
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
				gtag: {
					trackingID: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			metadata: [{ name: "keywords", content: "web, development, blog" }],
			colorMode: {
				respectPrefersColorScheme: true,
			},
			image: "img/Zwyx-236x236-android-chrome-192x192.png",
			navbar: {
				// title: "Zwyx",
				logo: {
					alt: "Zwyx logo",
					src: "img/Zwyx-236x236-android-chrome-192x192.png",
					href: "/blog",
				},
				items: [
					{
						to: "blog",
						label: "Blog",
					},
					{
						to: "til",
						label: "Today I Learnt",
					},
					{
						href: "https://github.com/Zwyx",
						className: "header-github-link",
						"aria-label": "GitHub",
						position: "right",
					},
				],
			},
			footer: {
				style: "dark",
				copyright: `Copyright © ${new Date().getFullYear()} Zwyx. Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),

	plugins: [
		[
			"@docusaurus/plugin-client-redirects",
			/** @type {import('@docusaurus/plugin-client-redirects').Options} */
			({
				redirects: [
					{
						from: "/",
						to: "/blog",
					},
				],
			}),
		],

		[
			"@docusaurus/plugin-content-blog",
			{
				id: "til",
				routeBasePath: "til",
				path: "til",
				blogTitle: "Zwyx's Today I Learnt",
				blogDescription: "Today I Learnt, about web and dev",
				blogSidebarTitle: "Latest TILs",
				blogSidebarCount: "ALL",
				postsPerPage: "ALL",
				showReadingTime: false,
				editUrl: "https://github.com/zwyx/zwyx.github.io/tree/master/",
				feedOptions: {
					type: "all",
					title: "Zwyx's TILs",
					description: "Today I Learnt about dev stuff",
					copyright: `Copyright © ${new Date().getFullYear()} Zwyx.`,
				},
			},
		],
	],

	customFields,
};

module.exports = config;
