import { render } from '@testing-library/react';

import SharedLibrary5 from './shared-library-5';

describe('SharedLibrary5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedLibrary5 />);
    expect(baseElement).toBeTruthy();
  });
});
