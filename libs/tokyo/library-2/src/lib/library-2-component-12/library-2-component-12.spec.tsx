import { render } from '@testing-library/react';

import Library2Component12 from './library-2-component-12';

describe('Library2Component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library2Component12 />);
    expect(baseElement).toBeTruthy();
  });
});
