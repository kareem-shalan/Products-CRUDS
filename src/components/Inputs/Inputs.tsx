import type { InputHTMLAttributes } from 'react'
interface InputsProps extends   InputHTMLAttributes<HTMLInputElement> {}
export default function Inputs({ ...rest}: InputsProps) {
    return (
        <input className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-1.5 text-black shadow-2xl shadow-black/50 ' {...rest} />
    )
}
