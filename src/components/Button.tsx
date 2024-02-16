import {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import {cn} from "../utils/cn.ts";

export type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

// TODO Actual font size was 11px
// TODO Actual padding y was 12px
export function Button({ className, ...rest }: ButtonProps) {
	return (
		<button className={cn("box-border min-h-[23px] min-w-[75px] bg-blue-100 py-3.5 text-xs text-gray-800 focus:outline-dotted focus:outline-1 focus:-outline-offset-2 focus:outline-white", className)} {...rest} />
	)
}