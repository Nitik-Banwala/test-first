import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const DemoCarousel = () => {
    return (
        <Carousel autoPlay infiniteLoop showThumbs={false}>
            <div>
                <img src="public/sliderfour.png" alt="slide 1" />
                <p className="legend">Legend 1</p>
            </div>

            <div>
                <img src="public/sliderfour.png" alt="slide 2" />
                <p className="legend">Legend 2</p>
            </div>

            <div>
                <img src="public/sliderfour.png" alt="slide 3" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
};

export default DemoCarousel;