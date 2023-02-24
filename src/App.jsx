import {createElement, useEffect, useState} from "react";
import Sidebar from "./components/sidebar";
import {Resizable} from "re-resizable";

function App() {

  const [height, setHeight] = useState(500);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 p-0">
          <Sidebar/>
        </div>
        <div className="col-md-10 p-0 vh-100">
          <Resizable
            enable={{
              bottom: true
            }}
            size={{width: '100%', height: height}}
            onResizeStop={(e, direction, ref, d) => {
              setHeight(height + d.height)
            }}
            className="bg-info"
            minHeight="30vh"
            maxHeight="90vh"
          >
            asdfdas
          </Resizable>
          <div style={{backgroundColor: 'grey', height: `calc(100vh - ${height}px)` }}>
            asdfas
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
