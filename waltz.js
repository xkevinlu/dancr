const natural_turn_data = [
  {
    text: [
      'Prepare to move towards DW',
      'Begin with weight on left foot',
      'Begin with weight on right foot',
    ],
    ml: [75, 10, 135, 1],
    mr: [45, 40, 135, 0.3],
    ll: [70, 90, -45, 0.3],
    lr: [100, 60, -45, 1],
  },
  {
    text: [
      '1. Moving together towards DW',
      '1. RF fwd (HT),  commence to rise end of 1',
      '1. LF back (TH),  commence to rise end of 1 , NFR',
    ],
    ml: [0, 0, 0, -0.7],
    mr: [50, 50, 0, 0.7],
    ll: [30, 45, 0, 0.7],
    lr: [0, 0, 0, -0.7],
  },
  {
    text: [
      '2. Moving together towards LOD',
      '2. LF to side (T),  cont. to rise',
      '2. RF to side (T),  cont. to rise',
    ],
    ml: [155, 170, 90, 0.7],
    mr: [25, 0, 90, -0.7],
    ll: [0, 0, 0, -0.7],
    lr: [70, 120, 135, 0.7],
  },
  {
    text: [
      '3. Collecting weight under body,  change weight end of 3',
      '3. RF closes to LF (T),  cont. to rise',
      '3. LF closes to RF (T),  cont. to rise',
    ],
    ml: [0, 15, 45, -0.7],
    mr: [110, 75, 45, 0.7],
    ll: [70, 15, 135, 0.7],
    lr: [0, 0, 0, -0.7],
  },
];

const reverse_turn_data = [
  {
    text: [
      'Prepare to move towards DC',
      'Begin with weight on right foot',
      'Begin with weight on left foot',
    ],
    ml: [50, 200, 45, 0.3],
    mr: [80, 230, 45, 1],
    ll: [140, 200, 225, 1],
    lr: [110, 170, 225, 0.3],
  },
  {
    text: [
      '1. Moving together towards DC',
      '1. LF fwd (HT),  commence to rise end of 1',
      '1. RF back (TH),  commence to rise end of 1 , NFR',
    ],
    ml: [lgStep, -mdStep, -45, 0.7],
    mr: [0, 0, 0, -0.7],
    ll: [0, 0, 0, -0.7],
    lr: [smStep, -lgStep, -45, 0.7],
  },
  {
    text: [
      '2. Moving together towards LOD',
      '2. RF to side (T),  cont. to rise',
      '2. LF to side (T),  cont. to rise',
    ],
    ml: [0, 0, 0, -0.7],
    mr: [2 * xlStep, 2 * (-lgStep), -90, 0.7],
    ll: [2 * smStep, 2 * (-lgStep), -135, 0.7],
    lr: [0, 0, 0, -0.7],
  },
  {
    text: [
      '3. Collecting weight under body,  change weight end of 3',
      '3. RF closes to LF (T),  cont. to rise',
      '3. LF closes to RF (T),  cont. to rise',
    ],
    ml: [lgStep*2-10, -smStep-5, -90, 0.7],
    mr: [0, -5, -45, -0.7],
    ll: [0, 0, 0, -0.7],
    lr: [mdStep+8, 0.5* (-smStep), -90, 0.7],
  },
];

const spin_turn_data = [
  {
    text: [
      'Prepare to move towards LOD',
      'Begin with weight on right foot',
      'Begin with weight on left foot',
    ],
    ml: [100, 170, 270, 0.3, 'top', 'all 2s'],
    mr: [120, 120, 270, 1, 'center', 'all 2s'],
    ll: [80, 125, 90, 1, 'top', 'all 2s'],
    lr: [80, 155, 90, 0.3, 'top', 'all 2s'],
  },
  {
    text: [
      '1. Moving together towards LOD',
      '1. LF back & slightly to side with Pivot (THT),  toe turned in',
      '1. RF forward with Pivot (HT)',
    ],
    ml: [smStep, xsStep, 22.5, 0.7, 'top'],
    mr: [0, 0, 0, -0.7],
    ll: [0, 0, 0, -0.7, 'top', 'all 2s'],
    lr: [lgStep, xsStep, 0, 0.7, 'top'],
  },
  {
    text: [
      '2. Moving together towards LOD',
      '2. RF fwd in CBMP (HT),  rise end of 2',
      '2. LF back & slightly to side (T),  then brush RF to LF',
    ],
    ml: [0, 0, 157.5, -0.7, 'top'],
    mr: [xlStep, mdStep, 180, 0.7],
    ll: [2*lgStep+20, xlStep, 180, 0.7, 'top', 'left 2s,  top 1.8s ease-in,  opacity 2s,  transform 2s'],
    lr: [0, 0, 180, -0.7, 'top'],
  },
  {
    text: [
      '3. Collecting weight under body',
      '3. LF to side & slightly back (TH)',
      '3. RF diag fwd (TH)',
    ],
    ml: [mdStep, -xlStep-10, 45, 0.7],
    mr: [0, 0, 45, -0.7],
    ll: [0, 0, 45, -0.7, 'top'],
    lr: [mdStep, -smStep-10, 45, 0.7],
  },
  {
    text: [
      '3&. Collecting weight under body',
      '3&. Collect RF and lower end of 3',
      '3&. Collect LF and lower end of 3',
    ],
    ml: [0, 0, 0, 0],
    mr: [-smStep, -lgStep, 0, 0],
    ll: [-mdStep-5, -lgStep, 0, 0],
    lr: [0, 0, 0, 0],
  },
];

const rf_closed_change_data = [
  {
    text: [
      'Prepare to move towards DC',
      'Begin with weight on left foot',
      'Begin with weight on right foot',
    ],
    ml: [50, 200, 45, 1],
    mr: [80, 230, 45, 0.3],
    ll: [140, 200, 225, 0.3],
    lr: [110, 170, 225, 1],
  },
  {
    text: [
      'Move towards DC',
      'Begin with weight on left foot',
      'Begin with weight on right foot',
    ],
    ml: [0, 0, 0, -0.7],
    mr: [lgStep, -lgStep, 0, 0.7],
    ll: [lgStep, -lgStep, 0, 0.7],
    lr: [0, 0, 0, -0.7],
  },
  {
    text: [
      'Collect feet under body',
      'Begin with weight on left foot',
      'Begin with weight on right foot',
    ],
    ml: [lgStep, -lgStep, 0, 0],
    mr: [0, 0, 0, 0],
    ll: [0, 0, 0, 0],
    lr: [lgStep, -lgStep, 0, 0],
  },
  {
    text: [
      'Moving side',
      '2. LF side (T)',
      '2. RF side (T)',
    ],
    ml: [-mdStep, -mdStep, 0, 0.7],
    mr: [0, 0, 0, -0.7],
    ll: [0, 0, 0, -0.7],
    lr: [-mdStep, -mdStep, 0, 0.7],
  },
  {
    text: [
      'Collect feet under',
      '3. RF close to LF (T)',
      '3. LF close to RF (T)',
    ],
    ml: [0, 0, 0, -0.7],
    mr: [-mdStep, -mdStep, 0, 0.7],
    ll: [-mdStep, -mdStep, 0, 0.7],
    lr: [0, 0, 0, -0.7],
  },
];

const lf_closed_change_data = [
  {
    text: [
      'Prepare to move towards DW',
      'Begin with weight on left foot',
      'Begin with weight on right foot',
    ],
    ml: [75, 10, 135, 0.3],
    mr: [45, 40, 135, 1],
    ll: [70, 90, -45, 1],
    lr: [100, 60, -45, 0.3],
  },
  {
    text: [
      'Move towards DW',
      '1. LF forward (HT)',
      '1. RF Back (TH)',
    ],
    ml: [lgStep, lgStep, 0, 0.7],
    mr: [0, 0, 0, -0.7],
    ll: [0, 0, 0, -0.7],
    lr: [lgStep, lgStep, 0, 0.7],
  },
  {
    text: [
      'Collect feet under body',
      '1&. RF close to LF',
      '1&. LF close to RF',
    ],
    ml: [0, 0, 0, 0],
    mr: [lgStep, lgStep, 0, 0],
    ll: [lgStep, lgStep, 0, 0],
    lr: [0, 0, 0, 0],

  },
  {
    text: [
      'Moving side',
      '2. LF side (T)',
      '2. RF side (T)',
    ],
    ml: [0, 0, 0, -0.7],
    mr: [-mdStep, mdStep, 0, 0.7],
    ll: [-mdStep, mdStep, 0, 0.7],
    lr: [0, 0, 0, -0.7],
  },
  {
    text: [
      'Collect feet under',
      '3. RF close to LF (TH),  lower end of 3',
      '3. LF close to RF (TH),  lower end of 3',
    ],
    ml: [-mdStep, mdStep, 0, 0.7],
    mr: [0, 0, 0, -0.7],
    ll: [0, 0, 0, -0.7],
    lr: [-mdStep, mdStep, 0, 0.7],
  },
];

const whisk_data = [
  {
    text: [
      'Prepare to move towards DW',
      'Begin with weight on right foot',
      'Begin with weight on left foot',
    ],
    ml: [175, 10, 135, 0.3],
    mr: [145, 40, 135, 1],
    ll: [170, 90, -45, 1],
    lr: [200, 60, -45, 0.3],
  },
  {
    text: [
      '1. Moving together towards DW',
      '1. LF fwd (HT),  commence to rise end of 1',
      '1. RF back (TH),  commence to rise end of 1 , NFR',
    ],
    ml: [mdStep, mdStep, 0, 0.7],
    mr: [0, 0, 0, -0.7],
    ll: [0, 0, 0, -0.7],
    lr: [mdStep, mdStep, 0, 0.7],
  },
  {
    text: [
      '1&. Collect weight under body',
      '1&. RF closes to LF without weight',
      '1&. LF closes to RF without weight',
    ],
    ml: [0, 0, 0, 0],
    mr: [mdStep+10, mdStep-10, 0, 0],
    ll: [mdStep+10, mdStep-10, 0, 0],
    lr: [0, 0, 0, 0],
  },
  {
    text: [
      '2. Moving together towards wall',
      '2. RF to side and slightly fwd (T),  cont. to rise',
      '2. LF crosses behind RF in PP (T),  cont. to rise',
    ],
    ml: [0, 0, 0, -0.7],
    mr: [-smStep, xsStep, 0, 0.7],
    ll: [-lgStep, xsStep, 90, 0.7],
    lr: [-10, 10, 90, -0.7],
  },
  {
    text: [
      '3. Whisk to PP,  crossing behind',
      '3. RF closes to LF (T),  cont. to rise',
      '3. RF crosses behind LF in PP (TH),  cont. to rise',
    ],
    ml: [-xlStep, smStep, 0, 0.7],
    mr: [0, 0, 0, -0.7],
    ll: [0, 0, 0, -0.7],
    lr: [-xlStep-30, smStep, 0, 0.7],
  },
];

const chasse_from_promenade_data = [
  {
    text: [
      'Start crossed in PP,  prepare to move LOD',
      'Begin with weight on left foot',
      'Begin with weight on right foot',
    ],
    ml: [35, 110, 135, 1],
    mr: [75, 120, 135, 0.3],
    ll: [60, 170, 45, 0.3],
    lr: [20, 180, 45, 1],
  },
  {
    text: [
      '1. Moving together towards LOD',
      '1. RF fwd and across in CBMP (HT),  commence to rise end of 1',
      '1. LF back (TH),  commence to rise end of 1 , NFR',
    ],
    ml: [0, 0, 0, -0.7],
    mr: [smStep, 0, 0, 0.7],
    ll: [smStep, 0, 0, 0.7],
    lr: [0, 0, 0, -0.7],
  },
  {
    text: [
      '2. Moving together towards LOD',
      '2. LF to side and slightly forward (T),  cont. to rise',
      '2. RF to side (T),  cont. to rise',
    ],
    ml: [2*lgStep, 0, 0, 0.7],
    mr: [0, 0, 0, -0.7],
    ll: [0, 0, 0, -0.7],
    lr: [2*xlStep, -xsStep, -90, 0.7],
  },
  {
    text: [
      '2&. Collecting weight under body,  change weight end of 3',
      '2&. RF closes to LF (T),  cont. to rise',
      '2&. LF closes to RF (T),  cont. to rise',
    ],
    ml: [0, 0, 0, -0.7],
    mr: [mdStep, 0, 0, 0.7],
    ll: [xlStep, 0, -90, 0.7],
    lr: [0, 0, 0, -0.7],
  },
  {
    text: [
      '3. Moving together towards LOD',
      '3. RF to side & slightly back (TH),  cont. to rise',
      '3. LF to side & slightly forward (TH),  cont. to rise',
    ],
    ml: [mdStep, 0, 0, 0.7],
    mr: [0, 0, 0, -0.7],
    ll: [0, 0, 0, -0.7],
    lr: [mdStep, 0, 0, 0.7],
  },
  {
    text: [
      '3&. Collecting weight under body',
      '3&. Collect LF and lower end of 3',
      '3&. Collect RF and lower end of 3',
    ],
    ml: [0, 0, 0, 0],
    mr: [mdStep, 0, 0, 0],
    ll: [mdStep, 0, 0, 0],
    lr: [0, 0, 0, 0],
  },
];

const prep_step_data = [
  {
    text: [
      'Prepare to shift weight to other foot',
      'Begin with weight on right foot',
      'Begin with weight on left foot',
    ],
    ml: [65, 20, 135, 0.3],
    mr: [35, 50, 135, 1],
    ll: [60, 100, -45, 1],
    lr: [90, 70, -45, 0.3],
  },
  {
    text: [
      '1-2-3. Moving together towards DC',
      '1-2-3. LF side',
      '1-2-3. RF side',
    ],
    ml: [xsStep, -xsStep, 0, 0.7],
    mr: [0, 0, 0, -0.7],
    ll: [0, 0, 0, -0.7],
    lr: [xsStep, -xsStep, 0, 0.7],
  },
  {
    text: [
      '1-2. Prepare to move DW',
      '1-2. LF close to RF',
      '1-2. RF close to LF',
    ],
    ml: [-xsStep, xsStep, 0, -0.7],
    mr: [0, 0, 0, 0.7],
    ll: [0, 0, 0, 0.7],
    lr: [-xsStep, xsStep, 0, -0.7],
  },
  {
    text: [
      '3. Moving DW',
      '3. LF fwd (HT)',
      '3. RF fwd (TH)',
    ],
    ml: [mdStep, mdStep, 0, 0.7],
    mr: [0, 0, 0, -0.7],
    ll: [0, 0, 0, -0.7],
    lr: [mdStep, mdStep, 0, 0.7],
  },
  {
    text: [
      '3&. Moving DW',
      '3&. Collect RF',
      '3&. Collect LF',
    ],
    ml: [0, 0, 0, 0],
    mr: [mdStep, mdStep, 0, 0],
    ll: [mdStep, mdStep, 0, 0],
    lr: [0, 0, 0, 0],
  },
  {
    text: [
      '3. Moving together towards LOD',
      '3. RF to side & slightly back (TH),  cont. to rise',
      '3. LF to side & slightly forward (TH),  cont. to rise',
    ],
    ml: [235, 145, -45, 0.3],
    mr: [330, 125, -45, 1],
    ll: [330, 75, 135, 1],
    lr: [220, 95, 135, 0.3],
  },
  {
    text: [
      '3&. Collecting weight under body',
      '3&. Collect LF and lower end of 3',
      '3&. Collect RF and lower end of 3',
    ],
    ml: [310, 145, -45, 0.3],
    mr: [340, 125, -45, 1],
    ll: [330, 75, 135, 1],
    lr: [300, 95, 135, 0.3],
  },
];

const chasse_to_right_data = [
  {
    text: [
      'Prepare to move towards DC',
      'Begin with weight on right foot',
      'Begin with weight on left foot',
    ],
    ml: [54, 209, 45, 0.3],
    mr: [84, 234, 45, 1],
    ll: [154, 190, 225, 1],
    lr: [120, 165, 225, 0.3],
  },
  {
    text: [
      '1. Moving together towards DC',
      '1. LF fwd (HT),  commence to rise end of 1',
      '1. RF back (TH),  commence to rise end of 1 , NFR',
    ],
    ml: [123, 132, 0, 1],
    mr: [84, 234, 45, 0.3],
    ll: [154, 190, 225, 0.3],
    lr: [163, 67, 180, 1],
  },
  {
    text: [
      '2. Moving together towards LOD',
      '2. RF to side (T),  cont. to rise',
      '2. LF to side (T),  cont. to rise',
    ],
    ml: [123, 132, 0, 0.3],
    mr: [260, 132, 0, 1],
    ll: [270, 67, 180, 1],
    lr: [163, 67, 180, 0.3],
  },
  {
    text: [
      '2&. Collecting weight under body',
      '2&. LF closes to RF (T),  cont. to rise',
      '2&. RF closes to LF (T),  cont. to rise',
    ],
    ml: [235, 145, -45, 1],
    mr: [260, 125, -45, 0.3],
    ll: [250, 75, 135, 0.3],
    lr: [220, 95, 135, 1],
  },
  {
    text: [
      '3. Moving together towards LOD',
      '3. RF to side & slightly back (TH),  cont. to rise',
      '3. LF to side & slightly forward (TH),  cont. to rise',
    ],
    ml: [235, 145, -45, 0.3],
    mr: [330, 125, -45, 1],
    ll: [330, 75, 135, 1],
    lr: [220, 95, 135, 0.3],
  },
  {
    text: [
      '3&. Collecting weight under body',
      '3&. Collect LF and lower end of 3',
      '3&. Collect RF and lower end of 3',
    ],
    ml: [310, 145, -45, 0.3],
    mr: [340, 125, -45, 1],
    ll: [330, 75, 135, 1],
    lr: [300, 95, 135, 0.3],
  },
];

const closedImpetusData = [
  {
    type: 'percent',
    text: [
      'Prepare to move towards DW',
      'Begin with weight on right foot',
      'Begin with weight on left foot',
    ],
    ml: [36, 36, -90, 0.3, 'bottom', 'all 2s'],
    mr: [25, 40, -90, 1, 'top', 'all 2s'],
    ll: [20, 36, 90, 1, 'top', 'all 2s'],
    lr: [20, 44, 90, 0.3, 'top', 'all 2s'],
  },
  {
    type: 'percent',
    text: [
      '1. Moving together towards LOD',
      '1. LF back (TH)',
      '1. RF fwd (HT)',
    ],
    ml: [15, 15, 45, 0.7, 'bottom', 'all 2s'],
    mr: [0, 0, 0, -0.7, 'top', 'all 2s'],
    ll: [0, 0, 0, -0.7, 'top', 'all 2s'],
    lr: [22, 4, 0, 0.7, 'top', 'all 2s'],
  },
  {
    type: 'percent',
    text: [
      '2. Moving together towards LOD',
      '2. RF closes to LF (Heel Turn)',
      '2. LF to side (T), then brush RF to LF',
    ],
    ml: [0, 0, 90, -0.7, 'bottom', 'left 3s, top 3s, opacity 1.5s ease-in 1.5s, transform 2.5s 0.5s'],
    mr: [40, 19, 135, 0.7, 'top', 'left 3s, top 2.8s 0.2s, opacity 1.5s ease-in 1.5s, transform 2.8s 0.2s'],
    ll: [50, 25, 135, 0.7, 'top', 'all 3s'],
    lr: [25, 10, 135, -0.7, 'top', 'all 2s 1s'],
  },
  {
    type: 'percent',
    text: [
      '3. Collecting weight under body',
      '3. LF to side & slightly back',
      '3. RF diag fwd (TH), lower e/o 3',
    ],
    ml: [-10, -45, 90, 0.7, 'bottom', 'all 3s'],
    mr: [0, 0, 90, -0.7, 'top', 'all 3s'],
    ll: [0, 0, 90, -0.7, 'top', 'all 2.7s 0.3s'],
    lr: [-17, -24, 90, 0.7, 'top', 'all 2.7s 0.3s'],
  },
  {
    type: 'percent',
    text: [
      '3&. Collecting weight under body',
      '3&. LF to side & slightly back',
      '3&. RF closes to LF (T),  cont. to rise',
    ],
    ml: [0, 0, 0, 0, 'bottom'],
    mr: [-21, -26, 0, 0, 'top'],
    ll: [-25, -22, 0, 0, 'top'],
    lr: [0, 0, 0, 0, 'top'],
  },
];

const hesitationChangeData = [
  {
    type: 'percent',
    text: [
      'Commence in Closed Position, prepare to move LOD',
      'Begin with weight on right foot',
      'Begin with weight on left foot',
    ],
    ml: [25, 48, -90, 0.3, 'top', 'all 2s'],
    mr: [25, 40, -90, 1, 'top', 'all 2s'],
    ll: [20, 36, 90, 1, 'top', 'all 2s'],
    lr: [20, 44, 90, 0.3, 'top', 'all 2s'],
  },
  {
    type: 'percent',
    text: [
      '1. Moving together towards LOD',
      '1. LF back (TH)',
      '1. RF fwd (HT)',
    ],
    ml: [25, 0, 22.5, 0.7, 'center', 'all 2s'],
    mr: [0, 0, 0, -0.7, 'top', 'all 2s'],
    ll: [0, 0, 0, -0.7, 'top', 'all 2s'],
    lr: [30, 2, 0, 0.7, 'top', 'all 2s'],
  },
  {
    type: 'percent',
    text: [
      '2. Moving together towards LOD',
      '2. RF to side, small step (Heel Pull)',
      '2. LF to side (T)',
    ],
    ml: [0, 0, 67.5, -0.7, 'center', 'left 3s, top 3s, opacity 1.5s ease-in 1.5s, transform 2.5s 0.5s'],
    mr: [50, 10, 135, 0.7, 'top', 'left 3s, top 2.5s 0.5s, opacity 1.5s ease-in 1.5s, transform 2.5s 0.5s'],
    ll: [62, 12, 135, 0.7, 'top', 'all 2s ease-in'],
    lr: [0, 0, 90, -0.7, 'top', 'all 2s 1s'],
  },
  {
    type: 'percent',
    text: [
      '3. Collecting weight under body',
      '3. LF closes to RF without weight (inside edge T)',
      '3. RF closes to LF without weight (inside edge T)',
    ],
    ml: [15, -5, 45, 0, 'center'],
    mr: [0, 0, 0, 0, 'top'],
    ll: [0, 0, 0, 0, 'top'],
    lr: [26, -2, 45, 0, 'top'],
  },
];

const outsideChangeData = [
  {
    type: 'percent',
    text: [
      'Prepare to move DC',
      'Begin with weight on right foot',
      'Begin with weight on left foot',
    ],
    ml: [20, 75, 225, 0.3, 'top', 'all 2s'],
    mr: [15, 70, 225, 1, 'top', 'all 2s'],
    ll: [10, 70, 45, 1, 'top', 'all 2s'],
    lr: [15, 75, 45, 0.3, 'top', 'all 2s'],
  },
  {
    type: 'percent',
    text: [
      '1. Moving together towards DC',
      '1. LF back in CBMP (TH)',
      '1. RF fwd in CBMP (HT)',
    ],
    ml: [20, -20, 0, 0.7, 'top', 'all 2s'],
    mr: [0, 0, 0, -0.7, 'top', 'all 2s'],
    ll: [0, 0, 0, -0.7, 'top', 'all 2s'],
    lr: [20, -20, 0, 0.7, 'top', 'all 2s'],
  },
  {
    type: 'percent',
    text: [
      '2. Moving together towards DC in closed',
      '2. RF back (T)',
      '2. LF fwd (T)',
    ],
    ml: [18, -18, 0, -0.7, 'top', 'all 1.5s 1.5s'],
    mr: [38, -38, 0, 0.7, 'top', 'all 2s'],
    ll: [38, -38, 0, 0.7, 'top', 'all 2s'],
    lr: [18, -18, 0, -0.7, 'top', 'all 1.5s 1.5s'],
  },
  {
    type: 'percent',
    text: [
      '3. Moving LOD',
      '3. LF to side & slightly fwd (TH)',
      '3. RF to side & slightly back (TH)',
    ],
    ml: [25, 5, -90, 0.7, 'top'],
    mr: [25, 15, -90, -0.7, 'top', 'all 1.5s 1.5s'],
    ll: [30, 20, -90, -0.7, 'top', 'all 1.5s 1.5s'],
    lr: [30, 10, -90, 0.7, 'top'],
  },
];

const reverseCorteData = [
  {
    type: 'percent',
    text: [
      'Prepare to move LOD',
      'Begin with weight on left foot',
      'Begin with weight on right foot',
    ],
    ml: [15, 34, 270, 1, 'top', 'all 2s'],
    mr: [26, 14, 270, 0.3, 'bottom', 'all 2s'],
    ll: [10, 22, 90, 0.3, 'top', 'all 2s'],
    lr: [10, 30, 90, 1, 'top', 'all 2s'],
  },
  {
    type: 'percent',
    text: [
      '1. Moving together towards LOD',
      '1. RF back (TH)',
      '1. LF fwd (HT)',
    ],
    ml: [0, 0, 0, -0.7, 'top'],
    mr: [20, -15, -22.5, 0.7, 'bottom'],
    ll: [25, 0, 0, 0.7, 'top'],
    lr: [0, 0, 0, -0.7, 'top'],
  },
  {
    type: 'percent',
    text: [
      '2. Moving on the spot',
      '2. LF closes to RF without weight (HT on RF)',
      '2. RF to side (T)',
    ],
    ml: [44, -17, -135, 0, 'top', 'left 2s, top 1.75s 0.25s, opacity 2s, transform 1.75s 0.25s'],
    mr: [0, 0, -112.5, 0, 'bottom', 'all 1.5s 0.5s'],
    ll: [0, 0, -90, -0.7, 'top', 'all 1.5s 0.5s'],
    lr: [48, -8, -90, 0.7, 'top'],
  },
  {
    type: 'percent',
    text: [
      '3. Finish Corte',
      '3. Hold position (TH on RF)',
      '3. LF closes to RF (TH)',
    ],
    ml: [0, 0, 0, 0, 'top'],
    mr: [0, 0, 0, 0, 'bottom'],
    ll: [18, 4, -45, 0.7, 'top'],
    lr: [0, 0, -45, -0.7, 'top'],
  },
];

const backWhiskData = [
  {
    type: 'percent',
    text: [
      'Prepare to move LOD',
      'Begin with weight on left foot',
      'Begin with weight on right foot',
    ],
    ll: [85, 42, 135, 0.3, 'top', 'all 2s'],
    lr: [80, 47, 135, 1, 'top', 'all 2s'],
    ml: [78, 52, -45, 1, 'top', 'all 2s'],
    mr: [84, 47, -45, 0.3, 'top', 'all 2s'],
  },
  {
    type: 'percent',
    text: [
      '1. Prepare to move DC against LOD',
      '1. RF back (TH)',
      '1. LF fwd (HT)',
    ],
    ml: [-30, 0, 0, 0.7, 'top'],
    mr: [0, 0, 0, -0.7, 'top'],
    ll: [0, 0, 0, -0.7, 'top'],
    lr: [-30, 0, 0, 0.7, 'top'],
  },
  {
    type: 'percent',
    text: [
      '2. Moving against LOD',
      '2. RF diag back (T)',
      '2. LF to side (T)',
    ],
    ml: [0, 0, 0, -0.7, 'top'],
    mr: [-40, -5, 0, 0.7, 'top'],
    ll: [-48, -10, 45, 0.7, 'top'],
    lr: [0, 0, 45, -0.7, 'top'],
  },
  {
    type: 'percent',
    text: [
      '3. Cross behind into PP',
      '3. LF crosses behind RF (TH)',
      '3. RF crosses behind LF (TH)',
    ],
    ml: [-25, -5, 0, 0.7, 'top'],
    mr: [0, 0, 0, -0.7, 'top'],
    ll: [0, 0, 45, -0.7, 'top'],
    lr: [-33, -3, 45, 0.7, 'top'],
  },
];

const basicWeaveData = [
  {
    type: 'percent',
    text: [
      'Prepare to move LOD',
      'Begin with weight on left foot',
      'Begin with weight on right foot',
    ],
    ml: [25, 75, -45, 1, 'top', 'all 2s'],
    mr: [30, 70, -45, 0.3, 'top', 'all 2s'],
    ll: [30, 65, 135, 0.3, 'top', 'all 2s'],
    lr: [25, 70, 135, 1, 'top', 'all 2s'],
  },
  {
    type: 'percent',
    text: [
      '1. Moving together DW',
      '1. RF back (TH)',
      '1. LF fwd (HT)',
    ],
    ml: [0, 0, 0, -0.7, 'top'],
    mr: [10, 10, 0, 0.7, 'top'],
    ll: [10, 10, 0, 0.7, 'top'],
    lr: [0, 0, 0, -0.7, 'top'],
  },
  {
    type: 'percent',
    text: [
      '2. Moving towards DC against LOD',
      '2. LF fwd (T)',
      '2. RF back (T)',
    ],
    ml: [-8, -8, 0, 0.7, 'top'],
    mr: [-16, -16, 0, -0.7, 'top', 'all 1.5s ease-in 1.5s'],
    ll: [-16, -16, 0, -0.7, 'top', 'all 1.5s ease-in 1.5s'],
    lr: [-8, -8, 0, 0.7, 'top'],
  },
  {
    type: 'percent',
    text: [
      '3. Moving Center',
      '3. RF to side (T)',
      '3. LF to side pointing DC (T)',
    ],
    ml: [0, 0, 0, -0.7, 'top'],
    mr: [-0, -22, -45, 0.7, 'top', 'all 2s'],
    ll: [-5, -22, -90, 0.7, 'top', 'all 2s'],
    lr: [0, 0, 0, -0.7, 'top'],
  },
  {
    type: 'percent',
    text: [
      '4. Moving DC',
      '4. LF back in CBMP (TH)',
      '4. RF fwd in CBMP (TH)',
    ],
    ml: [20, -35, -90, 0.7, 'top'],
    mr: [0, 0, -45, -0.7, 'top'],
    ll: [0, 0, 0, -0.7, 'top'],
    lr: [15, -35, -90, 0.7, 'top'],
  },
  {
    type: 'percent',
    text: [
      '5. Moving DC',
      '5. RF back (T)',
      '5. LF fwd (T)',
    ],
    ml: [12, -17, 0, -0.7, 'top', 'all 1.5s ease-in 1.5s'],
    mr: [20, -30, 0, 0.7, 'top'],
    ll: [20, -26, 0, 0.7, 'top'],
    lr: [10, -10, 0, -0.7, 'top', 'all 1.5s ease-in 1.5s'],
  },
  {
    type: 'percent',
    text: [
      '6. Moving LOD',
      '6. LF to side & slightly back (TH)',
      '6. RF to side & slightly back (TH)',
    ],
    ml: [25, 15, -90, 0.7, 'top', 'left 2s, top 2s, opacity 1s 1s, transform 2s'],
    mr: [25, 22, -90, -0.7, 'top', 'left 2s 2s, top 2s 2s, opacity 1s 1s, transform 2s 2s'],
    ll: [28, 28, -90, -0.7, 'top', 'left 2s 2s, top 2s 2s, opacity 1s 1s, transform 2s 2s'],
    lr: [30, 18, -90, 0.7, 'top', 'left 2s, top 2s, opacity 1s 1s, transform 2s'],
  },
];

const doubleReverseData = [
  {
    type: 'percent',
    text: [
      'Prepare to move towards DC',
      'Begin with weight on right foot',
      'Begin with weight on left foot',
    ],
    ml: [10, 60, 45, 0.3, 'top', 'all 2s'],
    mr: [15, 65, 45, 1, 'top', 'all 2s'],
    ll: [20, 65, 225, 1, 'top', 'all 2s'],
    lr: [15+8, 60-21, 225, 0.3, 'bottom', 'all 2s'],
  },
  {
    type: 'percent',
    text: [
      '1.',
      '1.',
      '1.',
    ],
    ml: [0, -20, -45, 0.7, 'top'],
    mr: [0, 0, 0, -0.7, 'top'],
    ll: [0, 0, 0, -0.7, 'top'],
    lr: [-8, -25, -45, 0.7, 'bottom'],
  },
  {
    type: 'percent',
    text: [
      '2.',
      '2.',
      '2.',
    ],
    ml: [0, 0, -45, -0.7, 'top', 'all 3s'],
    mr: [18, -50, -90, 0.7, 'top', 'all 3s'],
    ll: [6, -45, -135, 0.7, 'top', 'all 3s'],
    lr: [0, 0, -90, -0.7, 'bottom', 'all 2s 1s'],
  },
  {
    type: 'percent',
    text: [
      '2&.',
      '2&.',
      '2&.',
    ],
    ml: [0, 0, 0, 0, 'top'],
    mr: [0, 0, -180, 0, 'top'],
    ll: [0, 0, 0, 0, 'top'],
    lr: [0, 0, 0, 0, 'bottom'],
  },
];

const dataTemplates = {

  // Top to bottom is roughly 8,-21
  // Bottom Left
  ml: [10, 60, 45, 0.3, 'top'],
  mr: [15, 65, 45, 1, 'top'],
  ll: [20, 65, 225, 1, 'top'],
  lr: [15, 60, 225, 0.3, 'top'],

  // Blank
  ml: [0, 0, 0, 0, 'top'],
  mr: [0, 0, 0, 0, 'top'],
  ll: [0, 0, 0, 0, 'top'],
  lr: [0, 0, 0, 0, 'top'],
};

const waltz_all_figures = [
  new Figure('Natural Turn', 'Waltz', 'Newcomer', 'Standard', natural_turn_data),
  new Figure('Spin Turn (Underturned)', 'Waltz', 'Newcomer', 'Standard', spin_turn_data),
  new Figure('Reverse Turn', 'Waltz', 'Newcomer', 'Standard', reverse_turn_data),
  new Figure('RF Closed Change', 'Waltz', 'Newcomer', 'Standard', rf_closed_change_data),
  new Figure('LF Closed Change', 'Waltz', 'Newcomer', 'Standard', lf_closed_change_data),
  new Figure('Whisk', 'Waltz', 'Newcomer', 'Standard', whisk_data),
  new Figure('Chasse from Promenade', 'Waltz', 'Newcomer', 'Standard', chasse_from_promenade_data),
  new Figure('Prep Step', 'Waltz', 'Newcomer', 'Standard', prep_step_data),

  new Figure('Closed Impetus', 'Waltz', 'Bronze', 'Standard', closedImpetusData),
  new Figure('Hesitation Change', 'Waltz', 'Bronze', 'Standard', hesitationChangeData),
  new Figure('Outside Change', 'Waltz', 'Bronze', 'Standard', outsideChangeData),
  new Figure('Reverse Corte', 'Waltz', 'Bronze', 'Standard', reverseCorteData),
  new Figure('Back Whisk', 'Waltz', 'Bronze', 'Standard', backWhiskData),
  new Figure('Basic Weave', 'Waltz', 'Bronze', 'Standard', basicWeaveData),
  new Figure('Double Reverse Spin', 'Waltz', 'Bronze', 'Standard', doubleReverseData),
  new Figure('Reverse Pivot', 'Waltz', 'Bronze', 'Standard', chasse_to_right_data),
  new Figure('Back Lock', 'Waltz', 'Bronze', 'Standard', chasse_to_right_data),
  new Figure('Chasse to Right', 'Waltz', 'Bronze', 'Standard', chasse_to_right_data),
  new Figure('Weave from Promenade', 'Waltz', 'Bronze', 'Standard', chasse_to_right_data),
  new Figure('Closed Telemark', 'Waltz', 'Bronze', 'Standard', chasse_to_right_data),

  new Figure('Open Telemark', 'Waltz', 'Silver', 'Standard', chasse_to_right_data),
  new Figure('Open Impetus', 'Waltz', 'Silver', 'Standard', chasse_to_right_data),
  new Figure('Cross Hesitation', 'Silver', 'Bronze', 'Standard', chasse_to_right_data),
  new Figure('Wing', 'Waltz', 'Silver', 'Standard', chasse_to_right_data),
  new Figure('Outside Spin', 'Waltz', 'Silver', 'Standard', chasse_to_right_data),
  new Figure('Turning Lock to Left', 'Waltz', 'Silver', 'Standard', chasse_to_right_data),
  new Figure('Drag Hesitation', 'Waltz', 'Silver', 'Standard', chasse_to_right_data),

  new Figure('Left Whisk', 'Waltz', 'Gold', 'Standard', chasse_to_right_data),
  new Figure('Contra Check', 'Waltz', 'Gold', 'Standard', chasse_to_right_data),
  new Figure('Closed Wing', 'Waltz', 'Gold', 'Standard', chasse_to_right_data),
  new Figure('Turning Lock to Right', 'Waltz', 'Gold', 'Standard', chasse_to_right_data),
  new Figure('Fallaway Reverse Slip Pivot', 'Waltz', 'Gold', 'Standard', chasse_to_right_data),
  new Figure('Hover Corte', 'Waltz', 'Gold', 'Standard', chasse_to_right_data),
];

// Natural Turn
waltz_all_figures[0].preceding_figures= [
  waltz_all_figures[4],
  waltz_all_figures[0],
  waltz_all_figures[6],
  waltz_all_figures[10],
  waltz_all_figures[13],
  waltz_all_figures[18],
  waltz_all_figures[19],
  waltz_all_figures[24],
  waltz_all_figures[25],
];
waltz_all_figures[0].following_figures= [
  waltz_all_figures[1],
];

// Spin Turn
waltz_all_figures[1].preceding_figures= [
  waltz_all_figures[0],
];
waltz_all_figures[1].following_figures= [
  waltz_all_figures[3],
];

// Reverse Turn
waltz_all_figures[2].preceding_figures= [
  waltz_all_figures[3],
];
waltz_all_figures[2].following_figures= [
  waltz_all_figures[0],
];

// RF Close Change
waltz_all_figures[3].preceding_figures= [
  waltz_all_figures[0],
];
waltz_all_figures[3].following_figures= [
  waltz_all_figures[2],
  waltz_all_figures[5],
  waltz_all_figures[12],
  waltz_all_figures[14],
  waltz_all_figures[17],
  waltz_all_figures[19],
  waltz_all_figures[20],
  waltz_all_figures[26],
  waltz_all_figures[31],
  waltz_all_figures[28],
];

// LF Close Change
waltz_all_figures[4].preceding_figures= [
  waltz_all_figures[2],
  waltz_all_figures[14],
  waltz_all_figures[9],
  waltz_all_figures[15],
  waltz_all_figures[23],
  waltz_all_figures[29],
  waltz_all_figures[31],
];
waltz_all_figures[4].following_figures= [
  waltz_all_figures[0],
  waltz_all_figures[9],
];

// Whisk
waltz_all_figures[5].preceding_figures= [
  waltz_all_figures[2],
  waltz_all_figures[9],
  waltz_all_figures[14],
  waltz_all_figures[15],
  waltz_all_figures[23],
  waltz_all_figures[29],
  waltz_all_figures[31],
];
waltz_all_figures[5].following_figures= [
  waltz_all_figures[6],
  waltz_all_figures[18],
  waltz_all_figures[22],
  waltz_all_figures[23],
  waltz_all_figures[27],
];

// Chasse from PP
waltz_all_figures[6].preceding_figures= [
  waltz_all_figures[5],
  waltz_all_figures[10],
  waltz_all_figures[12],
  waltz_all_figures[13],
  waltz_all_figures[18],
  waltz_all_figures[20],
  waltz_all_figures[21],
  waltz_all_figures[25],
  waltz_all_figures[28],
  waltz_all_figures[30],
];

waltz_all_figures[6].following_figures= [
  waltz_all_figures[13],
  waltz_all_figures[29],
  waltz_all_figures[0],
  waltz_all_figures[9],
];

// Prep Step
waltz_all_figures[7].preceding_figures= [
];
waltz_all_figures[7].following_figures= [
  waltz_all_figures[0],
];
