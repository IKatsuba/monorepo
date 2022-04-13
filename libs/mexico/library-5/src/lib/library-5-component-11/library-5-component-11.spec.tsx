import { render } from '@testing-library/react';

import Library5Component11 from './library-5-component-11';

describe('Library5Component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Library5Component11 />);
    expect(baseElement).toBeTruthy();
  });
});
