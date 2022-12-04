# SORT BY NAME
```js
const sortByName = (collection) =>
  collection.sort((a, b) => {
    const nameA = a.name.common;
    const nameB = b.name.common;
    if (nameA > nameB) {
      return 1;
    }
    if (nameA < nameB) {
      return -1;
    }
    return 0;
  });
```

# LAZY & SUSPENSE
```js
// Manual https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52
import React, { Suspense } from 'react';
import { Router } from '@reach/router';
import Loading from './Loading';

const Home = React.lazy(() => import('./Home'));
const Dashboard = React.lazy(() => import('./Dashboard'));
const Overview = React.lazy(() => import('./Overview'));
const History = React.lazy(() => import('./History'));
const NotFound = React.lazy(() => import('./NotFound'));

function App() {
    return (
        <div>
            <Suspense fallback={<Loading />}>
                <Router>
                    <Home path="/" />
                    <Dashboard path="dashboard">
                        <Overview path="/" />
                        <History path="/history" />
                    </Dashboard>
                    <NotFound default />
                </Router>
            </Suspense>
        </div>
    )
}

```