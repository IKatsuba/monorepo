import { render } from '@testing-library/react';

import Library4Component7 from './library-4-component-7';

describe('Library4Component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library4Component7 />);
    expect(baseElement).toBeTruthy();
  });
});
