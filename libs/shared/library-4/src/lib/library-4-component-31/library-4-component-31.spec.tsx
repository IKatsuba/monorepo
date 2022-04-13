import { render } from '@testing-library/react';

import Library4Component31 from './library-4-component-31';

describe('Library4Component31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library4Component31 />);
    expect(baseElement).toBeTruthy();
  });
});
