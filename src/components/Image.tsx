import clsx from "clsx";
import React, { FC, PropsWithChildren } from "react";
import style from "./Image.module.css";
import { Legend } from "./Legend";

interface ImageProps extends PropsWithChildren {
	src: string;
	alt: string;
	width?: string;
	frame?: boolean;
	legend?: string;
}

export const Image: FC<ImageProps> = ({
	src,
	alt,
	width,
	legend: legendProp,
	frame,
	children,
}) => {
	const legend = legendProp || children;

	return (
		<div className={clsx(style.imageWrapper, legend && style.withLegend)}>
			<div
				className={clsx(style.frame, frame && style.visible)}
				style={{ width }}
			>
				<img className={style.image} src={src} alt={alt} />
			</div>

			{legend && <Legend>{legend}</Legend>}
		</div>
	);
};
