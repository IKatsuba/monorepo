import { render } from '@testing-library/react';

import Library0Component12 from './library-0-component-12';

describe('Library0Component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library0Component12 />);
    expect(baseElement).toBeTruthy();
  });
});
