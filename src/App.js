import Topbar from './components/Topbar';

import { compose } from './contexts/util';
import { withAppContext } from './contexts/AppContext';

const App = () => (
  <div className='min-h-screen mx-auto bg-gradient-to-b from-gray-900 to-gray-800'>
    <Topbar title='Moster, Inc.' />
  </div>
);

const enhance = compose(withAppContext);

export default enhance(App);
