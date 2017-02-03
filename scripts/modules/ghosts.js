// Module responsible for serving ghosts
var ghostModule = (function () {

    'use strict';

    var lImage = 'images/ghostl.png',
        rImage = 'images/ghostr.png',
        baseWidth = 150,
        baseHeight = 130,
        baseSize = 4,
        velReg = 2,
        startX = (window.innerWidth * 0.75),
        startX2 = (window.innerWidth * 0.25),
        startY = (window.innerHeight * 0.25),
        startY2 = (window.innerHeight * 0.75),
        ghosts = [];

    // Create a ghost prototype from a randPlayer
    var Ghost = Object.create(core.randPlayer, {
        width: {
            value: baseWidth,
            writable: true
        },
        height: {
            value: baseHeight,
            writable: true
        },
        xVel: {
            value: velReg,
            writable: true
        },
        yVel: {
            value: (-velReg),
            writable: true
        },
        xPos: {
            value: startX,
            writable: true
        },
        yPos: {
            value: startY,
            writable: true
        },
        size: {
            value: baseSize,
            writable: true
        },
        image: {
            value: core.makeImage(rImage),
            writable: true
        },
        lImage: {
            value: lImage
        },
        rImage: {
            value: rImage
        },
        clicked: {
            value: false,
            writable: true
        }
    });

    // Push prototype onto ghosts array
    ghosts.push(Ghost);

    var Ghost2 = Object.create(Ghost, {
        width: {
            value: baseWidth,
            writable: true
        },
        height: {
            value: baseHeight,
            writable: true
        },
        xVel: {
            value: velReg,
            writable: true
        },
        yVel: {
            value: velReg,
            writable: true
        },
        xPos: {
            value: startX,
            writable: true
        },
        yPos: {
            value: startY2,
            writable: true
        },
        size: {
            value: baseSize,
            writable: true
        },
        image: {
            value: core.makeImage(rImage),
            writable: true
        },
        lImage: {
            value: lImage
        },
        rImage: {
            value: rImage
        },
        clicked: {
            value: false,
            writable: true
        }
    });

    // Push prototype onto ghosts array
    ghosts.push(Ghost2);



    var Ghost3 = Object.create(Ghost, {
        width: {
            value: baseWidth,
            writable: true
        },
        height: {
            value: baseHeight,
            writable: true
        },
        xVel: {
            value: (-velReg),
            writable: true
        },
        yVel: {
            value: (-velReg),
            writable: true
        },
        xPos: {
            value: startX2,
            writable: true
        },
        yPos: {
            value: startY,
            writable: true
        },
        size: {
            value: baseSize,
            writable: true
        },
        image: {
            value: core.makeImage(lImage),
            writable: true
        },
        lImage: {
            value: lImage
        },
        rImage: {
            value: rImage
        },
        clicked: {
            value: false,
            writable: true
        }
    });

    // Push prototype onto ghosts array
    ghosts.push(Ghost3);


    var Ghost4 = Object.create(Ghost, {
        width: {
            value: baseWidth,
            writable: true
        },
        height: {
            value: baseHeight,
            writable: true
        },
        xVel: {
            value: (-velReg),
            writable: true
        },
        yVel: {
            value: velReg,
            writable: true
        },
        xPos: {
            value: startX2,
            writable: true
        },
        yPos: {
            value: startY2,
            writable: true
        },
        size: {
            value: baseSize,
            writable: true
        },
        image: {
            value: core.makeImage(lImage),
            writable: true
        },
        lImage: {
            value: lImage
        },
        rImage: {
            value: rImage
        },
        clicked: {
            value: false,
            writable: true
        }
    });

    // Push prototype onto ghosts array
    ghosts.push(Ghost4);

    // Public API for ghostModule
    return {
        ghosts: ghosts
    };
})();