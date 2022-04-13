import { render } from '@testing-library/react';

import Library4Component3 from './library-4-component-3';

describe('Library4Component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library4Component3 />);
    expect(baseElement).toBeTruthy();
  });
});
