import { render } from '@testing-library/react';

import Library6Component25 from './library-6-component-25';

describe('Library6Component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library6Component25 />);
    expect(baseElement).toBeTruthy();
  });
});
