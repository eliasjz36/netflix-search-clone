import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';

import * as stories from './Alert.stories';

const { Error, Success } = composeStories(stories);

describe('Alert', () => {
  it('should render error alert', () => {
    const component = render(<Error {...Error.args} />);

    const alert = component.getByRole('alert');

    expect(alert).toHaveTextContent('Error message');
    expect(alert).toHaveClass('bg-red-100');
  });

  it('should render success alert', () => {
    const component = render(<Success {...Success.args} />);

    const alert = component.getByRole('alert');

    expect(alert).toHaveTextContent('Success message');
    expect(alert).toHaveClass('bg-green-100');
  });
});
