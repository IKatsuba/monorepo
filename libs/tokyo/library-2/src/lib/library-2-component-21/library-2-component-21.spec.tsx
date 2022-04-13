import { render } from '@testing-library/react';

import Library2Component21 from './library-2-component-21';

describe('Library2Component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library2Component21 />);
    expect(baseElement).toBeTruthy();
  });
});
