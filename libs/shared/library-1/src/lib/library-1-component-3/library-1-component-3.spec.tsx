import { render } from '@testing-library/react';

import Library1Component3 from './library-1-component-3';

describe('Library1Component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library1Component3 />);
    expect(baseElement).toBeTruthy();
  });
});
