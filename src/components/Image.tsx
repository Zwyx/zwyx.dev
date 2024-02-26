import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import style from "./Image.module.css";
import { Legend } from "./Legend";

interface ImageProps extends PropsWithChildren {
	src: string;
	/** The value of `legend` will be used for `alt` if `alt` isn't provided */
	alt?: string;
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
				style={{ borderRadius }}
				className={clsx(style.frame, withFrame && style.visible)}
			>
				<img
					style={{ borderRadius }}
					className={style.image}
					src={src}
					alt={alt || (typeof legend === "string" ? legend : "")}
					width={width}
					height={height}
				/>
			</div>

			{legend && <Legend>{legend}</Legend>}
		</div>
	);
};
