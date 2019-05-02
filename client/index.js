import React from 'react';
import { render } from 'react-dom';
import App from '../imports/startup/client/routes';

import './index.scss';
import './semantic.scss';

render(<App />, document.getElementById('app'));