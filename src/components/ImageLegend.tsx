import React, { FC, PropsWithChildren } from "react";
import style from "./ImageLegend.module.css";

export const ImageLegend: FC<PropsWithChildren> = ({ children }) => (
	<div className={style.imageLegend}>{children}</div>
);
