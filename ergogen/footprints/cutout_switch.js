/** bottom plate cutout for choc switch
  * 
  * this is basd on choc_bonus_goodies.js:
  * https://github.com/rschenk/re-gret/blob/main/ergogen/footprints/choc_bonus_goodies.js
  * 
  * Params:
  *     layer: default is ''
  *         '' for plate cutout, F' for Front Adhesive, 'B' for Bottom Adhesive.
  *         Adhesive layers are used to preview the cutout from the main pcb.
  */

const d = 2.4 // hole size for solder pin cutout

module.exports = {
    params: {
        designator: 'CS', // cutout switch
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
        (module CutoutSwitch
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
            ${''/* middle shaft cutout */}
            (pad "" ${cutout_pad} circle
                (at 0 0 ${p.r})
                (size 3.4 3.4)
                (drill 3.4)
                (layers ${cutout_layer})
            )
            ${''/* stabilizers cutout */}
            (pad "" ${cutout_pad} circle
                (at 5.5 0 ${p.r})
                (size 1.7 1.7)
                (drill 1.7)
                (layers ${cutout_layer})
            )
            (pad "" ${cutout_pad} circle
                (at -5.5 0 ${p.r})
                (size 1.7 1.7)
                (drill 1.7)
                (layers ${cutout_layer})
            )
            ${''/* solder pins cutout */}
            (pad "" ${cutout_pad} circle
                (at 0 -5.9 ${p.r})
                (size ${d} ${d})
                (drill ${d})
                (layers ${cutout_layer})
            )
            (pad "" ${cutout_pad} circle
                (at 5 -3.8 ${p.r})
                (size ${d} ${d})
                (drill ${d})
                (layers ${cutout_layer})
            )
        )
        `
    }
}