import { render } from '@testing-library/react';

import Library1Component10 from './library-1-component-10';

describe('Library1Component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library1Component10 />);
    expect(baseElement).toBeTruthy();
  });
});
