import { render } from '@testing-library/react';

import Library2Component3 from './library-2-component-3';

describe('Library2Component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library2Component3 />);
    expect(baseElement).toBeTruthy();
  });
});
