import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import { Carousel } from "react-bootstrap";
import InfiniteCarousel from "react-leaf-carousel";
import CardGroup from "react-bootstrap/CardGroup";

const Main = () => {
  return (
    <Fragment>
      <div className="container-slideshow">
        <Carousel fade>
          <Carousel.Item>
            <img className="slideshow" src="slide1.jpg" alt="First slide" />
            <Carousel.Caption>
              <h3>Padi Layu</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="slideshow" src="slide2.jpg" alt="Second slide" />
            <Carousel.Caption>
              <h3>Padi Diserang Hama</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="slideshow" src="slide3.jpg" alt="Third slide" />
            <Carousel.Caption>
              <h3>Petani Kekerangan</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="card">
        <h2 className="berita">Berita Terbaru</h2>
        <CardGroup>
          <Card className="isi">
            <Card.Img variant="top" src="slide1.jpg" />
            <Card.Body>
              <Card.Title>Padi Layu</Card.Title>
              <Card.Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Card.Text>
              <Card.Link href="#">Selengkapnya...</Card.Link>
            </Card.Body>
          </Card>
          <Card className="isi">
            <Card.Img variant="top" src="slide2.jpg" />
            <Card.Body>
              <Card.Title>Padi Diserang Hama</Card.Title>
              <Card.Text>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.{" "}
              </Card.Text>
              <Card.Link href="#">Selengkapnya...</Card.Link>
            </Card.Body>
          </Card>
          <Card className="isi">
            <Card.Img variant="top" src="slide1.jpg" />
            <Card.Body>
              <Card.Title>Petani Kekeringan</Card.Title>
              <Card.Text>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
              </Card.Text>
              <Card.Link href="#">Selengkapnya...</Card.Link>
            </Card.Body>
          </Card>
        </CardGroup>
      <Container>
        <Row>
          <Col sm={7}>
            <h2 className="judul">Artikel</h2>
            <Card className="imgartikel bg-light text-white">
              <Card.Img src="artikel.png" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
            <Card className="imgartikel bg-light text-white">
              <Card.Img src="artikel.png" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
            <Card className="imgartikel bg-light text-white">
              <Card.Img src="artikel.png" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col sm={4}>
            <h2 className="judul">Informasi</h2>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Card border="light" style={{ width: "18rem" }}>
                  <Card.Header>Header</Card.Header>
                  <Card.Body>
                    <Card.Title>Light Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </ListGroup.Item>
              <ListGroup.Item>
                <Card border="light" style={{ width: "18rem" }}>
                  <Card.Header>Header</Card.Header>
                  <Card.Body>
                    <Card.Title>Light Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </ListGroup.Item>
              <ListGroup.Item>
                <Card border="light" style={{ width: "18rem" }}>
                  <Card.Header>Header</Card.Header>
                  <Card.Body>
                    <Card.Title>Light Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <h2 className="berita">Galeri</h2>
      <InfiniteCarousel className="galeri"
        breakpoints={[
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
        ]}
        dots={true}
        showSides={true}
        sidesOpacity={0.5}
        sideSize={0.1}
        slidesToScroll={4}
        slidesToShow={4}
        scrollOnDevice={true}
      >
        <div>
          <img alt="" src="moon.jpg" />
        </div>
        <div>
          <img alt="" src="moon.jpg" />
        </div>
        <div>
          <img alt="" src="moon.jpg" />
        </div>
        <div>
          <img alt="" src="moon.jpg" />
        </div>
        <div>
          <img alt="" src="moon.jpg" />
        </div>
        <div>
          <img alt="" src="moon.jpg" />
        </div>
        <div>
          <img alt="" src="moon.jpg" />
        </div>
        <div>
          <img alt="" src="moon.jpg" />
        </div>
        <div>
          <img alt="" src="moon.jpg" />
        </div>
        <div>
          <img alt="" src="moon.jpg" />
        </div>
        <div>
          <img alt="" src="moon.jpg" />
        </div>
        <div>
          <img alt="" src="moon.jpg" />
        </div>
        <div>
          <img alt="" src="moon.jpg" />
        </div>
        <div>
          <img alt="" src="moon.jpg" />
        </div>
        <div>
          <img alt="" src="moon.jpg" />
        </div>
        <div>
          <img alt="" src="moon.jpg" />
        </div>
        <div>
          <img alt="" src="moon.jpg" />
        </div>
        <div>
          <img alt="" src="moon.jpg" />
        </div>
        <div>
          <img alt="" src="moon.jpg" />
        </div>
        <div>
          <img alt="" src="moon.jpg" />
        </div>
        </InfiniteCarousel>
        </div>
    </Fragment>
  );
};

export default Main;