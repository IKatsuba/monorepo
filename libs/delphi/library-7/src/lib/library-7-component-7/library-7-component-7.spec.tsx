import { render } from '@testing-library/react';

import Library7Component7 from './library-7-component-7';

describe('Library7Component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library7Component7 />);
    expect(baseElement).toBeTruthy();
  });
});
