/** bottom plate cutout for jst connector
  *  
  * this is based on jstph.js:
  * https://github.com/rschenk/egret/blob/main/ergogen/container/footprints/jstph.js
  * 
  * Params:
  *     layer: default is ''
  *         '' for plate cutout, 'F' for Front Adhesive, 'B' for Bottom Adhesive.
  *         Adhesive layers are used to preview the cutout from the main pcb.
  */

const x_start = -0.25 // ground pad is square so give it some more space
const y_start = 0

const x = 4.5 // hole size x
const y = 2.2 // hole size y (diameter)

module.exports = {
    params: {
        designator: 'CJ', // cutout jst
        layer: ''
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
        )
        `
    }
}
