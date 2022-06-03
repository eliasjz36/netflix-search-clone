import { RouterContext } from 'next/dist/shared/lib/router-context';

import { composeStories } from '@storybook/react';
import { fireEvent, render } from '@testing-library/react';

import createMockRouter from '@utils/createMockRouter';

import * as stories from './SearchBar.stories';

const { Basic } = composeStories(stories);

describe('SearchBar', () => {
  let component: ReturnType<typeof render>;

  beforeEach(() => {
    component = render(
      <RouterContext.Provider value={createMockRouter({})}>
        <Basic />
      </RouterContext.Provider>,
    );
  });

  it('should render search bar with placeholder, search button and close button', () => {
    const searchInput = component.container.getElementsByTagName('input')[0];

    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute(
      'placeholder',
      'Titles, actors, genres',
    );
    expect(
      component.container.getElementsByTagName('button')[0],
    ).toBeInTheDocument();
    expect(
      component.container.getElementsByTagName('button')[1],
    ).toBeInTheDocument();
  });

  it('should update search bar on change', () => {
    const searchInput = component.container.getElementsByTagName('input')[0];

    fireEvent.change(searchInput, { target: { value: 'test' } });

    expect(searchInput.value).toBe('test');
  });

  it('should clear search bar on click close button', () => {
    const searchInput = component.container.getElementsByTagName('input')[0];
    const closeButton = component.container.getElementsByTagName('button')[1];

    fireEvent.change(searchInput, { target: { value: 'test' } });
    fireEvent.click(closeButton);

    expect(searchInput.value).toBe('');
  });
});
