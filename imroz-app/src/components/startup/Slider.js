import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';


function IndividualIntervalsExample() {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src='./images/startup/s-3.jpg'
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Marketing</h3>
                    <p>There are many variations of passages of Lorem Ipsum available but <br/> the majority have suffered alteration.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src='./images/startup/s-2.jpg'
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Development</h3>
                    <p>There are many variations of passages of Lorem Ipsum available but <br/> the majority have suffered alteration.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='./images/startup/s-1.jpg'
                    alt="Third slide"
                    width='100%'
                    height='auto'
                />
                <Carousel.Caption>
                    <h3>UX Research</h3>
                    <p>There are many variations of passages of Lorem Ipsum available but <br/> the majority have suffered alteration.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default IndividualIntervalsExample;