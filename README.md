# Treble Keyboard
Treble keyboard is a 42 key, low profile choc v1, monoblock, moderate column staggered, wireless/wired mechanical keyboard powered by pro micro compatible MCU board.

It is designed with [ergogen](https://github.com/ergogen/ergogen), the ergonomic keyboard generator. It doesn't have aggressive column stagger nor angle between the halves so anyone who's used to traditional row staggered keyboard can adopt to column staggered keyboard easier.

![treble_top](https://github.com/kkckrnz/treble/blob/main/docs/images/placeholder.jpeg)
![treble_front](https://github.com/kkckrnz/treble/blob/main/docs/images/placeholder.jpeg)
![treble_bottom](https://github.com/kkckrnz/treble/blob/main/docs/images/placeholder.jpeg)

The sandwich PCB design concept came from [Horizon keyboard](https://github.com/skarrmann/horizon). Bottom plate cutouts for through-hole pins makeee it so that keyboard can be put on any surface, and the cover plate hides all the other internal components. Overall, this design makes the keyboard clean, low profile and look more finished without needing a dedicated case.

![treble_pcbs](https://github.com/kkckrnz/treble/blob/main/docs/images/placeholder.jpeg)

## Features
- Rectangular design for improved stability; easier to put on your lap and type
- Low profile: total height is about 15mm tall
- Compact: overall size smaller than Apple Magic Keyboard
- Column staggered: not strongly staggered so it's easy transition from row staggered keyboard yet it provides more comfortable typing experience
- 6 thumb keys: enough thumb keys for switching to different layers
- PCBs-for-case design
- Wireless/Wired depends on your preference

## Bill of Materials

| **Part**                             | **Quantity** | **Notes**                                           |
| ------------------------------------ | ------------ | --------------------------------------------------- |
| **Main PCB**                         | 1            |                                                     |
| **Cover plate PCB**                  | 1            |                                                     |
| **Bottom plate PCB**                 | 1            |                                                     |
| **MCU board**                        | 1            | Pro Micro compatible board                          |
| **Machine Sockets**                  | 2            | Mill-Max 310                                        |
| **Machine Socket Pins**              | 24           | Mill-Max 3320                                       |
| **Key switches**                     | 42           | Choc v1                                             |
| **Keycaps**                          | 42           | Choc v1 compatible                                  |
| **Diodes**                           | 42           | 1N4148 SOD-123                                      |
| **Reset switch**                     | 1            | EVQPU                                               |
| **Power switch**                     | 1            | MSK-12C02                                           |
| **JST connector (female)**           | 1            | S2B-PH-K-S                                          |
| **JST connector (male)**             | 1            |                                                     |
| **Battery**                          | 1            | 301230 110mAh 3.7V LiPo                             |
| **M2 6mm screws**                    | 12           |                                                     |
| **M2 nuts**                          | 4            |                                                     |
| **M2 8mm standoffs (female-female)** | 4            |                                                     |
| **Rubber feet**                      | 6            |                                                     |

- Male JST connector is only needed if the battery doesn't come with it
- You don't need Power switch, JST connector, and Battery if you build a wired keyboard

## PCB order guide
1. Download gerber files from releases
2. Submit gerber files to PCB manufacturer (eg. JLCPCB)
3. Select options [JLCPCB manufacturing options](docs/jlcpcb_manufacturing_options.md)
4. Order

I recommend **LeadFree HASL** option because you will be handling the keyboard directly without a case. Pick the PCB color of your choice. **Remove Mark** so you won't see random number printed on the PCB.

## Firmware
### ZMK Firmware Build Guide
1. Setup GitHub Repo by following [ZMK documentation](https://zmk.dev/docs/user-setup#github-repo)
2. Setup User Config by following [ZMK documentation](https://zmk.dev/docs/user-setup#user-config-setup-script)	
3. Copy & Paste `/boards`, `/config`, `build.yaml` from [zmk-config folder](/firmware/zmk-config) in this repo to zmk-config folder in your repo
4. Customise `treble.keymap` and `treble.conf` files in `/config` however you like it. Then push changes to your repo
```
git add .
git commit -m "commit message"
git push -u origin main
```
5. Install firmware by following [ZMK documentation](https://zmk.dev/docs/user-setup#installing-the-firmware)

- If you use MCU board other than nice!nano v2, then you will have to edit `build.yaml` file.
- [Precompiled firmware](/firmware/treble-nice_nano_v2-zmk.uf2.zip) is also available.
- Check out my personal [zmk-config](https://github.com/kkckrnz/zmk-config-treble) to see how I configured my keymap.
- There's [video guide](https://www.youtube.com/watch?v=O_urj-rF3bQ) by Joe Scotto if you would rather setup from scratch.
Follow [ZMK Firmware Build Guide](docs/zmk_firmware_build_guide.md) to create and flash ZMK firmware.

### Other Firmware
Since the keyboard is pro micro compatible it should be able to run QMK & KMK as well (not tested).

## Build guide
Follow [Build Guide](docs/build_guide.md) to assemble the keyboard.