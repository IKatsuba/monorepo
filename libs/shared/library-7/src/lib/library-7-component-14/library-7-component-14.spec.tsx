import { render } from '@testing-library/react';

import Library7Component14 from './library-7-component-14';

describe('Library7Component14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library7Component14 />);
    expect(baseElement).toBeTruthy();
  });
});
