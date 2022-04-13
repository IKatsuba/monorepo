import { render } from '@testing-library/react';

import Library2Component27 from './library-2-component-27';

describe('Library2Component27', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library2Component27 />);
    expect(baseElement).toBeTruthy();
  });
});
