import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Sawo from "sawo";
import { verifyUser } from "../../Auth/Auth";

import LForm from "./Login.Forms";

const SAWO = () => {
  const [login, setLogin] = useState(0);
  const [data, setData] = useState({});

  const config = {
    containerID: "sawo-container",
    identifierType: "email",
    apiKey: "ab00a2a5-44f5-4b61-8437-34b68e0515ae",
    onSuccess: (payload) => {
      verifyUser(payload).then((rep) => {
        setData({ data: { ...rep.data.data._doc }, msg: rep.statusText, status: rep.status });
        setLogin(1);
      });
    },
  };

  useEffect(() => {
    let sawo = new Sawo(config);
    sawo.showForm();
  }, []);

  if (login === 1)
    return (
      <>
        {console.log(data)}
        <Redirect
          to={{
            pathname: "/patient_dashboard",
            state: { ...data },
          }}
        />
      </>
    );
  else return <LForm />;
};

export default SAWO;
