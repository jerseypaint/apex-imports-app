import Card from './VehicleCard'

const ContentCards = ({cards}) => {
    return (
        <div>
            {cards && 
                cards.map(card => {
                    return(
                        <Card content={card.content} />
                    )
                })
            }
        </div>
    )
}

export default ContentCards