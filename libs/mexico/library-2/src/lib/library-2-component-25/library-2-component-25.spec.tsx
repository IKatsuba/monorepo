import { render } from '@testing-library/react';

import Library2Component25 from './library-2-component-25';

describe('Library2Component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library2Component25 />);
    expect(baseElement).toBeTruthy();
  });
});
