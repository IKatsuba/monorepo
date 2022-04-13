import { render } from '@testing-library/react';

import SharedLibrary6 from './shared-library-6';

describe('SharedLibrary6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedLibrary6 />);
    expect(baseElement).toBeTruthy();
  });
});
