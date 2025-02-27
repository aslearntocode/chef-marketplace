import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <Router>
      <Routes>
        // ... existing routes ...
        <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App; 