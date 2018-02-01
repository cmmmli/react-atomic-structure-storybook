import { configure } from '@kadira/storybook';

function loadStories() {
  require('../app/components/stories/button');
}

configure(loadStories, module);
