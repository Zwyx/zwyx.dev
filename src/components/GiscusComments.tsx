import { useColorMode } from "@docusaurus/theme-common";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Giscus from "@giscus/react";
import React from "react";

export default function GiscusComments() {
	const {
		siteConfig: {
			customFields: {
				giscusRepo,
				giscusRepoId,
				giscusCategory,
				giscusCategoryId,
			},
		},
	} = useDocusaurusContext();

	const { colorMode } = useColorMode();

	if (
		typeof giscusRepo !== "string" ||
		typeof giscusRepoId !== "string" ||
		typeof giscusCategory !== "string" ||
		typeof giscusCategoryId !== "string"
	) {
		return null;
	}

	return (
		<Giscus
			repo={giscusRepo as `${string}/${string}`}
			repoId={giscusRepoId}
			category={giscusCategory}
			categoryId={giscusCategoryId}
			mapping="pathname"
			strict="0"
			reactionsEnabled="1"
			emitMetadata="0"
			inputPosition="bottom"
			theme={colorMode}
			lang="en"
		/>
	);
}
