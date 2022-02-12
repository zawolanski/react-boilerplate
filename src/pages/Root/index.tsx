import App from '@pages/Home/App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Root = () => (
  <Router>
    <Routes>
      <Route index element={<App />} />
    </Routes>
  </Router>
);

export default Root;
