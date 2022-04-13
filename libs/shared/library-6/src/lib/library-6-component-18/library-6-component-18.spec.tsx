import { render } from '@testing-library/react';

import Library6Component18 from './library-6-component-18';

describe('Library6Component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library6Component18 />);
    expect(baseElement).toBeTruthy();
  });
});
