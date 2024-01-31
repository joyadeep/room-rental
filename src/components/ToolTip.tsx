import { ReactNode } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"

interface Itooltip {
    label:string;
    children:ReactNode;
    side?:"top" | "right" | "bottom" | "left";
    align?:"start" | "center" | "end";
}
const ToolTip = ({label,children,align,side}:Itooltip) => {
  return (
    <TooltipProvider skipDelayDuration={20}>
        <Tooltip delayDuration={50}>
            <TooltipTrigger asChild>
                {children}
            </TooltipTrigger>
            <TooltipContent side={side} align={align}>
                {label}
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
  )
}

export default ToolTip