import { render } from '@testing-library/react';

import Library4Component9 from './library-4-component-9';

describe('Library4Component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library4Component9 />);
    expect(baseElement).toBeTruthy();
  });
});
