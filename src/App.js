import { ThemeProvider } from "./context/ThemeProvider";
import Navbar from "./component/Navbar";
import { AuthProvider } from "./context/AuthProvider";

import "./App.css";
import Todo from "./component/Todo";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="App">
          <header className="App-header">
            <Navbar />
            <Todo />
          </header>
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
