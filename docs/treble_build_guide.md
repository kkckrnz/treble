# Treble Build Guide
## Build overview
1. SMD components
2. Through-hole components
3. Testing
4. Key switches & Keycaps
5. Assembly

## General Tips
- Pads and pins connected to GND and Battery Positive are more difficult to solder. Consider increasing temperature for those pads and pins.
- Flux helps especially on those hard-to-solder pins and pads.
- I used 0.3mm solder wire for SMD components and 0.8mm wire for the rest.

## 1. SMD components
### Diodes
1. Add solder to one pad of the PCB
2. Make sure the line on diode marking is aligned with the line marked on the PCB
3. Hold the diode in place using a pair of tweezers
4. Apply heat on the pad to connect diode to the PCB
5. Add solder to the other pad

![diode](https://github.com/kkckrnz/treble/blob/main/docs/images/diode.jpeg)

### Power & Reset switch
1. Add solder to the pads on one side
2. Hold the switch in place using a pair of tweezers
3. Heat the pads to connect the switch to the PCB
4. Solder the rest of the pads

![power_switch](https://github.com/kkckrnz/treble/blob/main/docs/images/power_switch.jpeg)

## 2. Through-hole components
### MCU board
Soldering to the PCB:
1. Insert socket into the top of the PCB
2. Flip the PCB and solder the top and bottom pins
3. Solder the rest of the pins

![socket](https://github.com/kkckrnz/treble/blob/main/docs/images/socket.jpeg)

Insert pins:
1. Place kapton tape over the top of each socket
2. Poke pins through the tape
3. Pins sit about 2mm above the top of the socket when fully inserted.

![pins](https://github.com/kkckrnz/treble/blob/main/docs/images/pins.jpeg)

Solder MCU board:
1. Place MCU face down on the pins
2. Ensure B+/B- do not have pins in them
3. Solder each corner pin
4. Solder the rest of the pins
5. Remove MCU and kapton tape

![muc_board](https://github.com/kkckrnz/treble/blob/main/docs/images/mcu.jpeg)

### JST connector
#### JST connector (Female)
1. Insert the female JST connector into the PCB
2. Flip over the PCB and solder the pins 

![jst_female](https://github.com/kkckrnz/treble/blob/main/docs/images/jst_female.jpeg)

#### JST connector (Male)
1. Follow this [video guide](https://www.youtube.com/watch?v=UD1h8ug3wQQ) to install connector to the battery
2. Check battery polarity. Positive wire should be inserted to the positive female JST connector pin marked on the PCB

![jst_male](https://github.com/kkckrnz/treble/blob/main/docs/images/jst_male.jpeg)

#### Battery
1. Make sure the power switch is OFF (marked **X** on the PCB)
2. Insert the male JST connector to the female connector
3. Put the battery in place
4. Socket the MCU board

![battery](https://github.com/kkckrnz/treble/blob/main/docs/images/battery.jpeg)

## 3. Testing
1. Flash the firmware.
2. Go to [keyboard tester](https://www.keyboardtester.com/tester.html) and simulate key press using a pair of tweezers.

![testing](https://github.com/kkckrnz/treble/blob/main/docs/images/testing.jpeg)

## 4. Key switches & Keycaps
1. Insert switches into the PCB
2. Place keycaps on the switches
3. Flip the PCB and solder switch pins

![switches-keycaps](https://github.com/kkckrnz/treble/blob/main/docs/images/switches.jpeg)

## 5. Assembly
1. Put the main PCB and bottom plate together (four corners mounting holes)
2. Mount the standoffs
3. Place the cover plate on top of standoffs
4. Put rubber feet on the bottom

![assembly](https://github.com/kkckrnz/treble/blob/main/docs/images/assembly.jpeg)

## Finished keyboard

![treble_top](https://github.com/kkckrnz/treble/blob/main/docs/images/treble_top.jpg)

