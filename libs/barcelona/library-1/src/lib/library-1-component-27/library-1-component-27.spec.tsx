import { render } from '@testing-library/react';

import Library1Component27 from './library-1-component-27';

describe('Library1Component27', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library1Component27 />);
    expect(baseElement).toBeTruthy();
  });
});
