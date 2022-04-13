import { render } from '@testing-library/react';

import Library7Component16 from './library-7-component-16';

describe('Library7Component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library7Component16 />);
    expect(baseElement).toBeTruthy();
  });
});
