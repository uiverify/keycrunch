/** Capture breakpoints for Keycrunch's page stories: UI Verify renders each one at a desktop and a phone
 *  viewport (story-declared modes via `parameters.chromatic.modes`). */
export const keycrunchModes = {
  desktop: { viewport: { width: 1280, height: 900 } },
  mobile: { viewport: { width: 390, height: 844 } },
} as const;
