import { composeStories } from '@storybook/react';
import { fireEvent, render } from '@testing-library/react';

import * as stories from './Dropdown.stories';

const { Basic } = composeStories(stories);

describe('Dropdown', () => {
  let component: ReturnType<typeof render>;

  beforeEach(() => {
    component = render(<Basic />);
  });

  it('should render basic dropdown', () => {
    component.getByText('Dropdown');
  });

  it('should render dropdown options after click', () => {
    const button = component.getByText('Dropdown');

    fireEvent.click(button);

    const options = component.container.getElementsByTagName('li');

    expect(options.length).toBe(3);
    expect(options[0].textContent).toBe('Option 1');
    expect(options[1].textContent).toBe('Option 2');
    expect(options[2].textContent).toBe('Option 3');
  });
});
