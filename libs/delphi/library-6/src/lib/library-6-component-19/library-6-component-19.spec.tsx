import { render } from '@testing-library/react';

import Library6Component19 from './library-6-component-19';

describe('Library6Component19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library6Component19 />);
    expect(baseElement).toBeTruthy();
  });
});
