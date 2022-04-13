import { render } from '@testing-library/react';

import Library4Component22 from './library-4-component-22';

describe('Library4Component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library4Component22 />);
    expect(baseElement).toBeTruthy();
  });
});
