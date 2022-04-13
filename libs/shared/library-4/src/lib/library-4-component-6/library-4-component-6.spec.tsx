import { render } from '@testing-library/react';

import Library4Component6 from './library-4-component-6';

describe('Library4Component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library4Component6 />);
    expect(baseElement).toBeTruthy();
  });
});
