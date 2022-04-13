import { render } from '@testing-library/react';

import Library3Component0 from './library-3-component-0';

describe('Library3Component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library3Component0 />);
    expect(baseElement).toBeTruthy();
  });
});
