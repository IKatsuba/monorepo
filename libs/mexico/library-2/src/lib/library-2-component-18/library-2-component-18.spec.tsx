import { render } from '@testing-library/react';

import Library2Component18 from './library-2-component-18';

describe('Library2Component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library2Component18 />);
    expect(baseElement).toBeTruthy();
  });
});
