import { render } from '@testing-library/react';

import Library4Component0 from './library-4-component-0';

describe('Library4Component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library4Component0 />);
    expect(baseElement).toBeTruthy();
  });
});
