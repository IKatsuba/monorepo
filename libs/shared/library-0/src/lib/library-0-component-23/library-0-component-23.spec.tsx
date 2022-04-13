import { render } from '@testing-library/react';

import Library0Component23 from './library-0-component-23';

describe('Library0Component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library0Component23 />);
    expect(baseElement).toBeTruthy();
  });
});
