import Image from "next/image"
import Link from "next/link"

const Card = ({type, content, list, media}) => {
    // let type        = false ;
    // let content     = false ;
    // let list        = false ;
    // let media       = false ;
    
    

    if (type === `text`) {
        
    }
    if (type === `text-list`) {
        
    }
    if (type === `media-text`) {

    }
    return (
        <div className={`bg-black border-white border border-opacity-40`}>
            <div className={`md:flex`}>
                <div className={`flex-1`}>
                    <div>
                        {/* media here */}
                    </div>
                </div>
                <div className={`flex-1`}>
                    <div>
                        {/* text here */}
                    </div>
                    <div>
                        {/* list here */}
                        <ul className={`md:grid-cols-2`}>
                            <li className={`md:col-span-1`}>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card