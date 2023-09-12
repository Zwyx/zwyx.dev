import clsx from "clsx";
import React, { FC, PropsWithChildren } from "react";
import style from "./Image.module.css";
import { Legend } from "./Legend";

interface ImageProps extends PropsWithChildren {
	src: string;
	alt: string;
	width?: string;
	/** Providing both `width` and `height` isn't necessary, but doing so prevents layout shift */
	height?: string;
	withFrame?: boolean;
	legend?: string;
	borderRadius?: string;
}

export const Image: FC<ImageProps> = ({
	src,
	alt,
	width,
	height,
	withFrame,
	legend: legendProp,
	borderRadius,
	children,
}) => {
	const legend = legendProp || children;

	return (
		<div className={clsx(style.imageWrapper, legend && style.withLegend)}>
			<div
				className={clsx(style.frame, withFrame && style.visible)}
				style={{ width, height, borderRadius }}
			>
				<img
					className={style.image}
					src={src}
					alt={alt}
					style={{ borderRadius }}
				/>
			</div>

			{legend && <Legend>{legend}</Legend>}
		</div>
	);
};
