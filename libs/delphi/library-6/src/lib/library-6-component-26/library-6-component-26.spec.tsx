import { render } from '@testing-library/react';

import Library6Component26 from './library-6-component-26';

describe('Library6Component26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library6Component26 />);
    expect(baseElement).toBeTruthy();
  });
});
