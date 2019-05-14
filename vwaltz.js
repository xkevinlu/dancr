const vNaturalTurn123Data = [
  {
    type: 'percent',
    text: [
      'Prepare to move towards LOD',
      'Begin with weight on left foot',
      'Begin with weight on right foot',
    ],
    ml: [15, 40, dc, 1, 'top'],
    mr: [20, 45, dc, 0.3, 'top', 'all 2s'],
    ll: [25, 45, bdc, 0.3, 'top'],
    lr: [20, 40, bdc, 1, 'top'],
  },
  {
    type: 'percent',
    text: [
      '1. Moving together towards LOD',
      '1. RF fwd (HT),commence to rise end of 1',
      '1. LF back (TH),commence to rise end of 1 , NFR',
    ],
    ml: [0, 0, 0, -0.7, 'top'],
    mr: [20, 0, 45, 0.7, 'top', 'all 2s'],
    ll: [15, 5, 45, 0.7, 'top'],
    lr: [0, 0, 0, -0.7, 'top'],
  },
  {
    type: 'percent',
    text: [
      '2. Moving together towards LOD',
      '2. LF to side (T),cont. to rise',
      '2. RF to side (T),cont. to rise',
    ],
    ml: [60, 5, 135, 0.7, 'top'],
    mr: [0, 0, 90, -0.7, 'top',
      'left 2s,top 2s,opacity 2s,transform 1.5s 0.5s',
    ],
    ll: [0, 0, 0, -0.7, 'top'],
    lr: [50, 5, 180, 0.7, 'top'],
  },
  {
    type: 'percent',
    text: [
      '3. Collecting weight under body,change weight end of 3',
      '3. RF closes to LF (T),cont. to rise',
      '3. LF closes to RF (T),cont. to rise',
    ],
    ml: [0, 0, 45, -0.7, 'top'],
    mr: [30, -5, 45, 0.7, 'top'],
    ll: [25, -10, 135, 0.7, 'top'],
    lr: [0, 0, 0, -0.7, 'top'],
  },
];

const vNaturalTurn456Data = [
  {
    type: 'percent',
    text: [
      'Prepare to move towards LOD',
      'Begin with weight on right foot',
      'Begin with weight on left foot',
    ],
    ml: [25, 45, bdc, 0.3, 'top'],
    mr: [20, 40, bdc, 1, 'top'],
    ll: [15, 40, dc+360, 1, 'top'],
    lr: [20, 45, dc+360, 0.3, 'top', 'all 2s'],
  },
  {
    type: 'percent',
    text: [
      '1. Moving together towards LOD',
      '1. LF back (TH),commence to rise end of 1 , NFR',
      '1. RF fwd (HT),commence to rise end of 1',
    ],
    ml: [15, 5, 45, 0.7, 'top'],
    mr: [0, 0, 0, -0.7, 'top'],
    ll: [0, 0, 0, -0.7, 'top'],
    lr: [20, 0, 45, 0.7, 'top'],
  },
  {
    type: 'percent',
    text: [
      '2. Moving together towards LOD',
      '2. RF to side (T),cont. to rise',
      '2. LF to side (T),cont. to rise',
    ],
    ml: [0, 0, 0, -0.7, 'top'],
    mr: [50, 5, 180, 0.7, 'top'],
    ll: [60, 5, 135, 0.7, 'top'],
    lr: [0, 0, 90, -0.7, 'top',
      'left 2s,top 2s,opacity 2s,transform 1.5s 0.5s',
    ],
  },
  {
    type: 'percent',
    text: [
      '3. Collecting weight under body,change weight end of 3',
      '3. LF closes to RF (T)',
      '3. RF closes to LF (T)',
    ],
    ml: [25, -10, 135, 0.7, 'top'],
    mr: [0, 0, 0, -0.7, 'top'],
    ll: [0, 0, 45, -0.7, 'top'],
    lr: [30, -5, 45, 0.7, 'top'],
  },
];

const vReverseTurn123Data = [
  {
    type: 'percent',
    text: [
      'Prepare to move towards LOD',
      'Begin with weight on left foot',
      'Begin with weight on right foot',
    ],
    ml: [10, 45, bdw, 1, 'top'],
    mr: [15, 40, bdw, 0.3, 'top', 'all 2s'],
    ll: [17, 35, dw, 0.3, 'top', 'all 2s'],
    lr: [12, 40, dw, 1, 'top'],
  },
  {
    type: 'percent',
    text: [
      '1. Moving together towards LOD',
      '1. RF fwd (HT),commence to rise end of 1',
      '1. LF back (TH),commence to rise end of 1 , NFR',
    ],
    ml: [0, 0, 0, -0.7, 'top'],
    mr: [20, -10, -45, 0.7, 'top'],
    ll: [18, 0, -45, 0.7, 'top'],
    lr: [0, 0, 0, -0.7, 'top'],
  },
  {
    type: 'percent',
    text: [
      '2. Moving together towards LOD',
      '2. LF to side (T),cont. to rise',
      '2. RF to side (T),cont. to rise',
    ],
    ml: [55, -15, -180, 0.7, 'top'],
    mr: [0, 0, -90, -0.7, 'top',
      'left 2s,top 2s,opacity 2s,transform 1.5s 0.5s',
    ],
    ll: [0, 0, -90, -0.7, 'top',
      'left 2s,top 2s,opacity 2s,transform 1.5s 0.5s',
    ],
    lr: [47, 2, -135, 0.7, 'top'],
  },
  {
    type: 'percent',
    text: [
      '3. Collecting weight under body,change weight end of 3',
      '3. RF closes to LF (T)',
      '3. LF crosses in front of RF (T)',
    ],
    ml: [0, 0, 0, -0.7, 'top'],
    mr: [25, 5, -45, 0.7, 'top'],
    ll: [25, 3, -45, 0.7, 'top'],
    lr: [0, 0, 0, -0.7, 'top'],
  },
];

const vReverseTurn456Data = [
  {
    type: 'percent',
    text: [
      'Prepare to move towards LOD',
      'Begin with weight on left foot',
      'Begin with weight on right foot',
    ],
    ll: [10, 45, bdw-360, 1, 'top'],
    lr: [8, 50, c, 0.3, 'top', 'all 2s'],
    ml: [17, 35, dw, 0.3, 'top', 'all 2s'],
    mr: [12, 40, dw, 1, 'top'],
  },
  {
    type: 'percent',
    text: [
      '1. Moving together towards LOD',
      '1. RF fwd (HT),commence to rise end of 1',
      '1. LF back (TH),commence to rise end of 1 , NFR',
    ],
    ll: [0, 0, 0, -0.7, 'top'],
    lr: [27, -20, -90, 0.7, 'top'],
    ml: [18, 0, -45, 0.7, 'top'],
    mr: [0, 0, 0, -0.7, 'top'],
  },
  {
    type: 'percent',
    text: [
      '2. Moving together towards LOD',
      '2. LF to side (T),cont. to rise',
      '2. RF to side (T),cont. to rise',
    ],
    ll: [55, -15, -180, 0.7, 'top'],
    lr: [0, 0, -90, -0.7, 'top',
      'left 2s,top 2s,opacity 2s,transform 1.5s 0.5s',
    ],
    ml: [0, 0, -90, -0.7, 'top',
      'left 2s,top 2s,opacity 2s,transform 1.5s 0.5s',
    ],
    mr: [47, 2, -135, 0.7, 'top'],
  },
  {
    type: 'percent',
    text: [
      '3. Collecting weight under body,change weight end of 3',
      '3. RF closes to LF (T)',
      '3. LF crosses in front of RF (T)',
    ],
    ll: [0, 0, 0, -0.7, 'top'],
    lr: [25, 5, -45, 0.7, 'top'],
    ml: [25, 3, -45, 0.7, 'top'],
    mr: [0, 0, 0, -0.7, 'top'],
  },
];

const fwdChangeNtrData = [
  {
    type: 'percent',
    text: [
      'Prepare to move towards LOD',
      'Begin with weight on left foot',
      'Begin with weight on right foot',
    ],
    ml: [15, 40, dc, 1, 'top'],
    mr: [20, 45, dc, 0.3, 'top', 'all 2s'],
    ll: [25, 45, bdc, 0.3, 'top'],
    lr: [20, 40, bdc, 1, 'top'],
  },
  {
    type: 'percent',
    text: [
      '1. Moving together towards LOD',
      '1. RF fwd (HT),commence to rise end of 1',
      '1. LF back (TH),commence to rise end of 1 , NFR',
    ],
    ml: [0, 0, 0, -0.7, 'top'],
    mr: [20, 0, 45, 0.7, 'top', 'all 2s'],
    ll: [15, 5, 45, 0.7, 'top'],
    lr: [0, 0, 0, -0.7, 'top'],
  },
  {
    type: 'percent',
    text: [
      '2. Moving together towards LOD',
      '2. LF to side (T),cont. to rise',
      '2. RF to side (T),cont. to rise',
    ],
    ml: [55, -10, 90, 0.7, 'top'],
    mr: [0, 0, 0, -0.7, 'top',
      'left 2s,top 2s,opacity 2s,transform 1.5s 0.5s',
    ],
    ll: [0, 0, 0, -0.7, 'top'],
    lr: [50, -5, 90, 0.7, 'top'],
  },
  {
    type: 'percent',
    text: [
      '3. Collecting weight under body,change weight end of 3',
      '3. RF closes to LF (T)',
      '3. LF closes to RF (T)',
    ],
    ml: [0, 0, 0, -0.7, 'top'],
    mr: [25, -10, 45, 0.7, 'top'],
    ll: [25, -10, 45, 0.7, 'top'],
    lr: [0, 0, 0, -0.7, 'top'],
  },
];

const fwdChangeRtnData = [
  {
    type: 'percent',
    text: [
      'Prepare to move towards LOD',
      'Begin with weight on left foot',
      'Begin with weight on right foot',
    ],
    ll: [10, 45, bdw, 1, 'top'],
    lr: [15, 40, bdw, 0.3, 'top', 'all 2s'],
    ml: [17, 35, dw, 0.3, 'top', 'all 2s'],
    mr: [12, 40, dw, 1, 'top'],
  },
  {
    type: 'percent',
    text: [
      '1. Moving together towards LOD',
      '1. RF fwd (HT),commence to rise end of 1',
      '1. LF back (TH),commence to rise end of 1 , NFR',
    ],
    ll: [0, 0, 0, -0.7, 'top'],
    lr: [25, -10, -45, 0.7, 'top'],
    ml: [20, 0, -45, 0.7, 'top'],
    mr: [0, 0, 0, -0.7, 'top'],
  },
  {
    type: 'percent',
    text: [
      '2. Moving together towards LOD',
      '2. LF to side (T),cont. to rise',
      '2. RF to side (T),cont. to rise',
    ],
    ml: [0, 0, 0, -0.7, 'top'],
    mr: [53, 15, -90, 0.7, 'top'],
    ll: [60, 10, -90, 0.7, 'top'],
    lr: [0, 0, 0, -0.7, 'top'],
  },
  {
    type: 'percent',
    text: [
      '3. Collecting weight under body,change weight end of 3',
      '3. RF closes to LF (T),cont. to rise',
      '3. LF closes to RF (T),cont. to rise',
    ],
    ml: [23, 16, -45, 0.7, 'top'],
    mr: [0, 0, 0, -0.7, 'top'],
    ll: [0, 0, 0, -0.7, 'top'],
    lr: [25, 20, -45, 0.7, 'top'],
  },
];

const bwdChangeNtrData= [
  {
    type: 'percent',
    text: [
      'Prepare to move towards LOD',
      'Begin with weight on left foot',
      'Begin with weight on right foot',
    ],
    ll: [15, 40, dc, 1, 'top'],
    lr: [20, 45, dc, 0.3, 'top', 'all 2s'],
    ml: [25, 45, bdc, 0.3, 'top'],
    mr: [20, 40, bdc, 1, 'top'],
  },
  {
    type: 'percent',
    text: [
      '1. Moving together towards LOD',
      '1. RF fwd (HT),commence to rise end of 1',
      '1. LF back (TH),commence to rise end of 1 , NFR',
    ],
    ll: [0, 0, 0, -0.7, 'top'],
    lr: [20, 0, 45, 0.7, 'top', 'all 2s'],
    ml: [15, 5, 45, 0.7, 'top'],
    mr: [0, 0, 0, -0.7, 'top'],
  },
  {
    type: 'percent',
    text: [
      '2. Moving together towards LOD',
      '2. LF to side (T),cont. to rise',
      '2. RF to side (T),cont. to rise',
    ],
    ll: [55, -10, 90, 0.7, 'top'],
    lr: [0, 0, 0, -0.7, 'top',
      'left 2s,top 2s,opacity 2s,transform 1.5s 0.5s',
    ],
    ml: [0, 0, 0, -0.7, 'top'],
    mr: [50, -5, 90, 0.7, 'top'],
  },
  {
    type: 'percent',
    text: [
      '3. Collecting weight under body,change weight end of 3',
      '3. RF closes to LF (T)',
      '3. LF closes to RF (T)',
    ],
    ll: [0, 0, 0, -0.7, 'top'],
    lr: [25, -10, 45, 0.7, 'top'],
    ml: [25, -10, 45, 0.7, 'top'],
    mr: [0, 0, 0, -0.7, 'top'],
  },
];


const bwdChangeRtnData = [
  {
    type: 'percent',
    text: [
      'Prepare to move towards LOD',
      'Begin with weight on left foot',
      'Begin with weight on right foot',
    ],
    ml: [10, 45, bdw, 1, 'top'],
    mr: [15, 40, bdw, 0.3, 'top', 'all 2s'],
    ll: [17, 35, dw, 0.3, 'top', 'all 2s'],
    lr: [12, 40, dw, 1, 'top'],
  },
  {
    type: 'percent',
    text: [
      '1. Moving together towards LOD',
      '1. RF fwd (HT),commence to rise end of 1',
      '1. LF back (TH),commence to rise end of 1 , NFR',
    ],
    ml: [0, 0, 0, -0.7, 'top'],
    mr: [25, -10, -45, 0.7, 'top'],
    ll: [20, 0, -45, 0.7, 'top'],
    lr: [0, 0, 0, -0.7, 'top'],
  },
  {
    type: 'percent',
    text: [
      '2. Moving together towards LOD',
      '2. LF to side (T),cont. to rise',
      '2. RF to side (T),cont. to rise',
    ],
    ll: [0, 0, 0, -0.7, 'top'],
    lr: [53, 15, -90, 0.7, 'top'],
    ml: [60, 10, -90, 0.7, 'top'],
    mr: [0, 0, 0, -0.7, 'top'],
  },
  {
    type: 'percent',
    text: [
      '3. Collecting weight under body,change weight end of 3',
      '3. RF closes to LF (T),cont. to rise',
      '3. LF closes to RF (T),cont. to rise',
    ],
    ll: [23, 16, -45, 0.7, 'top'],
    lr: [0, 0, 0, -0.7, 'top'],
    ml: [0, 0, 0, -0.7, 'top'],
    mr: [25, 20, -45, 0.7, 'top'],
  },
];

const reverseFleckerlData = [
  {
    type: 'percent',
    text: [
      'Dance on the spot in the center of floor',
      'Begin with weight on right foot',
      'Begin with weight on left foot',
    ],
    ml: [35, 45, lod, 0.3, 'top'],
    mr: [35, 52, lod, 1, 'top'],
    ll: [40, 56, blod, 1, 'top'],
    lr: [40, 49, blod, 0.3, 'top'],
  },
  {
    type: 'percent',
    text: [
      '1. Moving together towards LOD',
      '1. RF fwd (HT),commence to rise end of 1',
      '1. LF back (TH),commence to rise end of 1 , NFR',
    ],
    ml: [5, -10, -90, 0.7, 'top'],
    mr: [0, 0, 0, -0.7, 'top'],
    ll: [0, 0, 0, -0.7, 'top'],
    lr: [5, -15, -45, 0.7, 'top'],
  },
  {
    type: 'percent',
    text: [
      '2. Moving together towards LOD',
      '2. LF to side (T),cont. to rise',
      '2. RF to side (T),cont. to rise',
    ],
    ml: [0, 0, 0, -0.7, 'top'],
    mr: [22, -22, -225, 0.7, 'top'],
    ll: [15, -35, -135, 0.7, 'top'],
    lr: [0, 0, 0, -0.7, 'top'],
  },
  {
    type: 'percent',
    text: [
      '3. Collecting weight under body,change weight end of 3',
      '3. RF closes to LF (T)',
      '3. LF crosses in front of RF (T)',
    ],
    ll: [0, 0, 0, -0.7, 'top'],
    lr: [0, 0, 0, 0.7, 'top'],
    ml: [10, 0, -270, 0.7, 'top'],
    mr: [0, 0, 0, -0.7, 'top'],
  },
  {
    type: 'percent',
    text: [
      '4. Moving together towards LOD',
      '4. RF fwd (HT),commence to rise end of 1',
      '4. LF back (TH),commence to rise end of 1 , NFR',
    ],
    ml: [5, -10, -90, -0.7, 'top'],
    mr: [0, 0, 0, 0.7, 'top'],
    ll: [0, 0, 0, 0.7, 'top'],
    lr: [5, -15, -45, -0.7, 'top'],
  },
  {
    type: 'percent',
    text: [
      '5. Moving together towards LOD',
      '5. LF to side (T),cont. to rise',
      '5. RF to side (T),cont. to rise',
    ],
    ml: [0, 0, 0, 0.7, 'top'],
    mr: [22, -22, -225, -0.7, 'top'],
    ll: [15, -35, -135, -0.7, 'top'],
    lr: [0, 0, 0, 0.7, 'top'],
  },
  {
    type: 'percent',
    text: [
      '6. Collecting weight under body,change weight end of 3',
      '6. RF closes to LF (T)',
      '6. LF crosses in front of RF (T)',
    ],
    ll: [0, 0, 0, -0.7, 'top'],
    lr: [0, 0, 0, 0.7, 'top'],
    ml: [10, 0, -270, 0.7, 'top'],
    mr: [0, 0, 0, -0.7, 'top'],
  },
];

const naturalFleckerlData = [
  {
    type: 'percent',
    text: [
      'Prepare to move towards LOD',
      'Begin with weight on left foot',
      'Begin with weight on right foot',
    ],
    ll: [10, 45, bdw-360, 1, 'top'],
    lr: [8, 50, c, 0.3, 'top', 'all 2s'],
    ml: [17, 35, dw, 0.3, 'top', 'all 2s'],
    mr: [12, 40, dw, 1, 'top'],
  },
  {
    type: 'percent',
    text: [
      '1. Moving together towards LOD',
      '1. RF fwd (HT),commence to rise end of 1',
      '1. LF back (TH),commence to rise end of 1 , NFR',
    ],
    ll: [0, 0, 0, -0.7, 'top'],
    lr: [27, -20, -90, 0.7, 'top'],
    ml: [18, 0, -45, 0.7, 'top'],
    mr: [0, 0, 0, -0.7, 'top'],
  },
  {
    type: 'percent',
    text: [
      '2. Moving together towards LOD',
      '2. LF to side (T),cont. to rise',
      '2. RF to side (T),cont. to rise',
    ],
    ll: [55, -15, -180, 0.7, 'top'],
    lr: [0, 0, -90, -0.7, 'top',
      'left 2s,top 2s,opacity 2s,transform 1.5s 0.5s',
    ],
    ml: [0, 0, -90, -0.7, 'top',
      'left 2s,top 2s,opacity 2s,transform 1.5s 0.5s',
    ],
    mr: [47, 2, -135, 0.7, 'top'],
  },
  {
    type: 'percent',
    text: [
      '3. Collecting weight under body,change weight end of 3',
      '3. RF closes to LF (T)',
      '3. LF crosses in front of RF (T)',
    ],
    ll: [0, 0, 0, -0.7, 'top'],
    lr: [25, 5, -45, 0.7, 'top'],
    ml: [25, 3, -45, 0.7, 'top'],
    mr: [0, 0, 0, -0.7, 'top'],
  },
];

const contraCheckData = [
  {
    type: 'percent',
    text: [
      'Prepare to check',
      'Begin with weight on right foot',
      'Begin with weight on left foot',
    ],
    ml: [35, 45, lod, 0.3, 'top'],
    mr: [35, 52, lod, 1, 'top'],
    ll: [40, 56, blod, 1, 'top'],
    lr: [40, 49, blod, 0.3, 'top'],
  },
  {
    type: 'percent',
    text: [
      '1. Moving together towards DC',
      '1. LF fwd in CBMP, small step (flat)',
      '1. RF back in CBMP, small step (B)',
    ],
    ml: [25, -5, -45, 0.7, 'top'],
    mr: [0, 0, 0, -0.3, 'top'],
    ll: [0, 0, 0, -0.3, 'top'],
    lr: [25, -5, -45, 0.7, 'top'],
  },
  {
    type: 'percent',
    text: [
      '2. Moving DW against LOD',
      '2. Transfer weight back to RF',
      '2. Transfer weight fwd to LF',
    ],
    ml: [-25, 5, 45, -0.7, 'top'],
    mr: [0, 0, 0, 0.3, 'top'],
    ll: [0, 0, 0, 0.3, 'top'],
    lr: [-25, 5, 45, -0.7, 'top'],
  },
];


const vwaltz_all_figures = [
  new Figure('Natural Turn (1-3)', 'Viennese Waltz', 'Bronze', 'Standard', vNaturalTurn123Data),
  new Figure('Natural Turn (4-6)', 'Viennese Waltz', 'Bronze', 'Standard', vNaturalTurn456Data),
  new Figure('Reverse Turn (1-3)', 'Viennese Waltz', 'Bronze', 'Standard', vReverseTurn123Data),
  new Figure('Reverse Turn (4-6)', 'Viennese Waltz', 'Bronze', 'Standard', vReverseTurn456Data),
  new Figure('Forward Change (Natural to Reverse)', 'Viennese Waltz', 'Bronze', 'Standard', fwdChangeNtrData),
  new Figure('Forward Change (Reverse to Natural)', 'Viennese Waltz', 'Bronze', 'Standard', fwdChangeRtnData),
  new Figure('Backward Change (Natural to Reverse)', 'Viennese Waltz', 'Bronze', 'Standard', bwdChangeNtrData),
  new Figure('Backward Change (Reverse to Natural)', 'Viennese Waltz', 'Bronze', 'Standard', bwdChangeRtnData),

  new Figure('Reverse Fleckerl', 'Viennese Waltz', 'Silver', 'Standard', reverseFleckerlData),

  new Figure('Natural Fleckerl', 'Viennese Waltz', 'Gold', 'Standard', naturalFleckerlData),
  new Figure('Contra Check', 'Viennese Waltz', 'Gold', 'Standard', contraCheckData),

];

vwaltz_all_figures[0].preceding_figures= [
  vwaltz_all_figures[1],
  vwaltz_all_figures[5],
];
vwaltz_all_figures[0].following_figures= [
  vwaltz_all_figures[1],
  vwaltz_all_figures[6],
];


vwaltz_all_figures[1].preceding_figures= [
  vwaltz_all_figures[0],
  vwaltz_all_figures[7],
];
vwaltz_all_figures[1].following_figures= [
  vwaltz_all_figures[0],
  vwaltz_all_figures[4],
];


vwaltz_all_figures[2].preceding_figures= [
  vwaltz_all_figures[3],
  vwaltz_all_figures[6],
];
vwaltz_all_figures[2].following_figures= [
  vwaltz_all_figures[3],
  vwaltz_all_figures[5],
  vwaltz_all_figures[8],
];


vwaltz_all_figures[3].preceding_figures= [
  vwaltz_all_figures[2],
  vwaltz_all_figures[4],
];
vwaltz_all_figures[3].following_figures= [
  vwaltz_all_figures[2],
  vwaltz_all_figures[7],
];


vwaltz_all_figures[4].preceding_figures= [
  vwaltz_all_figures[1],
  vwaltz_all_figures[5],
];
vwaltz_all_figures[4].following_figures= [
  vwaltz_all_figures[3],
  vwaltz_all_figures[5],
];


vwaltz_all_figures[5].preceding_figures= [
  vwaltz_all_figures[2],
  vwaltz_all_figures[4],
];
vwaltz_all_figures[5].following_figures= [
  vwaltz_all_figures[0],
  vwaltz_all_figures[4],
];

vwaltz_all_figures[6].preceding_figures= [
  vwaltz_all_figures[0],
  vwaltz_all_figures[7],
];
vwaltz_all_figures[6].following_figures= [
  vwaltz_all_figures[2],
  vwaltz_all_figures[7],
];

vwaltz_all_figures[7].preceding_figures= [
  vwaltz_all_figures[2],
  vwaltz_all_figures[6],
];
vwaltz_all_figures[7].following_figures= [
  vwaltz_all_figures[0],
  vwaltz_all_figures[6],
];

vwaltz_all_figures[8].preceding_figures= [
  vwaltz_all_figures[3],
];
vwaltz_all_figures[8].following_figures= [
  vwaltz_all_figures[10],
];

vwaltz_all_figures[9].preceding_figures= [
  vwaltz_all_figures[10],
  vwaltz_all_figures[0],
];
vwaltz_all_figures[9].following_figures= [
  vwaltz_all_figures[0],
  vwaltz_all_figures[1],
];

vwaltz_all_figures[10].preceding_figures= [
  vwaltz_all_figures[8],
  vwaltz_all_figures[2],
];
vwaltz_all_figures[10].following_figures= [
  vwaltz_all_figures[9],
  vwaltz_all_figures[1],
];
