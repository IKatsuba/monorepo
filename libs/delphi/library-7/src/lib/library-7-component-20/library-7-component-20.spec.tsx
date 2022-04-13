import { render } from '@testing-library/react';

import Library7Component20 from './library-7-component-20';

describe('Library7Component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library7Component20 />);
    expect(baseElement).toBeTruthy();
  });
});
