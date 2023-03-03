import Image from 'next/image';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide-core.min.css';
import Link from 'next/link';
import { useInView } from "framer-motion"

import VehicleCard from './VehicleCard';
import { ArrowRight, ChevronLeft, ChevronRight } from './svg';
import { money } from '../lib/format';

const VehicleCards = ({vehicles}) => {
    return (
        <ul>
            {vehicles && 
                <li>
                    <div>
                    {vehicles.map(vehicle => {
                        return(
                            <VehicleCard vehicle={vehicle} />
                        )
                    })}
                    </div>
                </li>
            }
        </ul>
    )
}

export default VehicleCards