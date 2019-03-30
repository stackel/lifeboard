/* eslint-disable import/prefer-default-export */
export const philipsHueLightList = [{
  id: 1,
  state: {
    on: false,
    bri: 254,
    hue: 8418,
    sat: 140,
    effect: 'none',
    xy: [0.4573, 0.41],
    ct: 366,
    alert: 'none',
    colormode: 'ct',
    mode: 'homeautomation',
    reachable: true,
  },
  swupdate: {
    state: 'readytoinstall',
    lastinstall: '2017-12-19T19:59:31',
  },
  type: 'Extended color light',
  name: 'Bedroom desk lamp',
  modelid: 'LCT010',
  manufacturername: 'Philips',
  productname: 'Hue color lamp',
  capabilities: {
    certified: true,
    control: {
      mindimlevel: 1000,
      maxlumen: 806,
      colorgamuttype: 'C',
      colorgamut: [[0.6915, 0.3083], [0.17, 0.7], [0.1532, 0.0475]],
      ct: { min: 153, max: 500 },
    },
    streaming: {
      renderer: true,
      proxy: true,
    },
  },
  config: {
    archetype: 'sultanbulb',
    function: 'mixed',
    direction: 'omnidirectional',
  },
  uniqueid: '00:17:88:01:02:3c:ef:91-0b',
  swversion: '1.29.0_r21169',
  swconfigid: '6A139B19',
  productid: 'Philips-LCT010-1-A19ECLv4',
}];
