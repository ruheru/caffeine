// Caffeine (light) — cool off-white surfaces with the same indigo accent as Caffeine dark.

import { merge } from 'lodash';
import { mix, rgba } from 'polished';
import lightTheme from './light';

const BG = '#fbfbfd';
const BG_ALT = '#f4f5f8';
const BG_HIGHLIGHT = '#dfe2ea';
const FG = '#1b1d26';
const GREY = '#6b7080';

const colors = {
  BG,
  BG_ALT,
  FG,
  GREY,

  INDIGO: '#5b5bd6',
  INDIGO_SOLID: '#4f46e5',
  INDIGO_TEXT: '#4338ca',
  RED: '#dc2626',
  GREEN: '#15803d',
  TEAL: '#0f766e',
  CYAN: '#0e7490',
  BLUE: '#2563eb',
  VIOLET: '#7c3aed',
  PINK: '#be185d',
  YELLOW: '#a16207',

  CRUST: mix(0.15, BG_HIGHLIGHT, BG_ALT),
  SURFACE0: mix(0.35, BG_HIGHLIGHT, BG_ALT),
  SURFACE1: mix(0.65, BG_HIGHLIGHT, BG_ALT),
  SURFACE2: BG_HIGHLIGHT,

  BORDER0: mix(0.35, BG_HIGHLIGHT, BG),
  BORDER1: mix(0.65, BG_HIGHLIGHT, BG),
  BORDER2: BG_HIGHLIGHT,
  BORDER3: mix(0.35, GREY, BG_HIGHLIGHT),

  SUBTEXT2: mix(0.35, GREY, FG),
  SUBTEXT1: GREY,
  SUBTEXT0: mix(0.35, BG, GREY)
};

const BRAND = colors.INDIGO;

const caffeineLightTheme = merge({}, lightTheme, {
  brand: BRAND,
  text: colors.FG,
  textLink: colors.INDIGO_TEXT,
  draftColor: colors.YELLOW,
  bg: colors.BG,

  primary: { solid: colors.INDIGO_SOLID, text: colors.INDIGO_TEXT, strong: colors.INDIGO_TEXT, subtle: rgba(BRAND, 0.7) },
  ws: { activeMessage: { label: colors.INDIGO_TEXT } },
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
    info: { background: rgba(colors.BLUE, 0.1), text: colors.BLUE, border: colors.BLUE },
    success: { background: rgba(colors.GREEN, 0.1), text: colors.GREEN, border: colors.GREEN },
    warning: { background: rgba(colors.YELLOW, 0.1), text: colors.YELLOW, border: colors.YELLOW },
    danger: { background: rgba(colors.RED, 0.1), text: colors.RED, border: colors.RED }
  },

  shadow: {
    sm: `0 1px 2px ${rgba(FG, 0.06)}, 0 0 0 1px ${rgba(FG, 0.04)}`,
    md: `0 8px 24px ${rgba(FG, 0.08)}, 0 0 0 1px ${rgba(FG, 0.05)}`,
    lg: `0 16px 48px ${rgba(FG, 0.12)}, 0 0 0 1px ${rgba(FG, 0.06)}`
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
      subtext2: colors.SUBTEXT2,
      subtext1: colors.SUBTEXT1,
      subtext0: colors.SUBTEXT0
    },
    bg: { danger: colors.RED },
    accent: BRAND
  },

  input: {
    bg: '#ffffff',
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
        bg: rgba(BRAND, 0.1),
        hoverBg: rgba(FG, 0.04),
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
    bg: '#ffffff',
    hoverBg: rgba(FG, 0.05),
    shadow: `0 12px 32px ${rgba(FG, 0.12)}`,
    border: colors.BORDER1,
    separator: colors.BORDER0,
    selectedColor: colors.INDIGO_TEXT,
    mutedText: colors.SUBTEXT1
  },

  workspace: { accent: BRAND, border: colors.BORDER1, button: { bg: colors.SURFACE0 } },

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
    ws: colors.INDIGO_TEXT,
    gql: colors.PINK
  },

  requestTabPanel: {
    url: { bg: '#ffffff', icon: colors.SUBTEXT2, iconDanger: colors.RED, border: `solid 1px ${colors.BORDER1}` },
    dragbar: { border: colors.BORDER0, activeBorder: BRAND },
    responseOk: colors.GREEN,
    responseError: colors.RED,
    responsePending: colors.INDIGO_TEXT,
    responseOverlayBg: rgba(BG, 0.85),
    card: { bg: '#ffffff', border: colors.BORDER0, hr: colors.BORDER1 }
  },

  modal: {
    title: { color: colors.FG, bg: colors.BG },
    body: { color: colors.FG, bg: colors.BG },
    input: { bg: '#ffffff', border: colors.BORDER1, focusBorder: BRAND },
    backdrop: { opacity: 0.35 }
  },

  button2: {
    color: {
      primary: { bg: colors.INDIGO_SOLID, text: '#ffffff', border: colors.INDIGO_SOLID },
      light: { bg: rgba(BRAND, 0.1), text: colors.INDIGO_TEXT, border: rgba(BRAND, 0.16) }
    }
  },

  tabs: { active: { fontWeight: 500, color: colors.FG, border: BRAND } },

  requestTabs: {
    color: colors.FG,
    bg: colors.SURFACE0,
    bottomBorder: colors.BORDER0,
    icon: { color: colors.SUBTEXT1, hoverColor: colors.FG, hoverBg: rgba(FG, 0.06) }
  },

  codemirror: {
    bg: colors.BG,
    border: colors.BG,
    gutter: { bg: colors.BG },
    variable: { valid: colors.GREEN, invalid: colors.RED, prompt: colors.BLUE },
    tokens: {
      definition: colors.BLUE,
      property: colors.BLUE,
      string: colors.GREEN,
      number: colors.YELLOW,
      atom: colors.PINK,
      variable: colors.TEAL,
      keyword: colors.INDIGO_TEXT,
      comment: colors.SUBTEXT1,
      operator: colors.SUBTEXT2,
      tag: colors.INDIGO_TEXT,
      tagBracket: colors.SUBTEXT1
    },
    searchLineHighlightCurrent: rgba(BRAND, 0.08)
  },

  table: { border: colors.BORDER0, thead: { color: colors.SUBTEXT2 }, striped: rgba(FG, 0.015) },
  scrollbar: { color: colors.SURFACE2 },
  dragAndDrop: { border: BRAND, borderStyle: '2px dashed', hoverBg: rgba(BRAND, 0.05) },
  statusBar: { border: colors.BORDER0, color: colors.SUBTEXT1 },

  app: {
    collection: {
      toolbar: {
        environmentSelector: {
          bg: '#ffffff',
          border: colors.BORDER1,
          icon: colors.INDIGO_TEXT,
          text: colors.FG,
          caret: colors.SUBTEXT1,
          separator: colors.BORDER1,
          hoverBg: colors.BG_ALT,
          hoverBorder: rgba(BRAND, 0.5)
        }
      }
    }
  }
});

export default caffeineLightTheme;
