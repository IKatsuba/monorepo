import { render } from '@testing-library/react';

import Library7Component22 from './library-7-component-22';

describe('Library7Component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library7Component22 />);
    expect(baseElement).toBeTruthy();
  });
});
