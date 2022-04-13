import { render } from '@testing-library/react';

import Library3Component10 from './library-3-component-10';

describe('Library3Component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library3Component10 />);
    expect(baseElement).toBeTruthy();
  });
});
