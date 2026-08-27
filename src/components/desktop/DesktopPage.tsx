import Contact from "../contact/Contact";
import InteractiveMonitor from "../interactive/InteractiveMonitor";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

function DesktopPage() {
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

export default DesktopPage;
