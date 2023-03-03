import Image from "next/image"

const PageHeader = ({heading, image}) => {
    return (
       <div className={`relative py-8`}>
            {image &&
                <div className={`absolute top-0 left-0 w-full h-full object-cover`}>
                    <Image src={image} className={`w-full h-full object-cover`} height={181} width={1920} />
                </div>
            }
            <div className={`container relative`}>
                {heading && 
                    <h1 className={`text-h1 text-center`}>{heading}</h1>
                }
            </div>
       </div>
    )
}

export default PageHeader