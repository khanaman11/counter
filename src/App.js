import Context from "./components/contextApi/Context";
import Count from "./components/count/Count";
import Val from "./components/val/Val";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Context>
      <div className="container">
        <div className="row w-50 text-center m-auto bg-secondary my-5">
          <div className="col-6 bg-success">
            <Count />
          </div>
          <div className="col-6 bg-info">
            <Val />
          </div>
        </div>
      </div>
    </Context>
  );
}

export default App;
