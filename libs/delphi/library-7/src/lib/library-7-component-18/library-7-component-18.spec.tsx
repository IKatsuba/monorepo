import { render } from '@testing-library/react';

import Library7Component18 from './library-7-component-18';

describe('Library7Component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library7Component18 />);
    expect(baseElement).toBeTruthy();
  });
});
