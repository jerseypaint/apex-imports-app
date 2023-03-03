import VehiclesList from '../VehiclesList'

const Inventory = ({vehicles}) => {
    return(
        <div className={`py-12`}>
            <div className={`container`}>
                <VehiclesList vehicles={vehicles} />
            </div>
        </div>
    )
}

export default Inventory