import { render } from '@testing-library/react';

import Library3Component6 from './library-3-component-6';

describe('Library3Component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library3Component6 />);
    expect(baseElement).toBeTruthy();
  });
});
