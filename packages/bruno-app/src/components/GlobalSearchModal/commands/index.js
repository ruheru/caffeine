import Mousetrap from 'mousetrap';
import {
  IconDownload,
  IconWorld,
  IconLayoutSidebarLeftCollapse,
  IconLayoutRows,
  IconSettings,
  IconDeviceFloppy,
  IconTerminal2,
  IconZoomIn,
  IconZoomOut,
  IconZoomReset,
  IconArrowBackUp
} from '@tabler/icons';
import { getKeyBindingsForActionAllOS, getKeyBindingDisplayTextByOS, getKeyBindingDisplayOS } from 'providers/Hotkeys/keyMappings';

// Palette commands reuse the hotkey handlers registered in providers/Hotkeys, so a
// command behaves exactly like its keyboard shortcut (including user rebinds).
// Only globally-bound actions belong here; `newRequest` is bound per sidebar row/tab,
// so its target depends on focus and it cannot be triggered from the palette.
export const PALETTE_COMMANDS = [
  { action: 'importCollection', label: 'Import Collection', icon: IconDownload, keywords: 'postman openapi insomnia curl' },
  { action: 'editEnvironment', label: 'Edit Environment', icon: IconWorld, keywords: 'env variables' },
  { action: 'collapseSidebar', label: 'Toggle Sidebar', icon: IconLayoutSidebarLeftCollapse, keywords: 'hide show collapse' },
  { action: 'changeLayout', label: 'Toggle Response Layout', icon: IconLayoutRows, keywords: 'orientation vertical horizontal' },
  { action: 'saveAllTabs', label: 'Save All Tabs', icon: IconDeviceFloppy, keywords: 'save' },
  { action: 'reopenLastClosedTab', label: 'Reopen Closed Tab', icon: IconArrowBackUp, keywords: 'undo tab' },
  { action: 'openTerminal', label: 'Open Terminal', icon: IconTerminal2, keywords: 'shell console' },
  { action: 'openPreferences', label: 'Open Preferences', icon: IconSettings, keywords: 'settings theme' },
  { action: 'zoomIn', label: 'Zoom In', icon: IconZoomIn, keywords: 'bigger' },
  { action: 'zoomOut', label: 'Zoom Out', icon: IconZoomOut, keywords: 'smaller' },
  { action: 'resetZoom', label: 'Reset Zoom', icon: IconZoomReset, keywords: 'zoom' }
];

export const getCommandShortcutLabel = (action, userKeyBindings) => {
  return getKeyBindingDisplayTextByOS(action, userKeyBindings, getKeyBindingDisplayOS(), ' ');
};

export const runPaletteCommand = (action, userKeyBindings) => {
  const combos = getKeyBindingsForActionAllOS(action, userKeyBindings);
  if (!combos) return false;
  Mousetrap.trigger(combos[0]);
  return true;
};

export const matchCommands = (searchTerms) => {
  return PALETTE_COMMANDS.filter((command) => {
    const haystack = `${command.label} ${command.keywords}`.toLowerCase();
    return searchTerms.every((term) => haystack.includes(term));
  });
};
