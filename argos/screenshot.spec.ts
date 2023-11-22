import { argosScreenshot } from "@argos-ci/playwright";
import { test } from "@playwright/test";
import * as cheerio from "cheerio";
import * as fs from "fs";

const siteUrl = "http://localhost:3000";
const sitemapPath = "../build/sitemap.xml";
const stylesheetPath = "./screenshot.css";
const stylesheet = fs.readFileSync(stylesheetPath).toString();

// Extract a list of pathnames, given a fs path to a sitemap.xml file
// Docusaurus generates a build/sitemap.xml file for you!
function extractSitemapPathnames(sitemapPath: string): string[] {
	const sitemap = fs.readFileSync(sitemapPath).toString();
	const $ = cheerio.load(sitemap, { xmlMode: true });
	const urls: string[] = [];
	$("loc").each(function handleLoc() {
		urls.push($(this).text());
	});
	return urls.map((url) => new URL(url).pathname);
}

// Wait for hydration, requires Docusaurus v2.4.3+
// Docusaurus adds a <html data-has-hydrated="true"> once hydrated
// See https://github.com/facebook/docusaurus/pull/9256
function waitForDocusaurusHydration() {
	return document.documentElement.dataset.hasHydrated === "true";
}

// Converts a pathname to a decent screenshot name
function pathnameToArgosName(pathname: string): string {
	return pathname.replace(/^\/|\/$/g, "") || "index";
}

function screenshotPathname(pathname: string) {
	test(`pathname ${pathname}`, async ({ page }) => {
		const url = siteUrl + pathname;
		await page.goto(url);
		await page.waitForFunction(waitForDocusaurusHydration);
		await page.addStyleTag({ content: stylesheet });
		await argosScreenshot(page, pathnameToArgosName(pathname));
	});
}

test.describe("Docusaurus site screenshots", () => {
	const pathnames = extractSitemapPathnames(sitemapPath);
	console.info("Pathnames to screenshot:", pathnames);
	pathnames.forEach(screenshotPathname);
});
