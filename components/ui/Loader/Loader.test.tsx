import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';

import * as stories from './Loader.stories';

const { Red, Green, Purple } = composeStories(stories);

describe('Loader', () => {
  it('should render Red loader', () => {
    const component = render(<Red />);

    const loader = component.container.getElementsByTagName('svg');

    expect(loader.length).toBe(1);
    expect(loader[0].getAttribute('fill')).toBe('red');
  });

  it('should render Green loader', () => {
    const component = render(<Green />);

    const loader = component.container.getElementsByTagName('svg');

    expect(loader.length).toBe(1);
    expect(loader[0].getAttribute('fill')).toBe('green');
  });
  it('should render Purple loader', () => {
    const component = render(<Purple />);

    const loader = component.container.getElementsByTagName('svg');

    expect(loader.length).toBe(1);
    expect(loader[0].getAttribute('fill')).toBe('purple');
  });
});
