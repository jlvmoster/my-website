import { compose } from './contexts/util';
import { withAppContext } from './contexts/AppContext';

const App = () => (
  <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
    <h1 className='text-3xl font-bold underline'>Hello world!</h1>
  </div>
);

const enhance = compose(withAppContext);

export default enhance(App);
