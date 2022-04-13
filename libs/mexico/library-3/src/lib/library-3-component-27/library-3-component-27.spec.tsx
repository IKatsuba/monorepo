import { render } from '@testing-library/react';

import Library3Component27 from './library-3-component-27';

describe('Library3Component27', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library3Component27 />);
    expect(baseElement).toBeTruthy();
  });
});
