/** MountingHole_M2_Via
  * 
  * this is based on mountinghole.js from:
  * https://github.com/MvEerd/ergogen/blob/mveerd/src/footprints/mountinghole.js
  * 
  */ 

module.exports = {
    params: {
        designator: 'H',
    },
    body: p => `
    (module "MountingHole_2.2mm_M2_Pad_Via"
        (version 20210722)
        (layer "F.Cu")
        (tedit 56DDB9C7)
        ${p.at /* parametric position */}
        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" 
            (at 0 -3.2)
            (layer "F.SilkS") ${p.ref_hide} 
            (effects
                (font
                    (size 1 1)
                    (thickness 0.15)
                )
            )
        )
        ${'' /* thru hole */}
        (fp_circle (center 0 0) (end 2.45 0) (layer "F.CrtYd") (width 0.05) (fill none))
        (pad "" thru_hole circle locked (at 1.166726 1.166726) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) ${p.local_net("Hole")})
        (pad "" thru_hole circle locked (at 0 0) (size 4.4 4.4) (drill 2.2) (layers *.Cu *.Mask) ${p.local_net("Hole")})
        (pad "" thru_hole circle locked (at 0 1.65) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) ${p.local_net("Hole")})
        (pad "" thru_hole circle locked (at 1.166726 -1.166726) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) ${p.local_net("Hole")})
        (pad "" thru_hole circle locked (at -1.65 0) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) ${p.local_net("Hole")})
        (pad "" thru_hole circle locked (at -1.166726 -1.166726) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) ${p.local_net("Hole")})
        (pad "" thru_hole circle locked (at -1.166726 1.166726) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) ${p.local_net("Hole")})
        (pad "" thru_hole circle locked (at 1.65 0) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) ${p.local_net("Hole")})
        (pad "" thru_hole circle locked (at 0 -1.65) (size 0.7 0.7) (drill 0.4) (layers *.Cu *.Mask) ${p.local_net("Hole")})
    )
    `
}