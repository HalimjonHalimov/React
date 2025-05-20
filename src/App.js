import Navbar from "./component/Navbar";

import "./App.css";
import Todo from "./component/Todo";
import MovieApp from "./component/MovieApp/movie-app";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Navbar />
        <Todo /> */}
        <MovieApp />
      </header>
    </div>
  );
}

export default App;
