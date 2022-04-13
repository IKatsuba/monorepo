import { render } from '@testing-library/react';

import SharedLibrary0 from './shared-library-0';

describe('SharedLibrary0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedLibrary0 />);
    expect(baseElement).toBeTruthy();
  });
});
