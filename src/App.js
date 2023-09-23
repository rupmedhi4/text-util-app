import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
 import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [text, setText] = useState("light mode");
  const [alert, setAlert] = useState(null)


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1000);

  }


  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      setText("dark mode on")
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode enable", "success")
      document.title = "TextUtil - Dark Mode"
    }
    else {
      setMode("light")
      setText("light mode on")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode enable", "success")
      document.title = "TextUtil - Light Mode"
    }
  }
  return (
    <>
    <div>
      <Router>
        <Navbar title="TextUtil" aboutText="About us" mode={mode} toggleMode={toggleMode} text={text} />

        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>

      </Router>
      </div>
    </>


  )
}

export default App;