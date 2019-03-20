import { configure } from '@storybook/react';

import '../src/index.css';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

const req = require.context('../src', true, /\.stories\.jsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
