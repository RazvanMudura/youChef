import Image from "next/image"

export const Recipe = ({image, description}) => {
    return (
        <div className="w-[250px]">
            <Image src={image} className="rounded-md" alt='Recipe Image' width={250} height={250}/>
            <p className="text-center">{description}</p>
        </div>
    )
}