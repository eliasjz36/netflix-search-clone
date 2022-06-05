import { RouterContext } from 'next/dist/shared/lib/router-context';

import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';

import createMockRouter from '@utils/createMockRouter';

import * as stories from './Navbar.stories';

const { Basic } = composeStories(stories);

describe('Navbar', () => {
  let component: ReturnType<typeof render>;

  beforeEach(() => {
    component = render(
      <RouterContext.Provider value={createMockRouter({})}>
        <Basic />
      </RouterContext.Provider>,
    );
  });

  it('should render basic navbar', () => {
    const navbar = component.container.getElementsByTagName('nav');

    expect(navbar).toBeTruthy();
    expect(navbar).toHaveLength(1);
  });

  it('should render navbar with search bar, links, logo and profile', () => {
    expect(component.container.getElementsByTagName('img')[0]).toBeTruthy();
    expect(component.container.getElementsByTagName('li').length).toBe(5);
    expect(component.container.getElementsByTagName('input')).toBeTruthy();
    expect(component.container.getElementsByTagName('img')[1].alt).toBe(
      'profile photo',
    );
  });
});
