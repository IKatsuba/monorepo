import { render } from '@testing-library/react';

import SharedLibrary3 from './shared-library-3';

describe('SharedLibrary3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedLibrary3 />);
    expect(baseElement).toBeTruthy();
  });
});
