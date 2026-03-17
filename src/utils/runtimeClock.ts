export const DISPLAY_RUNTIME_START_ISO = '2026-03-16T10:00:00Z';

const DISPLAY_RUNTIME_START_MS = Date.parse(DISPLAY_RUNTIME_START_ISO);

export const getDisplayRuntimeUptimeSeconds = (nowMs = Date.now()): number => {
  const delta = Math.floor((nowMs - DISPLAY_RUNTIME_START_MS) / 1000);
  return delta > 0 ? delta : 0;
};
