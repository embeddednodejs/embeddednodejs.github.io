# Chapter 6: Single board computers</h1> 


## General Embedded Linux 

Single board computers require the setup of an operating system. Most boards run the operating from an embedded flash memory (eMMC). A good resource to learn about embedded Linux is [Embedded Linux Wiki](http://elinux.org/Main_Page). There is also an IRC chat channel irc.freenode (#edev) to ask questions.

A good general forum to discuss single board computers is at reddit, such as [/r/linuxboards](https://www.reddit.com/r/linuxboards/) or [/r/embeddedlinux](https://www.reddit.com/r/embeddedlinux/).

## Raspberry Pi

The Raspberry Pi (RasPi or RPi) is one of the most popular single board computers. The community is interacting at the [forum](https://www.raspberrypi.org/forums/) or via the [/r/raspberry_pi](https://www.reddit.com/r/raspberry_pi/) reddit.

To work with JavaScrpt on a Raspberry Pi you need to <a href="https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions">install an operating system such as Raspbian - a Linux Debian distribution</a>. You can download [Raspbian from here](https://www.raspberrypi.org/downloads/raspbian/). Also, you need to setup a network connection such as [Wifi](https://www.raspberrypi.org/documentation/configuration/wireless/wireless-cli.md).

Once you have an OS running, you can follow the steps to <a href="https://learn.adafruit.com/node-embedded-development/installing-node-dot-js">install Node.js</a>.



## Routers with OpenWRT 

OpenWRT is a popular operating system for network routers and also supports running Node.js. And, system-on-chips from network routers are increasingly popular for IoT devices.

Boards such as [Tessel 2](http://tessel.io/) come with OpenWRT and Node.js preinstalled. Also, there is the [Onion Omega](https://onion.io/), [ArduinoYun](https://www.arduino.cc/en/Main/ArduinoBoardYun), [LinkIt Smart](https://www.seeedstudio.com/LinkIt-Smart-7688-p-2573.html) and [most network routers](https://wiki.openwrt.org/doc/howto/generic.flashing) that run with OpenWRT.

Besides [Node.js](https://wiki.openwrt.org/doc/howto/nodejs) for OpenWRT, it is possible to run a smaller Node.js version, such as <a href="https://github.com/jxcore/jxcore/blob/master/doc/OpenWrt_Compile.md">Bundle JXcore for OpenWRT (ARM, mipsel) with memory requirements of only 16Mb+</a>

For the LinkIT board, this [gitbook](https://www.gitbook.com/book/iamblue/linkit-smart-nodejs/details/en) provides a good start. And, some [nice tutorials](https://github.com/lwmqn/documents/tree/master/tutorial) are also available. The LinkIT board is based on an [MT7688 with MIPS 24k instruction set](https://iamblue.gitbooks.io/linkit-smart-nodejs/content/en/intro/spec.html).


## Beaglebone 

Beaglebone comes with BoneScript <a href="http://elinux.org/Beagleboard:BoneScript">BoneScript overview</a>. This prepares for JavaScript and IoT development.

## Intel Edison/Galileo

The Intel Edison is a computer on a module with a x86 compatible CPU. It has also a number of connectivity solutions out of the box.

To interact with Intel Edison community, a good place to start is the [forum Intel Edison](https://communities.intel.com/community/tech/edison). Also, you can find ideas for projects and ask questions at [reddit](https://www.reddit.com/r/IntelEdison/)

To setup a board, a number of places are helpful:

* <a href="http://fab-lab.eu/edison/">(Howto) Getting started with the board</a></li> 
* <a href="http://blog.farsinotare.com/2015/12/26/blinking-leds-with-edison/">(Howto) Blinking LEDs with the Edison</a> 
* <a href="http://www.microcasts.tv/edison/">(Pinout) Interactive Edison Pinout</a></li> 
* <a href="http://rwx.io/blog/2015/02/18/seting-up-an-edison/">(Howto) Setup Intel Edison</a></li> 
* <a href="https://github.com/w4ilun/edison-guides/wiki/Installing-Git-on-Intel-Edison">(Howto) Install Git on Edison</a>
* <a href="https://downloadcenter.intel.com/download/25028">(Images) Download latest Yocto Image</a></li> 
* <a href="http://www.intel.com/support/edison/sb/CS-035262.htm">(Howto) Flash latest Yocto Image</a></li> 
* <a href="http://www.i-programmer.info/programming/hardware/8744-exploring-edison-mraa-gpio.html">(Overview) GPIO mapping Mraa and SysFs</a>
* <a href="http://rexstjohn.com/getting-wi-fi-with-intel-edison/">Wifi getting Started</a>
* <a href="http://rwx.io/blog/2015/08/16/edison-wifi-config/">Tricks for Wifi config</a></li> 
* <a href="http://hackaday.com/2015/04/01/a-stack-of-boards-for-an-edison-breadboard-adapter/">Breakout friendly Intel Edison</a></li> 
* <a href="http://www.emutexlabs.com/project/215-intel-edison-gpio-pin-multiplexing-guide">GPIO Mapping on Intel Edison</a></li> 
* <a href="http://rexstjohn.com/configure-intel-edison-for-bluetooth-le-smart-development/">Configure Bluetooth</a></li> 

A good description how to install Node.js comes actually via Pyhton <li><a href="http://senzations.net/wp-content/uploads/2014/66/Senzations14-Gallileo-Advanced-Python.pdf">Galileo and Python</a>. This applies partly to Node.js too.


# x86 based boards

The Intel x86 architecture has built-in compatibility with larger x86 desktop PCs or laptops. This can have advantage for embedded projects too.

## Upboard

A good video how to install the Ubilinux OS on an Upboard from Windows is here:

<iframe width="560" height="315" src="https://www.youtube.com/embed/Tc_G6ylXSxg" frameborder="0" allowfullscreen></iframe>


For MacOS/Linux users you can use the dd command to copy the files. After you insert a USB disk, you have to unmount it again, e.g. with:

     # diskutil umount /dev/disk3

Then, you need to copy a disk image. This can be done with the 'dd' command. Copying disk images takes a while. You can check the progress with http://unix.stackexchange.com/questions/11262/how-do-i-know-if-dd-is-still-working 


Similar to the video here:

<iframe width="230" height="129" src="https://www.youtube.com/embed/xhZjpYQImck?t=1m50s" frameborder="0" allowfullscreen></iframe>

## Minnowboard

http://wiki.minnowboard.org/MinnowBoard_Turbot

# C.H.I.P

The [CHIP] is an interesting single board computer especially interesting for its price:  9 USD only!

Getting started with the CHIP and JavaScript is fairly simple:

1) connect to the CHIP via USB and terminal progam such as screen (u/p: chip/chip)
2) connect CHIP to WiFi as discussed [here](http://docs.getchip.com/chip.html#wifi-connection) 
3) install Node Version manager as discussed [here](https://github.com/creationix/nvm#install-script)
4) install git: sudo apt-get install git-core



