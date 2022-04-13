import { render } from '@testing-library/react';

import Library4Component19 from './library-4-component-19';

describe('Library4Component19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library4Component19 />);
    expect(baseElement).toBeTruthy();
  });
});
