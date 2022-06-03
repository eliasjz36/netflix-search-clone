import { RouterContext } from 'next/dist/shared/lib/router-context';

import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';

import createMockRouter from '@utils/createMockRouter';

import * as stories from './TitleList.stories';

const { Basic } = composeStories(stories);

describe('TitleList', () => {
  let component: ReturnType<typeof render>;

  beforeEach(() => {
    component = render(
      <RouterContext.Provider value={createMockRouter({})}>
        <Basic />
      </RouterContext.Provider>,
    );
  });

  it('should render title list', () => {
    expect(
      component.container.getElementsByTagName('div')[0],
    ).toBeInTheDocument();
  });
});
