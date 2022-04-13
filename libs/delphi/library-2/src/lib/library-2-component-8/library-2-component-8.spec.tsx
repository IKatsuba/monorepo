import { render } from '@testing-library/react';

import Library2Component8 from './library-2-component-8';

describe('Library2Component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library2Component8 />);
    expect(baseElement).toBeTruthy();
  });
});
