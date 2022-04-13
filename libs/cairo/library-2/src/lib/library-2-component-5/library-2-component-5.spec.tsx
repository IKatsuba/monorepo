import { render } from '@testing-library/react';

import Library2Component5 from './library-2-component-5';

describe('Library2Component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library2Component5 />);
    expect(baseElement).toBeTruthy();
  });
});
