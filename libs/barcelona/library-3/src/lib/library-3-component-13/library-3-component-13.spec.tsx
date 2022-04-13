import { render } from '@testing-library/react';

import Library3Component13 from './library-3-component-13';

describe('Library3Component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library3Component13 />);
    expect(baseElement).toBeTruthy();
  });
});
