import { render } from '@testing-library/react';

import Library6Component30 from './library-6-component-30';

describe('Library6Component30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library6Component30 />);
    expect(baseElement).toBeTruthy();
  });
});
