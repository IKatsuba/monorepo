import { render } from '@testing-library/react';

import DelphiLibrary2 from './delphi-library-2';

describe('DelphiLibrary2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DelphiLibrary2 />);
    expect(baseElement).toBeTruthy();
  });
});
