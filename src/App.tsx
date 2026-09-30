import Navbar from "./components/Navbar";
import Summary from "./components/Summary";
import Transactions from "./components/Transactions";

function App() {
  return (
    <div className="min-h-screen ">
      <div className="mx-auto w-full px-5 pb-8 sm:px-6 md:w-[80%] lg:w-[60%]">
        <Navbar />

        <Summary />

        <Transactions/>
      </div>
    </div>
  );
}

export default App;
