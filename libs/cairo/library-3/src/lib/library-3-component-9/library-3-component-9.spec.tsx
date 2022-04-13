import { render } from '@testing-library/react';

import Library3Component9 from './library-3-component-9';

describe('Library3Component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library3Component9 />);
    expect(baseElement).toBeTruthy();
  });
});
