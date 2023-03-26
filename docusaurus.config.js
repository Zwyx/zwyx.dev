// @ts-check

const { env, exit } = require("process");

require("dotenv").config();

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const DOMAIN = env.DOMAIN;
const EDIT_URL = env.EDIT_URL;
const PLAUSIBLE_SCRIPT_SRC = env.PLAUSIBLE_SCRIPT_SRC;
const GOOGLE_ANALYTICS_TRACKING_ID = env.GOOGLE_ANALYTICS_TRACKING_ID;

[DOMAIN, EDIT_URL, PLAUSIBLE_SCRIPT_SRC, GOOGLE_ANALYTICS_TRACKING_ID].forEach(
	(value) => {
		if (!value) {
			console.error(`Missing environment variable`);
			exit(1);
		}
	},
);

const envVariablesForCustomFields = [
	["GISCUS_REPO", "giscusRepo"],
	["GISCUS_REPO_ID", "giscusRepoId"],
	["GISCUS_CATEGORY", "giscusCategory"],
	["GISCUS_CATEGORY_ID", "giscusCategoryId"],
];

const customFields = Object.fromEntries(
	envVariablesForCustomFields.map(([variableName, customFieldName]) => {
		const value = env[variableName];

		if (!value) {
			console.error(`Missing value for environment variable '${variableName}'`);
			exit(1);
		}

		return [customFieldName, value];
	}),
);

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Zwyx",
	tagline: "Web dev",
	favicon: "img/Zwyx-220x220-rounded-favicon.ico",
	url: `https://${DOMAIN}`,
	baseUrl: "/",

	trailingSlash: false,

	scripts: [
		{
			src: PLAUSIBLE_SCRIPT_SRC,
			defer: true,
			"data-domain": DOMAIN,
		},
	],

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
					exclude:
						env.NODE_ENV !== "development"
							? ["*-xx-*/*", "draft*/*"] // Exclude drafts
							: undefined,
					editUrl: EDIT_URL,
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
					trackingID: GOOGLE_ANALYTICS_TRACKING_ID,
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			metadata: [{ name: "keywords", content: "software development, web" }],
			colorMode: {
				respectPrefersColorScheme: true,
			},
			image: "img/Zwyx-236x236-android-chrome-192x192.png",
			navbar: {
				logo: {
					alt: "Zwyx logo",
					src: "img/Zwyx-236x236-android-chrome-192x192.png",
					href: "/",
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
				exclude: env.NODE_ENV !== "development" ? ["*-xx-*"] : undefined, // Exclude drafts
				showReadingTime: false,
				editUrl: EDIT_URL,
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
