import useIsBrowser from "@docusaurus/useIsBrowser";
import GiscusComments from "@site/src/components/GiscusComments";
import BlogPostItem from "@theme-original/BlogPostItem";

const POST_REGEX = /^\/(blog|til)\/.+$/;

export default function BlogPostItemWrapper(props) {
	const isBrowser = useIsBrowser();

	return (
		<>
			<BlogPostItem {...props} />

			{isBrowser && window.location.pathname.match(POST_REGEX) && (
				<>
					<div style={{ marginTop: "32px" }} />

					<GiscusComments />

					<div style={{ marginTop: "-24px" }} />
				</>
			)}
		</>
	);
}
