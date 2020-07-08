import React from "react"

import Carousel from "react-bootstrap/Carousel"
import NewCard from "./NewCard"

export default function ControlledCarousel() {
    const [index, setIndex] = React.useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
    <Carousel className="h-75 p-2 bg-dark" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <NewCard 
            name="Tier-1"
            price="500€"
            videoCard="Vega 11"
            cpu="R5 3400G"
            ram="16GB 3000 MHz"
            imgUrl=" https://www.sedatech.net/Produktbilder/Gehause/case_1000x1000/main/nzxt_h200i-black-blue.jpg"
            motheboard = "B450m"
            psu = "400W"
            case = "NZXT h200i"
            storage = "HDD 1TB + SSD 128GB"
          />
        </Carousel.Item>

        <Carousel.Item>
          <NewCard
            name="Tier-1"
            price="500€"
            videoCard="Vega 11"
            cpu="R5 3400G"
            ram="16GB 3000 MHz"
            imgUrl=" https://www.sedatech.net/Produktbilder/Gehause/case_1000x1000/main/nzxt_h200i-black-blue.jpg"
            motheboard="B450m"
            psu="400W"
            case="NZXT h200i"
            storage="HDD 1TB + SSD 128GB"
          />
        </Carousel.Item>

        <Carousel.Item>
          <NewCard
            type="Gaming"
            name="Tier-1"
            price="500€"
            videoCard="Vega 11"
            cpu="R5 3400G"
            ram="16GB 3000 MHz"
            imgUrl=" https://www.sedatech.net/Produktbilder/Gehause/case_1000x1000/main/nzxt_h200i-black-blue.jpg"
            motheboard="B450m"
            psu="400W"
            case="NZXT h200i"
            storage="HDD 1TB + SSD 128GB"
          />
        </Carousel.Item>
        
      </Carousel>
    );
  }
