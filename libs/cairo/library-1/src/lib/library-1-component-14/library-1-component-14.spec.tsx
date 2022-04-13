import { render } from '@testing-library/react';

import Library1Component14 from './library-1-component-14';

describe('Library1Component14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library1Component14 />);
    expect(baseElement).toBeTruthy();
  });
});
