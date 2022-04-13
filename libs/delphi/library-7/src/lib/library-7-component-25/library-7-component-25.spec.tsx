import { render } from '@testing-library/react';

import Library7Component25 from './library-7-component-25';

describe('Library7Component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library7Component25 />);
    expect(baseElement).toBeTruthy();
  });
});
