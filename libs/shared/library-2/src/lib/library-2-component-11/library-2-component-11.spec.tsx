import { render } from '@testing-library/react';

import Library2Component11 from './library-2-component-11';

describe('Library2Component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library2Component11 />);
    expect(baseElement).toBeTruthy();
  });
});
