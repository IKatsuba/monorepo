import { render } from '@testing-library/react';

import Library2Component4 from './library-2-component-4';

describe('Library2Component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library2Component4 />);
    expect(baseElement).toBeTruthy();
  });
});
