import {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import {cn} from "../utils/cn.ts";

export type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

// TODO Actual font size was 11px
export function Button({ className, ...rest }: ButtonProps) {
	return (
		<button className={cn("text-xs", className)} {...rest} />
	)
}