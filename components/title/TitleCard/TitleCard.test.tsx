import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';

import * as stories from './TitleCard.stories';

const { Basic } = composeStories(stories);

describe('TitleCard', () => {
  it('should render basic title card', () => {
    const component = render(<Basic />);

    component.getByText('Basic Title Card');
    component.getByText('Basic title card description');

    expect(component.container.getElementsByTagName('img')[1]).toHaveAttribute(
      'alt',
      `image of the title ${Basic.args?.title?.title}`,
    );
  });
});
