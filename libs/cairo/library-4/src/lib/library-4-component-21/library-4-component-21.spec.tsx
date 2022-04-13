import { render } from '@testing-library/react';

import Library4Component21 from './library-4-component-21';

describe('Library4Component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library4Component21 />);
    expect(baseElement).toBeTruthy();
  });
});
