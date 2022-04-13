import { render } from '@testing-library/react';

import Library1Component16 from './library-1-component-16';

describe('Library1Component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library1Component16 />);
    expect(baseElement).toBeTruthy();
  });
});
