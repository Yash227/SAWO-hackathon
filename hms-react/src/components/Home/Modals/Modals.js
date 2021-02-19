import { Button, Modal, ModalHeader, ModalBody, Container, Row, Col } from "reactstrap";
import staff from "./images/staff.webp";
import patient from "./images/Patients.webp";
import { useState } from "react";
import { Link } from "react-router-dom";

const Modals = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button outline={props.boutline} color={props.bcolor} onClick={toggle} className={props.cname}>
        {props.buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="title" centered>
        <ModalHeader toggle={toggle}>Choose the login type</ModalHeader>
        <ModalBody>
          <Container className="text-center">
            <Row>
              <Col size="6">
                <img src={patient} alt="patients" className="m-img" />
              </Col>
            </Row>
            <Row>
              <Col size="6">
                <Link to="/login" className="btn btn-success">
                  Patients
                </Link>
              </Col>
            </Row>
          </Container>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Modals;
