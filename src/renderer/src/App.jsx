import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage'

function App() {
  const ipcHandle = () => window.Electron.ipcRenderer.send('ping')

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App

