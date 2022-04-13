import { render } from '@testing-library/react';

import Library5Component4 from './library-5-component-4';

describe('Library5Component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library5Component4 />);
    expect(baseElement).toBeTruthy();
  });
});
