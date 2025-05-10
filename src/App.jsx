import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import FallingTextEditor from "./components/FallingTextEditor/FallingTextEditor.jsx";
import ScrollingTextEditor from "./components/ScrollingTextEditor/ScrollingTextEditor.jsx";

function App() {


    return (
        <div className="page">
            <FallingTextEditor/>
            <ScrollingTextEditor/>
        </div>
    );
}

export default App;
