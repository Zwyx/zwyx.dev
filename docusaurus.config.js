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
	url: "https://zwyx.github.io",
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
					// Note: at	the moment, the website is a blog only, but I didn't want to configure Docusaurus to be
					// in blog-only mode, as this would have made all post links to be `<domain>/<post-slug>`;
					// I wanted to keep the format `<domain>/blog/<post-slug>` in case the website becomes used for more
					// in the future, so I set up a redirection from `/` to `/blog`, see below
					blogTitle: "Zwyx's blog",
					blogDescription: "Web dev and stuff",
					blogSidebarTitle: "Latest posts",
					blogSidebarCount: "ALL",
					postsPerPage: "ALL",
					showReadingTime: true,
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
					// {
					// 	to: "/",
					// 	label: "Blog",
					// },
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
	],

	customFields,
};

module.exports = config;
