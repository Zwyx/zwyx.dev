import type { Options, ThemeConfig } from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import dotenv from "dotenv";
import { themes } from "prism-react-renderer";
import { env, exit } from "process";

dotenv.config();

const theme = themes.github;
const darkTheme = themes.dracula;

const DOMAIN = env.DOMAIN;
const EDIT_URL = env.EDIT_URL;
const ALGOLIA_APP_ID = env.ALGOLIA_APP_ID;
const ALGOLIA_API_KEY = env.ALGOLIA_API_KEY;
const PLAUSIBLE_SCRIPT_SRC = env.PLAUSIBLE_SCRIPT_SRC;

[
	DOMAIN,
	EDIT_URL,
	ALGOLIA_APP_ID,
	ALGOLIA_API_KEY,
	PLAUSIBLE_SCRIPT_SRC,
].forEach((value) => {
	if (!value) {
		console.error(`Missing environment variable`);
		exit(1);
	}
});

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

const prod = process.env.NODE_ENV === "production";

const config: Config = {
	title: "Zwyx",
	tagline: "Web dev",
	favicon: "img/Zwyx-220x220-rounded-favicon.ico",
	url: `https://${DOMAIN}`,
	baseUrl: "/",

	trailingSlash: false,

	scripts: [
		...(prod
			? [
					{
						src: PLAUSIBLE_SCRIPT_SRC,
						defer: true,
						"data-domain": DOMAIN,
					},
			  ]
			: []),
	],

	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	markdown: {
		mdx1Compat: {
			admonitions: false,
			comments: false,
			headingIds: false,
		},
	},

	presets: [
		[
			"classic",
			{
				docs: false,
				blog: {
					blogTitle: "Zwyx's blog",
					blogDescription: "Web dev and stuff",
					blogSidebarTitle: "Latest posts",
					blogSidebarCount: "ALL",
					postsPerPage: "ALL",
					editUrl: EDIT_URL,
					feedOptions: {
						type: "all",
						xslt: true,
						title: "Zwyx's blog",
						description: "Web dev and stuff",
						copyright: `Copyright © ${new Date().getFullYear()} Zwyx.`,
					},
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			} satisfies Options,
		],
	],

	themeConfig: {
		metadata: [{ name: "keywords", content: "software development, web" }],
		colorMode: {
			respectPrefersColorScheme: true,
		},
		image: "img/Zwyx-236x236-android-chrome-192x192.webp",
		navbar: {
			logo: {
				alt: "Zwyx logo",
				src: "img/Zwyx-236x236-android-chrome-192x192.webp",
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
					type: "search",
					position: "right",
				},
				{
					href: "https://github.com/Zwyx",
					className: "header-github-link",
					"aria-label": "GitHub",
					position: "right",
				},
			],
		},
		algolia: {
			appId: ALGOLIA_APP_ID,
			apiKey: ALGOLIA_API_KEY,
			indexName: "zwyx",
		},
		footer: {
			style: "dark",
			copyright: `Copyright © ${new Date().getFullYear()} Zwyx.dev`,
		},
		prism: {
			theme,
			darkTheme,
			additionalLanguages: ["bash", "json"],
		},
	} satisfies ThemeConfig,

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
				showReadingTime: false,
				editUrl: EDIT_URL,
				onUntruncatedBlogPosts: "ignore",
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

export default config;
