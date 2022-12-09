import './styles/styles.css';

import { Routing } from '@pages';

import { withProviders } from './providers';

export const App = withProviders(() => {
  return <Routing />;
});
