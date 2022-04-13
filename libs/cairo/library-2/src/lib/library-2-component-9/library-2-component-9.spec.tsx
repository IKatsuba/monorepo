import { render } from '@testing-library/react';

import Library2Component9 from './library-2-component-9';

describe('Library2Component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library2Component9 />);
    expect(baseElement).toBeTruthy();
  });
});
