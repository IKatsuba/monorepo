import { render } from '@testing-library/react';

import Library2Component10 from './library-2-component-10';

describe('Library2Component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library2Component10 />);
    expect(baseElement).toBeTruthy();
  });
});
