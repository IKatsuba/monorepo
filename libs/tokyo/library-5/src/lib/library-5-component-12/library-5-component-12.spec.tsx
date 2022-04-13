import { render } from '@testing-library/react';

import Library5Component12 from './library-5-component-12';

describe('Library5Component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library5Component12 />);
    expect(baseElement).toBeTruthy();
  });
});
