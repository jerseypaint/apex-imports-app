import LinkBox from './LinkBox'

const LinkBoxes = ({data}) => {
    const linkBoxes = data
    return(
        <div className={`container`}>
            <hr className='max-w-[600px] text-cemter mx-auto opacity-40 mt-6 mb-14' />
            <div className={`flex flex-col md:grid md:grid-cols-2 gap-6 justify-center pb-14`}>
            {linkBoxes &&
                linkBoxes.map(linkBox => {
                    linkBox = linkBox.globalLinkBox

                    if (linkBox) {
                        return(
                            <div>
                                <LinkBox heading={linkBox.heading} page={linkBox.page} eyebrow={linkBox.eyebrow} image={linkBox.backgroundImage} />
                            </div>
                        )
                    }
                })
            }
            </div>
        </div>
    )
}

export default LinkBoxes