import { render } from '@testing-library/react';

import Library7Component24 from './library-7-component-24';

describe('Library7Component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library7Component24 />);
    expect(baseElement).toBeTruthy();
  });
});
