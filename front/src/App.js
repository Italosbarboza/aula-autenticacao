import logo from './logo.svg';
import './App.css';

import IndexRoutes from '../src/routes/index';

import { AuthProvider }  from '../src/context/auth';

function App() {
  return (
    <div className="App">
      <AuthProvider>
          <IndexRoutes/>
      </AuthProvider>
    </div>
  );
}

export default App;
