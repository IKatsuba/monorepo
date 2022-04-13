import { render } from '@testing-library/react';

import Library4Component11 from './library-4-component-11';

describe('Library4Component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library4Component11 />);
    expect(baseElement).toBeTruthy();
  });
});
