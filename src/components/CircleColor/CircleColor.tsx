import { type HTMLAttributes } from "react"

interface CircleColorProps extends HTMLAttributes<HTMLSpanElement> {

    color: string
    

}

 const CircleColor = ({ color , ...rest }: CircleColorProps) => {
    return (
        <span className={` mt-2 w-5 h-5 bg-amber-950 cursor-pointer rounded-full`} style={{ backgroundColor: color }} {...rest} />
        
    )
}


export default CircleColor