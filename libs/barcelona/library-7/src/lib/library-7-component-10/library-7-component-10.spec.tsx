import { render } from '@testing-library/react';

import Library7Component10 from './library-7-component-10';

describe('Library7Component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library7Component10 />);
    expect(baseElement).toBeTruthy();
  });
});
