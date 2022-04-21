import React,  { useContext }  from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import CountContext from "../../context/count";
const Member = () => {
  const navigate = useNavigate();
  const countCtx = useContext(CountContext);

  const goBack = () => {
    navigate(-1);
  };

  const deleteMember = () => {
    countCtx.setCount({
      type: "reset"
    })
  }

  return (
    <div>
      <h1>Page 2</h1>
      <Button onClick={goBack}>
        Go Back
      </Button>
      <Button onClick={deleteMember}>Delete Count Hook</Button>
    </div>
  );
};

export default Member;

