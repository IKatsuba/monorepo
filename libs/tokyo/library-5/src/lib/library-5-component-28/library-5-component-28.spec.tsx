import { render } from '@testing-library/react';

import Library5Component28 from './library-5-component-28';

describe('Library5Component28', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library5Component28 />);
    expect(baseElement).toBeTruthy();
  });
});
