import { render } from '@testing-library/react';

import Library1Component6 from './library-1-component-6';

describe('Library1Component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library1Component6 />);
    expect(baseElement).toBeTruthy();
  });
});
