import InteractiveMonitor from "./components/interactive/InteractiveMonitor";
import Header from "./components/layout/Header";

function App() {
  return (
    <div className="min-h-screen bg-[#f6f1e7]">
      <Header />

      <main>
        <InteractiveMonitor />
      </main>
    </div>
  );
}

export default App;