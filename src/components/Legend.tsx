import React, { FC, PropsWithChildren } from "react";
import style from "./Legend.module.css";

export const Legend: FC<PropsWithChildren> = ({ children }) => (
	<div className={style.legend}>{children}</div>
);
