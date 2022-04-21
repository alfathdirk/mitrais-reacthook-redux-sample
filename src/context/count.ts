import React, { useContext } from "react";
const CountContext = React.createContext({ count:0, setCount: (v: any) => {}});

export default CountContext;
