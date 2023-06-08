import Header from "./components/Header";
import Home from "./pages/Home";
import Theme from "./components/Theme";
function App() {
  return (
    <>
      <Theme>
        <Header></Header>
        <Home />
      </Theme>
    </>
  );
}

export default App;
