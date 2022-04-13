import { render } from '@testing-library/react';

import Library1Component13 from './library-1-component-13';

describe('Library1Component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library1Component13 />);
    expect(baseElement).toBeTruthy();
  });
});
