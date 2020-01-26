/**
 * A simple module to release images from their containers. 
 * Relies on export-container-css-vars
 * 
 * This has a very specific case, so might not work all the time.
 * 
 *  <div class="container">
 *    <div class="flex flex-wrap -mx-2">
 *      <div class="w-full md:w-1/3 px-2 py-6 order-2 md:order-1">
 *        whatever 
 *      </div>
 *      <div class="w-full md:w-2/3 px-2 order-1 md:order-2">
 *        <img
 *          class="
 *              md:h-full 
 *              md:float-left
 *              release-img
 *              object-cover"
 *          src="https://picsum.photos/640/360" alt="">
 *      </div>
 *    </div>
 *  </div>
 * Above md: the image will be released and will touch browsers edge.
 * At md: the image will become full width
 */
module.exports = function({addComponents}) {
    addComponents({
        '.release-img': {
            width: '100vw',
            maxWidth: '100vw',
            marginLeft: '50%',
            transform: 'translate(-50%)'
        },
        '@screen md': {
            '.release-img': {
                marginLeft: 'auto',
                transform: 'initial',
                width: 'calc(100% + 50vw - (var(--container-width) / 2) + var(--container-padding))'
            }
        }
    });
}
