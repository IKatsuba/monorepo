import { render } from '@testing-library/react';

import TokyoLibrary6 from './tokyo-library-6';

describe('TokyoLibrary6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TokyoLibrary6 />);
    expect(baseElement).toBeTruthy();
  });
});
