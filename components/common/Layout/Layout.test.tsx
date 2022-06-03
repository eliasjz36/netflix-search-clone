import { RouterContext } from 'next/dist/shared/lib/router-context';

import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';

import createMockRouter from '@utils/createMockRouter';

import * as stories from './Layout.stories';

const { Basic } = composeStories(stories);

describe('Layout', () => {
  it('should render layout with navbar and footer', () => {
    const { container } = render(
      <RouterContext.Provider value={createMockRouter({})}>
        <Basic />
      </RouterContext.Provider>,
    );

    const navbar = container.getElementsByTagName('nav');
    const footer = container.getElementsByTagName('footer');

    expect(navbar).toBeTruthy();
    expect(footer).toBeTruthy();

    expect(navbar).toHaveLength(1);
    expect(footer).toHaveLength(1);
  });
});
