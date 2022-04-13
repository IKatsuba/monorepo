import { render } from '@testing-library/react';

import Library3Component23 from './library-3-component-23';

describe('Library3Component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library3Component23 />);
    expect(baseElement).toBeTruthy();
  });
});
