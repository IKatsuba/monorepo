import { render } from '@testing-library/react';

import Library7Component23 from './library-7-component-23';

describe('Library7Component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library7Component23 />);
    expect(baseElement).toBeTruthy();
  });
});
