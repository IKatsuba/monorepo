import { render } from '@testing-library/react';

import Library5Component27 from './library-5-component-27';

describe('Library5Component27', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library5Component27 />);
    expect(baseElement).toBeTruthy();
  });
});
