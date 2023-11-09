import logo from "./logo.svg";
import "./App.css";
import ClassComponent from "./DemoComponent/ClassComponent";
import FuntionComponent from "./DemoComponent/FuntionComponent";

import Ex_Layout from "./Ex_Layout";
import DataBinDing from "./DataBinDing";
import DemoState from "./DemoState/DemoState";
import EventHandling from "./EventHandling/EventHandling";
import Ex_Car from "./Ex_Car/Ex_Car";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import DemoProps from "./DemoProps/DemoProps";
import Ex_Phone from "./Ex_Phone/Ex_Phone";

function App() {
  return (
    <div className="container">
      {/* Welcome to bc54 */}
      {/* <ClassComponent/>
          <FuntionComponent/> */}
      {/* <Ex_Layout />
      <DataBinDing /> */}
      {/* <DemoState /> */}
      {/* <EventHandling /> */}
      {/* <Ex_Car /> */}
      {/* <RenderWithMap /> */}
      {/* <DemoProps /> */}
      <Ex_Phone />
    </div>
  );
}

export default App;
