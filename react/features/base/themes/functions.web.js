// @flow

import { createMuiTheme } from '@material-ui/core/styles';

import { createColorTokens } from '../styles';

/**
 * Creates a MUI theme based on local UI tokens.
 *
 * @param {Object} arg - The ui tokens.
 * @returns {Object}
 */
export function createTheme({ font, colors, colorMap, spacing, typography }: Object) {
    return createMuiTheme({
        props: {
            // disable ripple effect on buttons globally
            MuiButtonBase: {
                disableRipple: true
            }
        },

        // disable transitions globally
        transitions: {
            create: () => 'none'
        }
    }, {
        palette: createColorTokens(colorMap, colors),
        spacing: idx => spacing[idx],
        typography: {
            font,
            ...typography
        }
    });
}
