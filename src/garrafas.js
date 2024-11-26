import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'; // Usando Image do Bootstrap
// Ou pode usar diretamente uma tag img sem importar Image

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image src="path/to/your/image1.jpg" alt="First slide" fluid /> {/* Substitua pelo caminho correto da imagem */}
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image src="path/to/your/image2.jpg" alt="Second slide" fluid />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image src="path/to/your/image3.jpg" alt="Third slide" fluid />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
