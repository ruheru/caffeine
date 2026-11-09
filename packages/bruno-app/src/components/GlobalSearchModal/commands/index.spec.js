import Mousetrap from 'mousetrap';
import { getMergedKeyBindings } from 'providers/Hotkeys/keyMappings';
import { PALETTE_COMMANDS, matchCommands, runPaletteCommand } from './index';

jest.mock('mousetrap', () => ({ trigger: jest.fn() }));

describe('palette commands', () => {
  beforeEach(() => {
    Mousetrap.trigger.mockClear();
  });

  it('only lists actions that exist in the key binding map', () => {
    const bindings = getMergedKeyBindings();
    PALETTE_COMMANDS.forEach(({ action }) => {
      expect(bindings[action]).toBeDefined();
    });
  });

  it('matches on label and keywords, requiring every term', () => {
    expect(matchCommands(['sidebar']).map((c) => c.action)).toEqual(['collapseSidebar']);
    expect(matchCommands(['postman']).map((c) => c.action)).toEqual(['importCollection']);
    expect(matchCommands(['zoom', 'in']).map((c) => c.action)).toEqual(['zoomIn']);
    expect(matchCommands(['nonexistent'])).toEqual([]);
  });

  it('triggers the shortcut bound to the action', () => {
    expect(runPaletteCommand('collapseSidebar')).toBe(true);
    expect(Mousetrap.trigger).toHaveBeenCalledWith(expect.stringMatching(/\\$/));
  });

  it('triggers a user-rebound shortcut instead of the default', () => {
    runPaletteCommand('openPreferences', { openPreferences: { mac: 'command+bind+p', windows: 'ctrl+bind+p' } });
    expect(Mousetrap.trigger).toHaveBeenCalledWith(expect.stringMatching(/\+p$/));
  });

  it('does nothing for an unknown action', () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
    expect(runPaletteCommand('doesNotExist')).toBe(false);
    expect(Mousetrap.trigger).not.toHaveBeenCalled();
    warn.mockRestore();
  });
});
