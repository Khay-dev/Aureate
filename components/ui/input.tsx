import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
					<input
						type={type}
						className={cn(
							"flex h-[50px] w-full rounded-md border border-input bg-transparent px-3 py-3 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-[#391400A3] leading-8 font-normal placeholder:text-[#391400A3] placeholder:items-center ",
							className,
						)}
						ref={ref}
						{...props}
					/>
				);
  }
)
Input.displayName = "Input"

export { Input }
