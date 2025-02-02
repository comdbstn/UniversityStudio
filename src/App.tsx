import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UniversityStudio from './pages/UniversityStudio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UniversityStudio />} />
      </Routes>
    </Router>
  );
}

export default App; 
