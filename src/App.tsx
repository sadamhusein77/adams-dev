import { BrowserRouter } from 'react-router-dom';
import Routers from './routes';
import { basenamePath } from './utils/constants';

function App() {
  return (
    <BrowserRouter basename={basenamePath}>
      <Routers />
    </BrowserRouter>
  );
}

export default App;
