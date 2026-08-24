// import Contact from "./components/contact/Contact";
// import InteractiveMonitor from "./components/interactive/InteractiveMonitor";
// import Footer from "./components/layout/Footer";
// import Header from "./components/layout/Header";

// function App() {
//   return (
//     <>
//       <Header />

//       <main>
//         <InteractiveMonitor />
//         <Contact />
//       </main>

//       <Footer />
//     </>
//   );
// }

// export default App;
import Contact from "./components/contact/Contact";
import InteractiveMonitor from "./components/interactive/InteractiveMonitor";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import MobileExperience from "./components/mobile/MobileExperience";

function App() {
  return (
    <>
      {/* =====================================
          DESKTOP
      ====================================== */}

      <div className="hidden lg:block">
        <Header />

        <InteractiveMonitor />
      </div>

      {/* =====================================
          MOBILE
      ====================================== */}

      <div className="lg:hidden">
        <MobileExperience />
      </div>

      {/* =====================================
          CONTACTO COMPARTIDO
      ====================================== */}
      <div className="pb-20 lg:pb-0">
        <Contact />
      </div>

      {/* Footer tradicional solamente desktop.
          En mobile tenemos BottomNavigation. */}

      <div className="hidden lg:block">
        <Footer />
      </div>
    </>
  );
}

export default App;