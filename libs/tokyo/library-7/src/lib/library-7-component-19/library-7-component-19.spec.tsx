import { render } from '@testing-library/react';

import Library7Component19 from './library-7-component-19';

describe('Library7Component19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library7Component19 />);
    expect(baseElement).toBeTruthy();
  });
});
