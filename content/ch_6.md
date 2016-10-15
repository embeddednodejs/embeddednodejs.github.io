# Chapter 6: Single board computers</h1> 


## General Embedded Linux 

Single board computers require the setup of an operating system. Most boards run the operating from an embedded flash memory (eMMC). A good resource to learn about embedded Linux is [Embedded Linux Wiki](http://elinux.org/Main_Page). There is also an IRC chat channel irc.freenode (#edev) to ask questions.

## Raspberry Pi

The Raspberry Pi (RasPi or RPi) is one of the most popular single board computers. The community is interacting at the [forum](https://www.raspberrypi.org/forums/) or via the [/r/raspberry_pi](https://www.reddit.com/r/raspberry_pi/) reddit.

To work with JavaScrpt on a Raspberry Pi you need to <a href="https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions">install an operating system such as Linux Debian </a>. Once you have an OS running, you can follow the steps to <a href="https://learn.adafruit.com/node-embedded-development/installing-node-dot-js">install Node.js</a>.

## OpenWRT 

OpenWRT is a popular operating system for network routers and also supports running Node.js.

It is even possible to run a smaller Node.js version, such as <a href="https://github.com/jxcore/jxcore/blob/master/doc/OpenWrt_Compile.md">Bundle JXcore for OpenWRT (ARM, mipsel) with memory requirements of only 16Mb+</a>

## Beaglebone 

Beaglebone comes with BoneScript <a href="http://elinux.org/Beagleboard:BoneScript">BoneScript overview</a>. This prepares for JavaScript and IoT development.

## Intel Edison/Galileo

The Intel Edison is a computer on a module with a x86 compatible CPU. It has also a number of connectivity solutions out of the box.

To interact with Intel Edison community, a good place to start is the [forum Intel Edison](https://communities.intel.com/community/tech/edison). Also, you can find ideas for projects and ask questions at [reddit](https://www.reddit.com/r/IntelEdison/)

To setup a board, a number of places are helpful:

<ul> 
  <li><a href="http://fab-lab.eu/edison/">(Howto) Getting started with the board</a></li> 
          <li><a href="http://blog.farsinotare.com/2015/12/26/blinking-leds-with-edison/">(Howto) Blinking LEDs with the Edison</a></li> 
          <li><a href="http://www.microcasts.tv/edison/">(Pinout) Interactive Edison Pinout</a></li> 
          <li><a href="http://rwx.io/blog/2015/02/18/seting-up-an-edison/">(Howto) Setup Intel Edison</a></li> 
          <li><a href="https://github.com/w4ilun/edison-guides/wiki/Installing-Git-on-Intel-Edison">(Howto) Install Git on Edison</a></li> 
          <li><a href="https://downloadcenter.intel.com/download/25028">(Images) Download latest Yocto Image</a></li> 
          <li><a href="http://www.intel.com/support/edison/sb/CS-035262.htm">(Howto) Flash latest Yocto Image</a></li> 
          <li><a href="http://www.i-programmer.info/programming/hardware/8744-exploring-edison-mraa-gpio.html">(Overview) GPIO mapping Mraa and SysFs</a></li> 
                   <li><a href="http://rexstjohn.com/getting-wi-fi-with-intel-edison/">Wifi getting Started</a></li> 
   <li><a href="http://rwx.io/blog/2015/08/16/edison-wifi-config/">Tricks for Wifi config</a></li> 
            <li><a href="http://hackaday.com/2015/04/01/a-stack-of-boards-for-an-edison-breadboard-adapter/">Breakout friendly Intel Edison</a></li> 
             <li><a href="http://www.emutexlabs.com/project/215-intel-edison-gpio-pin-multiplexing-guide">GPIO Mapping on Intel Edison</a></li> 
               <li><a href="http://rexstjohn.com/configure-intel-edison-for-bluetooth-le-smart-development/">Configure Bluetooth</a></li> 
</ul> 

A good description how to install Node.js comes actually via Pyhton <li><a href="http://senzations.net/wp-content/uploads/2014/66/Senzations14-Gallileo-Advanced-Python.pdf">Galileo and Python</a>. This applies partly to Node.js too.



# Upboard

A good video for Windows how to install the Ubilinux OS on an Upboard is here:

<iframe width="560" height="315" src="https://www.youtube.com/embed/Tc_G6ylXSxg" frameborder="0" allowfullscreen></iframe>


For MacOS/Linux users you can use the dd command to copy the files. Similar to the video here:

<iframe width="230" height="129" src="https://www.youtube.com/embed/xhZjpYQImck?t=1m50s" frameborder="0" allowfullscreen></iframe>
