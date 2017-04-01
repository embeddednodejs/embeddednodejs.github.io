# Chapter 2: Blink with Arduino

## Chapter Overview

This chapters explains the basics of programming an Arduino with JavaScript. Arduino is popular for an easy getting started experience with an embedded device. Start here to find out about pins, analog and digital signals and firmware basics.

## Microcontrollers

From web development perspective, first contact with a microcontroller can be daunting. Take a look at this talk ["Between the layers of JavaScript hardware by Suz Hinton"](https://vimeo.com/129003513) for a nice introduction.

Microcontrollers are different from a microprocessor. To get a feeling for the issues look at this [MCU vs MPU white label paper](http://www.atmel.com/images/mcu_vs_mpu_article.pdf) by Atmel. Also, this discussion on Quora [Quora answer MCU vs MPU](https://www.quora.com/What-is-the-difference-between-a-microprocessor-and-microcontroller) and [Quora answer Embedded Linux vs MCU](https://www.quora.com/What-is-the-difference-between-a-Linux-based-embedded-system-and-a-microcontroller-based-embedded-system) can be helpful. 

## Arduino

For many, Arduino is the first contact with a microcontroller. For this, [Pinouts for Arduino](http://www.pighixxx.com/test/pinoutspg/boards/#prettyPhoto) are helpful. Pinouts can be generated with JavaScript for example as [here](/pinouts/arduino_uno.html).

Arduino boards come in all sizes and price ranges. An *Arduino Uno* is easy to handle without prior experience with electronics. You can get smaller [Arduino Pro Mini and smaller](http://blog.farsinotare.com/2015/11/08/arduino-pro-mini/) here. Also, the Arduino Nano is a nice board, and good collection of offers can be found [at mysensors.org](https://www.mysensors.org/store/#arduinos)

To build basic circuits, you can get some [Grove header Nano](https://www.tindie.com/products/imrehg/grovehat-for-arduino-nano/) here.

For people without prior Linux experience, an Arduino can also be a nice tool to explore the [Internet of Things](https://iamblue.gitbooks.io/linkit-smart-nodejs/content/en/edu/) as this discussion by the Smart Object team shows.

### How arduino compiles your sketch

The core software skills of Arduino relate to using a C++ compiler. You can setup the build toolchain yourself work with Arduino without IDE. For example, see [here how to compile an Arduino sketch from scratch](http://thinkingonthinking.com/an-arduino-sketch-from-scratch/).

## Firmata

To work with Arduino and JavaScript, you can use the Firmata protocol. Details about the Firmata protocol can be found in the [repository @ github](https://github.com/firmata/protocol). Alternatively, you can work with a serial protocol, as discussed in the Arduino forum [Interfacing Arduino with other software - Forum Arduino](http://forum.arduino.cc/index.php?board=12.0).

With the Firmata protocol and JavaScript library, you are able to play with most examples from the Arduino IDE in JavaScript. For example, you can control multiple LEDs with a single pin as shown in this example: <a href="http://johnny-five.io/examples/expander-PCF8575/">Port Expander - PCF8575</a>.
