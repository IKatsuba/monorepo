import { render } from '@testing-library/react';

import Library0Component10 from './library-0-component-10';

describe('Library0Component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library0Component10 />);
    expect(baseElement).toBeTruthy();
  });
});
