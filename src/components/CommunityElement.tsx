import Image from "next/image"

export const CommunityElement = ({image, title, description}) => {
    return (
        <div className="w-[300px]">
            <Image src={image} className="rounded-md mx-auto" alt='Community Image' width={200} height={200}/>
            <h1 className="text-center text-main text-2xl my-6">{title}</h1>
            <p className="text-center">{description}</p>
        </div>
    )
}