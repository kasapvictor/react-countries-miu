import { Provider } from 'react-redux';

import { store } from '../store';

// eslint-disable-next-line react/display-name
export const withStore = (component) => () => <Provider store={store}>{component()}</Provider>;
