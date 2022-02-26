import TodoList from "./components/TodoList";
import './styles/animate.min.css'
import './styles/app.min.css'
import './styles/bootstrap.min.css'

function App() {
  return (
    <div className="container">
      <div className="layout-wrapper">
        <div className="main-content">
          <div className="page-content">
            <TodoList/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
