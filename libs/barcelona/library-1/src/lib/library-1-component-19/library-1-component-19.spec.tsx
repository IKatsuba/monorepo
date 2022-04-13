import { render } from '@testing-library/react';

import Library1Component19 from './library-1-component-19';

describe('Library1Component19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library1Component19 />);
    expect(baseElement).toBeTruthy();
  });
});
