# ZMK Firmware Build Guide
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