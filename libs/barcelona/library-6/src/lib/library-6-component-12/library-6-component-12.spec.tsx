import { render } from '@testing-library/react';

import Library6Component12 from './library-6-component-12';

describe('Library6Component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library6Component12 />);
    expect(baseElement).toBeTruthy();
  });
});
