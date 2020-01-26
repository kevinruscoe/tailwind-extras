/**
 * A simple module to export the containers CSS vars.
 * 
 * It exports the following vars:
 *   --container-width   The containers current width (mediaquery friendly).
 *   --container-padding The containers padding.
 * 
 * If you need more, checkout https://www.npmjs.com/package/tailwind-css-variables
 */
module.exports = function({addComponents, config}) {
    let cssVariables = {
        ":root": {
            '--container-width': '100vw',
            '--container-padding': config('theme.container.padding', '0')
        },
    };

    Object.keys(config('theme.screens'), []).forEach(screen => {
        let width = config('theme.screens')[screen]

        cssVariables[`@media (min-width: ${width})`] = {
            ':root': {
                '--container-width': width
            }
        };
    });

    addComponents(cssVariables);
}
