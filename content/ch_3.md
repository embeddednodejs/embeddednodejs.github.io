# Chapter 3: Espruino

The Espruino project enables JavaScript for embedded development on multiple levels. First, it provides a mini [JavaScript compiler](https://github.com/gfwilliams/EspruinoCompiler) to allows to run JavaScript on a microcontroller. Second, Espruino is hardware that can be controlled from a web browser or the serial port.

## Espruino

On the hardware side, the [Espruino Pico](http://www.espruino.com/Pico) is an ineresting board to buy. You can follow the [Quick Start](http://www.espruino.com/Quick+Start) instructions for a first feeling.
The Espruino web page also has nice collection of [Tutorials](http://www.espruino.com/Tutorials).

## Connecting to an Espruino

Besides a command-line application and web IDE, you can connect to an Espruino with a serial interface. For this, download the terminal program [screen (MacOS/Linux)](https://www.gnu.org/software/screen/). 

## Robots with Espruino

Gordon has built [some robots based on Espruino](http://www.espruino.com/RobotPCB). The parts for this robot incl. the board are around £20. Ask [Gordon](http://espruino.com) for more information.

<img style="width: 350px" src="http://www.espruino.com/refimages/RobotPCB_robot.jpg" />

For this robot, here is a 100% DIY version:

<img style="width: 350px" src="/images/espruino_bot.png">

The Espruino does not have the processing power to manipulate images currently. But it is is possible to hook a [super hacky low res camera to an Espruino](http://www.espruino.com/ADNS5050)

# The Espruino Compiler

The [Espruino compiler](http://www.espruino.com/Compilation)  is special in the sense that there is no bytecode in Espruino, but it executes JavaScript as it parses it. 

It is also possibly to run Assembler code out of JavaScript, as shown [here](http://www.espruino.com/Assembler) and [here](https://github.com/espruino/EspruinoTools/blob/gh-pages/plugins/assembler.js).

With this approach, it is possible to use real ARM assembly in your JS - it doesn't have 100% of the Thumb instructions, but is good enough for most things. 

