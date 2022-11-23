import Sensor1 from './pages/Sensor1';
import Sensor2 from './pages/Sensor2';
import Sensor3 from './pages/Sensor3';
import Sensor4 from './pages/Sensor4';
import NotFoundPage from './pages/NotFoundPage';

const routes = [
  {
    path: "/",
    component: <Sensor1/>,
  },
  {
    path: "/sensor2",
    component: <Sensor2/>,
  },
  {
    path: "/sensor3",
    component: <Sensor3/>,
  },
  {
    path: "/sensor4",
    component: <Sensor4/>,
  },
  {
		path: '*',
		component: <NotFoundPage />,
	},
];

export default routes;
