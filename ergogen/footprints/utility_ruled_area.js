/** ruled area for defining keepout zone
 * 
 * define width and height in order to create the rectangular keepout zone.
 * 
 * Params:
 *      side: default is 'F&B'. 'F' for F.Cu, 'B' for B.Cu
 *      name: default is ''
 *      width: default is 10
 *      height: default is 10
 *      keepout_track: default is false
 *      keepout_vias: default is false
 *      keepout_pads: default is false
 *      keepout_copperpour: default is true
 *      keepout_footprints: default is false
 */

module.exports = {
    params: {
        designator: 'RA',
        side: 'F&B',
        name: '',
        width: 10,
        height: 10,
        keepout_track: false,
        keepout_vias: false,
        keepout_pads: false,
        keepout_copperpour: true,
        keepout_footprints: false
    },
    body: p => {
        let track = p.keepout_track ? 'not_allowed' : 'allowed';
        let vias = p.keepout_vias ? 'not_allowed' : 'allowed';
        let pads = p.keepout_pads ? 'not_allowed' : 'allowed';
        let copperpour = p.keepout_copperpour ? 'not_allowed' : 'allowed';
        let footprints = p.keepout_footprints ? 'not_allowed' : 'allowed';

        return `
        (module RuledArea
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
            ${'' /* user drawing */}
            (fp_text user "${p.name}"
                (at 0 -9 ${ p.rot-180 })
                (layer Dwgs.User)
                (effects
                    (font
                        (size 1 1)
                        (thickness 0.15)
                    )
                )
            )
            ${'' /* ruled area */}
            (zone
                (layers "${p.side}.Cu")
                ${p.name ? '(name "' + p.name + '")' : ''}
                (hatch edge 0.508)
                (connect_pads
                    (clearance 0)
                )
                (min_thickness 0.254)
                (keepout
                    (tracks ${track})
                    (vias ${vias})
                    (pads ${pads})
                    (copperpour ${copperpour})
                    (footprints ${footprints})
                )
                (fill
                    (thermal_gap 0.508)
                    (thermal_bridge_width 0.508)
                )
                (polygon
                    (pts
                        (xy ${p.eaxy(-p.width/2, -p.height/2)})
                        (xy ${p.eaxy(p.width/2, -p.height/2)})
                        (xy ${p.eaxy(p.width/2, p.height/2)})
                        (xy ${p.eaxy(-p.width/2, p.height/2)})
                    )
                )
            )
        )

        `
    }
}
