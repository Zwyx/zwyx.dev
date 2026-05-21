import Link from "@docusaurus/Link";
import clsx from "clsx";
import { FC } from "react";
import style from "./BlogPostCards.module.css";

interface BlogPostCardsProps {
	posts: {
		title: string;
		description: string;
		href: string;
		imageSrc?: string;
		imageAlt?: string;
	}[];
}

export const BlogPostCards: FC<BlogPostCardsProps> = ({ posts }) => {
	return (
		<div className={style.blogPostCards}>
			{posts.map(({ title, href, description, imageSrc, imageAlt }, i) => (
				<div style={{ display: "flex", flexDirection: "column" }}>
					<div
						style={{
							marginBottom: "4px",
							textAlign: "center",
							fontStyle: "italic",
						}}
					>
						{!i ? "Featured in This Week in React 🎉" : " "}
					</div>

					<Link
						key={href}
						to={href}
						className={clsx(style.blogPostCard)}
						style={{
							flex: 1,
							...(!i
								? {
										boxShadow: "0 0 5px 1px #ffa12d",
									}
								: {}),
						}}
					>
						<div className={style.imageWrapper}>
							<img className={style.image} src={imageSrc} alt={imageAlt} />
						</div>

						<div className={style.title}>{title}</div>

						<div className={style.description}>{description}</div>
					</Link>
				</div>
			))}
		</div>
	);
};
