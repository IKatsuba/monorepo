import { render } from '@testing-library/react';

import Library7Component21 from './library-7-component-21';

describe('Library7Component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library7Component21 />);
    expect(baseElement).toBeTruthy();
  });
});
