import { render } from '@testing-library/react';

import DelphiLibrary5 from './delphi-library-5';

describe('DelphiLibrary5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DelphiLibrary5 />);
    expect(baseElement).toBeTruthy();
  });
});
