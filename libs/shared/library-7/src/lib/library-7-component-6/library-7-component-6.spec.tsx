import { render } from '@testing-library/react';

import Library7Component6 from './library-7-component-6';

describe('Library7Component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library7Component6 />);
    expect(baseElement).toBeTruthy();
  });
});
