import Sensor from './pages/Sensor';
import NotFoundPage from './pages/NotFoundPage';

const routes = [
  {
    path: '/sensor/:sensorId',
    component: <Sensor />,
  },
  {
		path: '*',
		component: <NotFoundPage />,
	},
];

export default routes;
