import { render } from '@testing-library/react';

import Library1Component12 from './library-1-component-12';

describe('Library1Component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library1Component12 />);
    expect(baseElement).toBeTruthy();
  });
});
