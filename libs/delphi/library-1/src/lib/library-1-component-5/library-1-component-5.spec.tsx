import { render } from '@testing-library/react';

import Library1Component5 from './library-1-component-5';

describe('Library1Component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library1Component5 />);
    expect(baseElement).toBeTruthy();
  });
});
