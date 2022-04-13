import { render } from '@testing-library/react';

import Library7Component9 from './library-7-component-9';

describe('Library7Component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library7Component9 />);
    expect(baseElement).toBeTruthy();
  });
});
