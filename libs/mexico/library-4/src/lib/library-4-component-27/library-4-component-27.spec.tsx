import { render } from '@testing-library/react';

import Library4Component27 from './library-4-component-27';

describe('Library4Component27', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library4Component27 />);
    expect(baseElement).toBeTruthy();
  });
});
