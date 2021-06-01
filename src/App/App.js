import "./App.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { CssBaseline, makeStyles } from "@material-ui/core";

const usestyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

function App() {
  const classes = usestyles();
  return (
    <>
      <Sidebar />
      <div className={classes.appMain}>
        <Header />
      </div>
      <CssBaseline />
    </>
  );
}

export default App;
