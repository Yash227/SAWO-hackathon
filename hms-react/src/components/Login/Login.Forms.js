import { Card, CardBody } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import "./Forms.css";

const LForm = (props) => {
  return (
    <>
      <div className="ctext">
        <div className="title_bar text-center bg-color text-white p-3 h1">SAWO Login</div>
        <Link className="p-3 noUnderline" to="/">
          <FontAwesomeIcon icon={["fas", "arrow-circle-left"]} /> Back To Home{" "}
        </Link>
        <div className="area">
          <Card id="cust-cont">
            <CardBody>
              <div id="sawo-container"></div>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
};

export default LForm;
