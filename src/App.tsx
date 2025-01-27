import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Landing } from "./pages/landing/Landing";

function App() {
  return (
    <div className="app">
      <main className="content">
        <Header />
        <Landing />
      </main>
        <Footer />
    </div>
  );
}

export default App;
