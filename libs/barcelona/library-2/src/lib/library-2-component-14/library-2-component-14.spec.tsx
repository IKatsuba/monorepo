import { render } from '@testing-library/react';

import Library2Component14 from './library-2-component-14';

describe('Library2Component14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library2Component14 />);
    expect(baseElement).toBeTruthy();
  });
});
