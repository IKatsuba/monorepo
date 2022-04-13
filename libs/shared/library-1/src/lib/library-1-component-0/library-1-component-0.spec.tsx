import { render } from '@testing-library/react';

import Library1Component0 from './library-1-component-0';

describe('Library1Component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library1Component0 />);
    expect(baseElement).toBeTruthy();
  });
});
