import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Button } from "reactstrap";
import loader from "../../assets/loader.svg";
import DashboardUI from "./DashboardUI/DashboardUI";

const Dashboard = (props) => {
  const [state, setState] = useState({
    msg: "",
    status: null,
    data: null,
  });

  useEffect(() => {
    if (props) setState({ ...props.payload });
    else setState({ status: 401 });
  }, [props]);

  if (state.status === 200) {
    const data = JSON.stringify(state.data, null, 2);
    return <DashboardUI data={data} />;
  }

  if (state.status === 401 || state.status === 403) {
    console.log(state.msg);
  }

  if (state.status === -1) {
    return <Redirect to="/404_not_found" />;
  }

  return (
    <div className="divLoader">
      <img src={loader} alt="loader" />
      <Button color="success" className="noUnderline" href="/">
        Go To HomePage
      </Button>
    </div>
  );
};

export default Dashboard;
