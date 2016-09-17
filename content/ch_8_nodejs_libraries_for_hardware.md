# Chapter 8: Node.js Libraries for Hardware

The JavaScript ecosystem is famous for its many libraries. This chapters looks closer at Node.js libraries for hardware.


## Johnny-Five

[Johnny-Five](http://johnny-five.io) provides a JavaScript API to work with embedded devices. Originally written for Arduino boards, the library supports many boards right now. The project has an excellent documentation and also supports many [components](http://embeddednodejs.com/components/) out of the box.

Johnny-five supports different boards (such as Arduino, Tessel, Intel Edison, ... ) with help of IO adapters. 

### Arduino

Arduino together with the Firmata protocol has many examples of Johnny-five usages. For example:

* control multiple LEDs with a single pin: <a href="http://johnny-five.io/examples/expander-PCF8575/">Port Expander - PCF8575</a>

### Tessel 2

Sparkfun has a nice collection of experiments with a Tessel 2.  For example: 

* [Control a switch](https://learn.sparkfun.com/tutorials/experiment-guide-for-the-johnny-five-inventors-kit/experiment-5-reading-an-spdt-switch)
* [Using an LCD screen](https://learn.sparkfun.com/tutorials/experiment-guide-for-the-johnny-five-inventors-kit/experiment-12-using-an-lcd-screen)



## The serialport

In case you need to work with data from an embedded device directly, serial ports are very helpful. With serialports, you can transfer data from one device to another. A good place to start with serial communication with Node.js is the [serialport](https://www.npmjs.com/package/serialport) library.  The GitHub project can be found at [Node serialport library](https://github.com/voodootikigod/node-serialport)

[This blog post](http://thinkingonthinking.com/serial-communication-with-nodejs/) shows some example usage of Node serial port.

Also, there is the [Arduino's Experimenters guide for Node.js](http://node-ardx.org/) with examples on the serial port.



## Cylon.js 

Another library to build network systems and robots is the [Cylon.js](http://cylonjs.com/) library.

## MRAA

A good place to learn about JavaScript integration with lower level C or C++ code is the [MRAA lib](https://github.com/intel-iot-devkit/mraa). With this library, you also can control pins for PWM and communication with Node.js


## Tessel 2

The Tessel also has many modules for working with hardware and components. One good place to learn about acommunication protocols is here:

[Tessel and Communication Protocols](https://tessel.io/blog/108840925797/a-web-developers-guide-to-communication-protocols)
