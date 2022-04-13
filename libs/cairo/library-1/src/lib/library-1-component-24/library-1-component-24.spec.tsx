import { render } from '@testing-library/react';

import Library1Component24 from './library-1-component-24';

describe('Library1Component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library1Component24 />);
    expect(baseElement).toBeTruthy();
  });
});
