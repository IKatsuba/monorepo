import { render } from '@testing-library/react';

import Library0Component9 from './library-0-component-9';

describe('Library0Component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library0Component9 />);
    expect(baseElement).toBeTruthy();
  });
});
