import styled from 'styled-components';
import { rgba } from 'polished';

const Wrapper = styled.div`
  height: 2.6rem;

  .url-input-group {
    border: ${(props) => props.theme.requestTabPanel.url.border};
    border-radius: ${(props) => props.theme.border.radius.md};
    background: ${(props) => props.theme.requestTabPanel.url.bg};
    flex: 1;
    min-width: 0;
    transition: border-color 0.15s ease, box-shadow 0.15s ease;

    &:hover {
      border-color: ${(props) => props.theme.border.border3};
    }

    &:focus-within {
      border-color: ${(props) => rgba(props.theme.brand, 0.7)};
      box-shadow: 0 0 0 3px ${(props) => rgba(props.theme.brand, 0.14)};
    }
  }

  /* A wider Send button anchors the bar; the shared SendButton keeps its own min-width elsewhere. */
  > div:last-child {
    min-width: 5.5rem;

    button {
      border-radius: ${(props) => props.theme.border.radius.md};
      font-weight: 600;
      letter-spacing: 0.2px;
    }
  }
`;

export default Wrapper;
