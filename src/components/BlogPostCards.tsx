import Link from "@docusaurus/Link";
import clsx from "clsx";
import React, { FC } from "react";
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
			{posts.map(({ title, href, description, imageSrc, imageAlt }) => (
				<Link to={href} className={clsx(style.blogPostCard)}>
					<div className={style.imageWrapper}>
						<img className={style.image} src={imageSrc} alt={imageAlt} />
					</div>

					<div className={style.title}>{title}</div>

					<div className={style.description}>{description}</div>
				</Link>
			))}
		</div>
	);
};
