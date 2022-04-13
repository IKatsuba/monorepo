import { render } from '@testing-library/react';

import Library2Component22 from './library-2-component-22';

describe('Library2Component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library2Component22 />);
    expect(baseElement).toBeTruthy();
  });
});
