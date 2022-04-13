import { render } from '@testing-library/react';

import Library2Component6 from './library-2-component-6';

describe('Library2Component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library2Component6 />);
    expect(baseElement).toBeTruthy();
  });
});
