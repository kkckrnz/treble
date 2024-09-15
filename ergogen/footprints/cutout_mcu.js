/** bottom plate cutout for nice!nano mcu board
  * 
  * mcu is vertically placed on pcb
  * 
  * this footprint is based on promicro_bottom_cutouts.js:
  * https://github.com/rschenk/egret/blob/main/ergogen/container/footprints/promicro_bottom_cutouts.js
  * 
  * values obtained from mcu_nice_nano.js and promicro.js:
  * https://github.com/ceoloide/ergogen-footprints/blob/main/mcu_nice_nano.js
  * https://github.com/ergogen/ergogen/blob/develop/src/footprints/promicro.js
  * 
  * Params:
  *     layer: default is ''
  *         '' for plate cutout, 'F' for Front Adhesive, 'B' for Bottom Adhesive.
  *         Adhesive layers are used to preview the cutout from the main pcb.
  */

const hole_distance = 2.54
const x_start = 7.62
const y_start = hole_distance / 2 // drill start between hole no.6 and no.7

const height = 13.97 * 2

const x = 2.2 // hole size x (diameter)
const y = height + x // hole size y

module.exports = {
    params: {
        designator: 'CM', // cutout mcu
        layer: '',
    },
    body: p => {

        let cutout_layer = '"*.Cu" "*.Mask"';
        let cutout_pad = 'np_thru_hole';

        if (p.layer == 'F') {
            cutout_layer = "F.Adhes"
            cutout_pad = 'smd'
        } else if (p.layer == 'B') {
            cutout_layer = "B.Adhes"
            cutout_pad = 'smd'
        };

        return `
        (module CutoutMCU
            (layer F.Cu)
            (tedit 58D3FE32)
            ${p.at /* parametric position */}
            ${'' /* footprint reference */}
            (fp_text reference "${p.ref}"
                (at 0 -3.2)
                (layer F.SilkS) ${p.ref_hide}
                (effects
                    (font
                        (size 1 1)
                        (thickness 0.15)
                    )
                )
            )
            ${'' /* cutout */}
            (pad "" ${cutout_pad} oval
                (at ${x_start} ${y_start} ${p.r})
                (size ${x} ${y})
                (drill oval ${x} ${y})
                (layers ${cutout_layer})
            )
            (pad "" ${cutout_pad} oval
                (at -${x_start} ${y_start} ${p.r})
                (size ${x} ${y})
                (drill oval ${x} ${y})
                (layers ${cutout_layer})
            )
        )
        `
    }
}
