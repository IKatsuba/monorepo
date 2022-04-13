import { render } from '@testing-library/react';

import Library5Component22 from './library-5-component-22';

describe('Library5Component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library5Component22 />);
    expect(baseElement).toBeTruthy();
  });
});
