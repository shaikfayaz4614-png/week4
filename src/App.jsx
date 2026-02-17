import "./App.css";
import Layout from "./components/Layout";
import InputDemo from "./components/InputDemo";

const App = () => {
  return (
    <Layout>
      <h1 className="page-title">
        Styling & Composition Demo
      </h1>

      <InputDemo />
    </Layout>
  );
};

export default App;