import CharacterCounter from '@components/demos/CharacterCounter';
import { createBrowserRouter } from 'react-router-dom';
import App from 'src/App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>error....</div>,
    children: [
      {
        path: 'CharacterCounter',
        element: <CharacterCounter />,
      },
    ],
  },
]);

export default router;
