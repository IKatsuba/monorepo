import { render } from '@testing-library/react';

import Library7Component12 from './library-7-component-12';

describe('Library7Component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library7Component12 />);
    expect(baseElement).toBeTruthy();
  });
});
