import {Button as _Button, ButtonProps} from "../../base/Button.tsx"
import {cn} from "../../../utils/cn.ts";

export function Button({ className, ...rest }: ButtonProps) {
	return <_Button className={cn("box-border rounded-[3px] border border-solid border-[#003c74] bg-button-linear-gradient hover:shadow-xp-hover focus:shadow-xp-focused active:bg-xp-active-button-gradient", className)} {...rest} />
}