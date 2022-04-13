import { render } from '@testing-library/react';

import Library0Component25 from './library-0-component-25';

describe('Library0Component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library0Component25 />);
    expect(baseElement).toBeTruthy();
  });
});
