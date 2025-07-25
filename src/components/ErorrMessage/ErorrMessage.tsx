
interface ErorrMessageProps {
    msg: string

}
export default function ErorrMessage({ msg }: ErorrMessageProps) {
    return (
        msg ? <span className='text-red-500'>{msg}</span> : null
    )
}
