import { render } from '@testing-library/react';

import Library4Component1 from './library-4-component-1';

describe('Library4Component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library4Component1 />);
    expect(baseElement).toBeTruthy();
  });
});
