import React, { useContext } from "react";
import ThemeContext from "../../context/theme";
import CountContext from "../../context/count";
import { useCountHook, useCountRedux } from "@hooks";
import { Button, Card, Space, InputNumber } from "antd";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const ctx = useContext(ThemeContext);
  const countCtx = useContext(CountContext);
  const {count: countRedux, reduxIncrement, reduxDecrement, addCustomNumber } = useCountRedux();
  const navigate = useNavigate();

  const goTo = () => {
    navigate('/member');
  }

  const increment = () => {
    countCtx.setCount({
      type: 'increment'
    });
  }

  const decrement = () => {
    countCtx.setCount({
      type: 'decrement'
    });
  }

  const onChange = (value: number) => {
    addCustomNumber(value);
  };

  const onChangeHook = (value: number) => {
    countCtx.setCount({ type: 'customNumber', payload: value });
  };


  return (
    <div style={{ margin: 20, color: ctx.color}}>
      <Button onClick={goTo}>Go To Another Page</Button>
      <h1 style={{ color: ctx.color }}>Home</h1>
      <h1 style={{ color: ctx.color }}>Current Themes = {ctx.currentTheme}</h1>
      <Space>
        <Card title="React Redux" style={{ width: 300, height: 300 }}>
          <h1>Total Count = {countRedux}</h1>
          Input Number :
          <InputNumber min={1}  onChange={onChange} />
          <br/>
          <br/>
          <Button onClick={() => reduxDecrement()}>Decrement (-)</Button>
          <Button onClick={() => reduxIncrement()}>Increment (+)</Button>
        </Card>

        <Card title="React Hooks" style={{ width: 300, height: 300 }}>
          <h1>Total Count = {countCtx.count}</h1>
          Input Number :
          <InputNumber min={1}  onChange={onChangeHook} />
          <br/>
          <br/>
          <Button onClick={decrement}>Decrement (-)</Button>
          <Button onClick={increment}>Increment (+)</Button>
        </Card>
      </Space>
    </div>
  );
};

export default Home;

