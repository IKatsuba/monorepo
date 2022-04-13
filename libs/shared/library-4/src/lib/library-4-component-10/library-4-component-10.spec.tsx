import { render } from '@testing-library/react';

import Library4Component10 from './library-4-component-10';

describe('Library4Component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library4Component10 />);
    expect(baseElement).toBeTruthy();
  });
});
