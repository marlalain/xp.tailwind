import {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import {cn} from "../../utils/cn.ts";

export type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export function Button({ className, ...rest }: ButtonProps) {
	return (
		<button className={cn(
			"box-border min-h-[23px] min-w-[75px] bg-button-linear-gradient px-6 text-[11px] text-[#222222] shadow-raised focus:outline-dotted focus:outline-1 focus:-outline-offset-2 focus:outline-white active:shadow-sunken"
			, className)} {...rest} />
	)
}