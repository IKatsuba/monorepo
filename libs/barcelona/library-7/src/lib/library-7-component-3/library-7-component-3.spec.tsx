import { render } from '@testing-library/react';

import Library7Component3 from './library-7-component-3';

describe('Library7Component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library7Component3 />);
    expect(baseElement).toBeTruthy();
  });
});
