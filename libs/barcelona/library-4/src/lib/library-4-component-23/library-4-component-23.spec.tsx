import { render } from '@testing-library/react';

import Library4Component23 from './library-4-component-23';

describe('Library4Component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library4Component23 />);
    expect(baseElement).toBeTruthy();
  });
});
