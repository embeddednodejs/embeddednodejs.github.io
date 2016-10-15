# Chapter 1: Connecting Worlds - JavaScript on Hardware

This chapter shows the role of JavaScript as programming language for 'full-stack' IoT applications. General motivations for IoT as well as using JavaScript are discussed. Also, an introduction to Node.js and JavaScript is given.

## IoT and JavaScript

There are different levels of connecting systems and devices, as explained in [industry IoT reference model](http://cdn.iotwf.com/resources/72/IoT_Reference_Model_04_June_2014.pdf). As discussed in [this blog post](http://radar.oreilly.com/2015/06/the-smartest-way-to-program-smart-things-node-js.html), JavaScript offers a smarter way to program smart things. In a [similar blog post](https://blog.jscrambler.com/javascript-the-perfect-language-for-the-internet-of-things-iot/), the role of JavaScript for IoT is discussed.
This is also the topic of a podcast [JavaScript for embedded systems](https://www.oreilly.com/ideas/peter-hoddie-on-javascript-for-embedded-systems).

In [his IoT workshop at SolidCon 2015](http://cdn.oreillystatic.com/en/assets/1/event/127/Programming%20the%20Internet%20of%20Things%20with%20Node_js%20and%20HTML5%20Presentation.pdf), Michael McCool provides a good walkthrough of getting started with JavaScript and hardware.

The role of JavaScript for web interfaces is presented in the talk [The end of web development (as we know it)](http://www.slideshare.net/TechnicalMachine/tessel-the-end-of-web-development-as-we-know-it/15-The_Internet_of_Thingswill_be).

Another nice start is discussed in this blog post [Building a Node.js weather station in 20 minutes](https://www.oreilly.com/ideas/conquer-the-internet-of-things-in-20-minutes). And, in [Babbling with the merfolk: between the layers of JavaScript hardware by Suz Hinton](https://vimeo.com/129003513).

## Projects and showcases

In [Intel Edison project showcases (Japan)](http://edison-lab.jp/) several IoT projects can be found.

## Node.js

Nice ideas to work with bits and bytes and JavaScript can be found for example here: [Compare buffers in Node.js](http://stackoverflow.com/questions/30701220/how-to-compare-buffer-objects-in-nodejs). Buffers are important when it comes to working with [files](https://nodejs.org/api/fs.html).

## JavaScript runtime environments

* The [JXcore project](https://github.com/jxcore/jxcore/) is a runtime hat is optimized for an embedded device. You can embed this JavaScript runtime in your own projects as shown here: [Basics of embedding JXcore](https://github.com/jxcore/jxcore/blob/master/doc/native/Embedding_Basics.md)

* The project [Thali - Framework for connected devices](http://thaliproject.org/)

* Writing [Node.js Native Addons for C++](https://nodejs.org/api/addons.html)

## Learning JavaScript and References

* [JavaScript for Cats by Max Ogden](http://jsforcats.com/)
* [Speaking JavaScript](http://speakingjs.com) by Dr. Axel Rauschmayr
* JavaScript - The Definitive Guide by David Flanagan

## Bits and Bytes in JavaScript

Convert hex to decimal with:

    var num = 65794;
    hexString = num.toString(16);

Convert decimal to hex with:

    var num = parseInt(hexString, 16);


Create a squence of bytes from a string to numbers, a nice trick is to use buffers:

    var buf = new Buffer("deadbeaf", "hex");
    console.log(buf.toString());


