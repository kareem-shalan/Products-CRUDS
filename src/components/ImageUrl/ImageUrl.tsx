
interface ImageUrlProps {
    imageUrl: string
    alt: string
    className?: string
}
export default function ImageUrl({ imageUrl, alt = "image", className }: ImageUrlProps) {
    return (
        <>
            {(!imageUrl || imageUrl.trim() === "") ? null : (

                <img src={imageUrl} alt={alt} className={`${className} `} />

            )}
        </>

    )
}
