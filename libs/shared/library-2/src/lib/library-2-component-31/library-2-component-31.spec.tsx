import { render } from '@testing-library/react';

import Library2Component31 from './library-2-component-31';

describe('Library2Component31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library2Component31 />);
    expect(baseElement).toBeTruthy();
  });
});
