import { render } from '@testing-library/react';

import Library1Component23 from './library-1-component-23';

describe('Library1Component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library1Component23 />);
    expect(baseElement).toBeTruthy();
  });
});
