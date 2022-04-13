import { render } from '@testing-library/react';

import Library2Component7 from './library-2-component-7';

describe('Library2Component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library2Component7 />);
    expect(baseElement).toBeTruthy();
  });
});
