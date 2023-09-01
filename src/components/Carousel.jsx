import { Carousel } from "react-responsive-carousel";

const ImageCarousel = ({images, handleCloseButton}) => {
    return (
        <div className="modal">
            <button onClick={handleCloseButton} className="close-button">X</button>
            <Carousel useKeyboardArrows={true} style={{ width: '100px', Height: '100px' }}>
                {images.map((URL, index) => (
                    <div className="slide">
                    <img alt="sample_file" src={URL} key={index} />
                    </div>
                ))}
            </Carousel>
      </div>
    );
  };
  
  export default ImageCarousel;