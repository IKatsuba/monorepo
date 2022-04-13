import { render } from '@testing-library/react';

import Library1Component20 from './library-1-component-20';

describe('Library1Component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library1Component20 />);
    expect(baseElement).toBeTruthy();
  });
});
