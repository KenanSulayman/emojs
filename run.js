var m = require('./build/Release/emojs'), fs = require('fs');

hi = new m.NodeEPOCDriver();

var count = 0;

var cogMap = {
    0x0001: 'COG_NEUTRAL',
    0x0002: 'COG_PUSH',
    0x0004: 'COG_PULL',
    0X0008: 'COG_LIFT',
    0X0010: 'COG_DROP',
    0X0020: 'COG_LEFT',
    0X0040: 'COG_RIGHT',
    0X0080: 'COG_ROTATE_LEFT',
    0X0100: 'COG_ROTATE_RIGHT',
    0X0200: 'COG_ROTATE_CLOCKWISE',
    0X0400: 'COG_ROTATE_COUNTER_CLOCKWISE',
    0X0800: 'COG_ROTATE_FORWARD',
    0X1000: 'COG_ROTATE_REVERSE',
    0X2000: 'DISAPPEAR'
};


hi.connect('/Users/jpleibundguth/Library/Application Support/Emotiv/Profiles/jleibund.emu',function(e){
    if (e.blink) console.log('Blink');
    if (e.lookLeft) console.log('LookLeft');
    if (e.lookRight) console.log('LookRight');
    if (e.winkLeft) console.log('WinkLeft');
    if (e.winkRight) console.log('WinkRight');
    if (e.cognitivAction >1) console.log('Cog: ',cogMap[e.cognitivAction], ' Power='+ e.cognitivPower);

    if (e.eyebrow) console.log('Eyebrow: ', e.eyebrow);
    if (e.furrow) console.log('Furrow: ', e.furrow);
    if (e.smile) console.log('Smile: ', e.smile);
    if (e.clench) console.log('Clench: ', e.clench);
    if (e.smirkLeft) console.log('SmirkLeft: ', e.eyebrow);
    if (e.smirkRight) console.log('SmirkRight: ', e.eyebrow);
    if (e.laugh) console.log('Laugh: ', e.eyebrow);
    if (e.shortTermExcitement) console.log('Short Term Excitement: ', e.eyebrow);
    if (e.longTermExcitement) console.log('Long Term Excitement: ', e.eyebrow);
    if (e.engagementOrBoredom) console.log('Engagement or Boredom: ', e.eyebrow);

});


//   if (count > 5)
//        hi.disconnect();
//   count++;
