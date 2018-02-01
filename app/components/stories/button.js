import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('button', module)
  .add('with a text', () => (
    <button onClick={action('click')}>My First Button</button>
  ))
  .add('with no text', () => (
    <button></button>
  ));
