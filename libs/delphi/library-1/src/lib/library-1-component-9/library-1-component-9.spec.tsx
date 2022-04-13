import { render } from '@testing-library/react';

import Library1Component9 from './library-1-component-9';

describe('Library1Component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library1Component9 />);
    expect(baseElement).toBeTruthy();
  });
});
