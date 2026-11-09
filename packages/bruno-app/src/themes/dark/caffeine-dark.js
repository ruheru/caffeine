// Caffeine (dark) — cool near-black surfaces with a soft indigo accent.

import { merge } from 'lodash';
import { mix, rgba } from 'polished';
import darkTheme from './dark';

const BG = '#0b0c10';
const BG_ALT = '#12141a';
const BG_HIGHLIGHT = '#232733';
const FG = '#e6e8ee';
const GREY = '#8b90a0';

const colors = {
  BG,
  BG_ALT,
  FG,
  GREY,

  INDIGO: '#7c7cff',
  INDIGO_SOLID: '#6366f1',
  INDIGO_LIGHT: '#a5a5ff',
  RED: '#f87171',
  GREEN: '#4ade80',
  TEAL: '#2dd4bf',
  CYAN: '#67e8f9',
  BLUE: '#60a5fa',
  SKY: '#7dd3fc',
  VIOLET: '#c084fc',
  PINK: '#f9a8d4',
  YELLOW: '#fcd34d',

  CRUST: mix(0.1, BG_HIGHLIGHT, BG_ALT),
  SURFACE0: mix(0.3, BG_HIGHLIGHT, BG_ALT),
  SURFACE1: mix(0.65, BG_HIGHLIGHT, BG_ALT),
  SURFACE2: BG_HIGHLIGHT,

  BORDER0: mix(0.25, BG_HIGHLIGHT, BG_ALT),
  BORDER1: mix(0.5, BG_HIGHLIGHT, BG_ALT),
  BORDER2: BG_HIGHLIGHT,
  BORDER3: mix(0.4, GREY, BG_HIGHLIGHT),

  SUBTEXT2: mix(0.3, GREY, FG),
  SUBTEXT1: GREY,
  SUBTEXT0: mix(0.3, BG, GREY)
};

const BRAND = colors.INDIGO;

const caffeineDarkTheme = merge({}, darkTheme, {
  brand: BRAND,
  text: colors.FG,
  textLink: colors.INDIGO_LIGHT,
  draftColor: colors.YELLOW,
  bg: colors.BG,

  primary: {
    solid: colors.INDIGO_SOLID,
    text: colors.INDIGO_LIGHT,
    strong: colors.INDIGO_LIGHT,
    subtle: rgba(BRAND, 0.7)
  },

  ws: { activeMessage: { label: colors.INDIGO_LIGHT } },
  accents: { primary: BRAND },

  background: {
    base: colors.BG,
    mantle: colors.BG_ALT,
    crust: colors.CRUST,
    surface0: colors.SURFACE0,
    surface1: colors.SURFACE1,
    surface2: colors.SURFACE2
  },

  status: {
    info: { background: rgba(colors.BLUE, 0.12), text: colors.BLUE, border: colors.BLUE },
    success: { background: rgba(colors.GREEN, 0.12), text: colors.GREEN, border: colors.GREEN },
    warning: { background: rgba(colors.YELLOW, 0.12), text: colors.YELLOW, border: colors.YELLOW },
    danger: { background: rgba(colors.RED, 0.12), text: colors.RED, border: colors.RED }
  },

  overlay: { overlay2: colors.GREY, overlay1: colors.BORDER3, overlay0: colors.BORDER2 },

  shadow: {
    sm: `0 1px 2px rgba(0, 0, 0, 0.6), 0 0 0 1px ${rgba(colors.FG, 0.04)}`,
    md: `0 8px 24px rgba(0, 0, 0, 0.55), 0 0 0 1px ${rgba(colors.FG, 0.05)}`,
    lg: `0 16px 48px rgba(0, 0, 0, 0.65), 0 0 0 1px ${rgba(colors.FG, 0.06)}, 0 0 32px ${rgba(BRAND, 0.08)}`
  },

  border: {
    radius: { sm: '6px', base: '8px', md: '10px', lg: '12px', xl: '16px' },
    border3: colors.BORDER3,
    border2: colors.BORDER2,
    border1: colors.BORDER1,
    border0: colors.BORDER0,
    subtle: colors.BORDER1
  },

  colors: {
    text: {
      white: colors.FG,
      green: colors.GREEN,
      danger: colors.RED,
      warning: colors.YELLOW,
      muted: colors.SUBTEXT1,
      purple: colors.VIOLET,
      yellow: colors.YELLOW,
      subtext2: colors.SUBTEXT2,
      subtext1: colors.SUBTEXT1,
      subtext0: colors.SUBTEXT0
    },
    bg: { danger: colors.RED },
    accent: BRAND
  },

  input: {
    bg: rgba(colors.FG, 0.02),
    border: colors.BORDER1,
    focusBorder: BRAND,
    placeholder: { color: colors.SUBTEXT1, opacity: 0.7 }
  },

  sidebar: {
    color: colors.FG,
    muted: colors.SUBTEXT1,
    bg: colors.BG_ALT,
    dragbar: { border: colors.BORDER0, activeBorder: BRAND },
    collection: {
      item: {
        bg: rgba(BRAND, 0.12),
        hoverBg: rgba(colors.FG, 0.04),
        focusBorder: rgba(BRAND, 0.6),
        indentBorder: colors.BORDER1,
        active: { indentBorder: rgba(BRAND, 0.6) },
        example: { iconColor: colors.SUBTEXT2 }
      }
    },
    dropdownIcon: { color: colors.SUBTEXT2 }
  },

  dropdown: {
    color: colors.FG,
    iconColor: colors.SUBTEXT2,
    bg: colors.CRUST,
    hoverBg: rgba(colors.FG, 0.06),
    shadow: `0 12px 32px rgba(0, 0, 0, 0.6)`,
    border: colors.BORDER1,
    separator: colors.BORDER0,
    selectedColor: colors.INDIGO_LIGHT,
    mutedText: colors.SUBTEXT1
  },

  workspace: {
    accent: BRAND,
    border: colors.BORDER1,
    button: { bg: colors.SURFACE0 }
  },

  request: {
    methods: {
      get: colors.GREEN,
      post: colors.BLUE,
      put: colors.YELLOW,
      delete: colors.RED,
      patch: colors.VIOLET,
      options: colors.TEAL,
      head: colors.CYAN
    },
    grpc: colors.TEAL,
    ws: colors.INDIGO_LIGHT,
    gql: colors.PINK
  },

  requestTabPanel: {
    url: {
      bg: colors.BG_ALT,
      icon: colors.SUBTEXT2,
      iconDanger: colors.RED,
      border: `solid 1px ${colors.BORDER1}`
    },
    dragbar: { border: colors.BORDER0, activeBorder: BRAND },
    responseStatus: colors.SUBTEXT2,
    responseOk: colors.GREEN,
    responseError: colors.RED,
    responsePending: colors.INDIGO_LIGHT,
    responseOverlayBg: rgba(colors.BG, 0.85),
    card: { bg: colors.BG_ALT, border: colors.BORDER0, hr: colors.BORDER1 },
    graphqlDocsExplorer: { bg: colors.BG_ALT, color: colors.FG }
  },

  notifications: {
    bg: colors.BG,
    list: {
      bg: colors.BG,
      borderBottom: colors.BORDER0,
      hoverBg: rgba(colors.FG, 0.04),
      active: { bg: colors.SURFACE0, hoverBg: colors.SURFACE1 }
    }
  },

  modal: {
    title: { color: colors.FG, bg: colors.BG_ALT },
    body: { color: colors.FG, bg: colors.BG_ALT },
    input: { bg: rgba(colors.FG, 0.02), border: colors.BORDER1, focusBorder: BRAND },
    backdrop: { opacity: 0.55 }
  },

  button: {
    secondary: { color: colors.FG, bg: colors.SURFACE0, border: colors.BORDER1, hoverBorder: colors.BORDER3 },
    close: { color: colors.SUBTEXT2, bg: 'transparent', border: 'transparent', hoverBorder: '' },
    disabled: { color: colors.SUBTEXT0, bg: colors.SURFACE0, border: colors.SURFACE0 },
    danger: { color: '#fff', bg: colors.RED, border: colors.RED }
  },

  button2: {
    color: {
      primary: { bg: colors.INDIGO_SOLID, text: '#ffffff', border: colors.INDIGO_SOLID },
      light: { bg: rgba(BRAND, 0.12), text: colors.INDIGO_LIGHT, border: rgba(BRAND, 0.2) },
      secondary: { bg: colors.SURFACE0, text: colors.FG, border: colors.BORDER1 },
      success: { bg: colors.GREEN, text: '#05140c', border: colors.GREEN },
      warning: { bg: colors.YELLOW, text: '#1a1405', border: colors.YELLOW },
      danger: { bg: colors.RED, text: '#fff', border: colors.RED }
    }
  },

  tabs: {
    active: { fontWeight: 500, color: colors.FG, border: BRAND },
    secondary: {
      active: { bg: colors.SURFACE1, color: colors.FG },
      inactive: { bg: colors.SURFACE0, color: colors.SUBTEXT1 }
    }
  },

  requestTabs: {
    color: colors.FG,
    bg: colors.SURFACE0,
    bottomBorder: colors.BORDER0,
    icon: { color: colors.SUBTEXT1, hoverColor: colors.FG, hoverBg: rgba(colors.FG, 0.06) },
    example: { iconColor: colors.SUBTEXT2 }
  },

  codemirror: {
    bg: colors.BG,
    border: colors.BG,
    placeholder: { color: colors.SUBTEXT1, opacity: 0.6 },
    gutter: { bg: colors.BG },
    variable: { valid: colors.GREEN, invalid: colors.RED, prompt: colors.BLUE },
    tokens: {
      definition: colors.SKY,
      property: colors.SKY,
      string: colors.GREEN,
      number: colors.YELLOW,
      atom: colors.PINK,
      variable: colors.TEAL,
      keyword: colors.INDIGO_LIGHT,
      comment: colors.SUBTEXT1,
      operator: colors.SUBTEXT2,
      tag: colors.INDIGO_LIGHT,
      tagBracket: colors.SUBTEXT1
    },
    searchLineHighlightCurrent: rgba(BRAND, 0.1),
    searchMatch: rgba(BRAND, 0.4),
    searchMatchActive: colors.INDIGO_LIGHT
  },

  table: {
    border: colors.BORDER0,
    thead: { color: colors.SUBTEXT2 },
    striped: rgba(colors.FG, 0.015),
    input: { color: colors.FG }
  },

  plainGrid: { hoverBg: rgba(colors.FG, 0.04) },
  scrollbar: { color: colors.SURFACE2 },

  dragAndDrop: {
    border: BRAND,
    borderStyle: '2px dashed',
    hoverBg: rgba(BRAND, 0.06),
    transition: 'all 0.15s ease'
  },

  infoTip: { bg: colors.CRUST, border: colors.BORDER1, boxShadow: '0 12px 32px rgba(0, 0, 0, 0.6)' },
  statusBar: { border: colors.BORDER0, color: colors.SUBTEXT1 },

  console: {
    bg: colors.BG,
    headerBg: colors.BG_ALT,
    contentBg: colors.BG,
    border: colors.BORDER0,
    titleColor: colors.FG,
    countColor: colors.SUBTEXT1,
    buttonColor: colors.SUBTEXT2,
    buttonHoverBg: rgba(colors.FG, 0.06),
    buttonHoverColor: colors.FG,
    messageColor: colors.FG,
    timestampColor: colors.SUBTEXT1,
    emptyColor: colors.SUBTEXT1,
    logHoverBg: rgba(colors.FG, 0.03),
    resizeHandleHover: BRAND,
    resizeHandleActive: BRAND,
    dropdownBg: colors.CRUST,
    dropdownHeaderBg: colors.SURFACE0,
    optionHoverBg: rgba(colors.FG, 0.05),
    optionLabelColor: colors.FG,
    optionCountColor: colors.SUBTEXT1,
    checkboxColor: BRAND,
    scrollbarTrack: colors.BG_ALT,
    scrollbarThumb: colors.SURFACE2,
    scrollbarThumbHover: colors.BORDER3
  },

  grpc: {
    tabNav: {
      container: { bg: colors.SURFACE0 },
      button: {
        active: { bg: colors.SURFACE2, color: colors.FG },
        inactive: { bg: 'transparent', color: colors.SUBTEXT1 }
      }
    },
    importPaths: {
      button: { bg: colors.INDIGO_SOLID, color: '#ffffff', border: colors.INDIGO_SOLID, hoverBorder: colors.INDIGO_LIGHT }
    },
    protoFiles: {
      item: { selected: { bg: rgba(BRAND, 0.14), border: BRAND } },
      button: { bg: colors.INDIGO_SOLID, color: '#ffffff', border: colors.INDIGO_SOLID, hoverBorder: colors.INDIGO_LIGHT }
    }
  },

  examples: {
    buttonBg: rgba(BRAND, 0.12),
    buttonColor: colors.INDIGO_LIGHT,
    border: colors.BORDER1,
    urlBar: { border: colors.BORDER1, bg: colors.BG_ALT },
    table: { thead: { bg: colors.BG_ALT, color: colors.SUBTEXT1 } }
  },

  app: {
    collection: {
      toolbar: {
        environmentSelector: {
          bg: colors.BG_ALT,
          border: colors.BORDER1,
          icon: colors.INDIGO_LIGHT,
          text: colors.FG,
          caret: colors.SUBTEXT1,
          separator: colors.BORDER1,
          hoverBg: colors.SURFACE0,
          hoverBorder: rgba(BRAND, 0.5),
          noEnvironment: {
            text: colors.SUBTEXT1,
            bg: colors.BG_ALT,
            border: colors.BORDER1,
            hoverBg: colors.SURFACE0,
            hoverBorder: colors.BORDER3
          }
        },
        sandboxMode: {
          safeMode: { bg: rgba(colors.GREEN, 0.1), color: colors.GREEN },
          developerMode: { bg: rgba(colors.YELLOW, 0.12), color: colors.YELLOW }
        }
      }
    }
  }
});

export default caffeineDarkTheme;
