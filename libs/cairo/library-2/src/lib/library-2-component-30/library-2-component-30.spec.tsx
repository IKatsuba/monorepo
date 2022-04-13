import { render } from '@testing-library/react';

import Library2Component30 from './library-2-component-30';

describe('Library2Component30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library2Component30 />);
    expect(baseElement).toBeTruthy();
  });
});
