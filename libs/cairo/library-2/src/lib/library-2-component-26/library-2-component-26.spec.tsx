import { render } from '@testing-library/react';

import Library2Component26 from './library-2-component-26';

describe('Library2Component26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library2Component26 />);
    expect(baseElement).toBeTruthy();
  });
});
