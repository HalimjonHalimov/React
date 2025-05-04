import "./App.css";
import { ThemeProvider } from "./context/ThemeProvider";
import Navbar from "./component/Navbar";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="App">
          <header className="App-header">
            <Navbar />
          </header>
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
