import React, { type ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    className?: string
    width?: "w-full" | "w-1/2" | "w-1/3" | "w-1/4" | "w-1/5" | "w-1/6" | "w-1/7" | "w-1/8" | "w-1/9" | "w-1/10"

}
export default function Button({ children, className, width = "w-full", ...props }: ButtonProps) {
    return (
        <button className={`${className} cursor-pointer text-white px-4 py-2 rounded-md ${width} `} {...props}>{children}</button>
    )
}
