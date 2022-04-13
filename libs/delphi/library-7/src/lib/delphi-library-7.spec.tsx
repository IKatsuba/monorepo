import { render } from '@testing-library/react';

import DelphiLibrary7 from './delphi-library-7';

describe('DelphiLibrary7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DelphiLibrary7 />);
    expect(baseElement).toBeTruthy();
  });
});
