import GiscusComments from "@site/src/components/GiscusComments";
import BlogPostPaginator from "@theme-original/BlogPostPaginator";
import React from "react";

export default function BlogPostPaginatorWrapper(props) {
	return (
		<>
			<div style={{ marginTop: "32px" }} />

			<GiscusComments />

			<div style={{ marginTop: "-24px" }} />

			<BlogPostPaginator {...props} />
		</>
	);
}
