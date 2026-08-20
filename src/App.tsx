import Contact from "./components/contact/Contact";
import InteractiveMonitor from "./components/interactive/InteractiveMonitor";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

function App() {
  return (
    <>
      <Header />

      <main>
        <InteractiveMonitor />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;