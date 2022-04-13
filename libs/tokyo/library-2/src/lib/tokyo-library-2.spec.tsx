import { render } from '@testing-library/react';

import TokyoLibrary2 from './tokyo-library-2';

describe('TokyoLibrary2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TokyoLibrary2 />);
    expect(baseElement).toBeTruthy();
  });
});
