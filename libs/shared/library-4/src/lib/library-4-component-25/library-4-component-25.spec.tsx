import { render } from '@testing-library/react';

import Library4Component25 from './library-4-component-25';

describe('Library4Component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library4Component25 />);
    expect(baseElement).toBeTruthy();
  });
});
