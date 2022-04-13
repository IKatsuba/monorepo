import { render } from '@testing-library/react';

import Library2Component19 from './library-2-component-19';

describe('Library2Component19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library2Component19 />);
    expect(baseElement).toBeTruthy();
  });
});
