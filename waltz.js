const natural_turn_data = [
  {
    text: [
      'Prepare to move towards DW',
      'Begin with weight on left foot',
      'Begin with weight on right foot',
    ],
<<<<<<< HEAD
    // ml: [0, 0, 0, 1, 'top', 'all 1.5s ease-in', ''],
    // mr: [0, 0, 0, 0.2, 'top', 'all 1.5s ease-in', ''],
    // ll: [0, 0, 0, 0.2, 'top', 'all 1.5s ease-in', ''],
    // lr: [0, 0, 0, 1, 'top', 'all 1.5s ease-in', ''],
    ml: [85, 45, 135, 1, 'top', 'all 1.5s ease-in', ''],
    mr: [68, 65, 135, 0.2, 'top', 'all 1.5s ease-in', ''],
    ll: [65, 85, -45, 0.2, 'top', 'all 1.5s ease-in', ''],
    lr: [85, 65, -45, 1, 'top', 'all 1.5s ease-in', ''],
=======
    ml: [75, 10, 135, 1],
    mr: [55, 30, 135, 0.2],
    ll: [85, 75, -45, 0.2],
    lr: [105, 55, -45, 1],
>>>>>>> parent of 0677e4f... footwork and timing
  },
  {
    type: 'translate',
    text: [
      '1. Moving together towards DW',
      '1. RF fwd (HT),  commence to rise end of 1',
      '1. LF back (TH),  commence to rise end of 1 , NFR',
    ],
<<<<<<< HEAD
    ml: [00, 0, 0, -0.8, 'top', 'all 1.2s ease-in', ''],
    mr: [50, 50, 0, 0.8, 'top', 'all 1.2s ease-in', 'HT'],
    ll: [30, 45, 0, 0.8, 'top', 'all 1.2s ease-in', 'TH'],
    lr: [0, 0, 0, -0.8, 'top', 'all 1.2s ease-in', ''],
=======
    ml: [0, 0, 0, -0.8],
    mr: [50, 50, 0, 0.8],
    ll: [30, 45, 0, 0.8],
    lr: [0, 0, 0, -0.8],
>>>>>>> parent of 0677e4f... footwork and timing
  },
  {
    text: [
      '2. Moving together towards LOD',
      '2. LF to side (T),  cont. to rise',
      '2. RF to side (T),  cont. to rise',
    ],
<<<<<<< HEAD
    ml: [145, 130, 90, 0.8, 'top', 'all 1.2s cubic-bezier(0.55, 0.085, 0.68, 0.53)', 'T'],
    mr: [0, 0, 90, -0.8, 'top', 'all 1.2s ease, transform 0.7s 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53)'],
    ll: [0, 0, 0, -0.8],
    lr: [70, 120, 135, 0.8, 'top', 'all 1.2s cubic-bezier(0.55, 0.085, 0.68, 0.53)', 'T'],
=======
    ml: [155, 170, 90, 0.8],
    mr: [25, 0, 90, -0.8],
    ll: [0, 0, 0, -0.8],
    lr: [70, 120, 135, 0.8],
>>>>>>> parent of 0677e4f... footwork and timing
  },
  {
    text: [
      '3. Collecting weight under body,  change weight end of 3',
      '3. RF closes to LF (T),  cont. to rise',
      '3. LF closes to RF (T),  cont. to rise',
    ],
    ml: [0, 15, 45, -0.8],
    mr: [100, 95, 45, 0.8],
    ll: [60, 35, 135, 0.8],
    lr: [0, 0, 0, -0.8],
  },
];

const reverse_turn_data = [
  {
    text: [
      'Prepare to move towards DC',
      'Begin with weight on right foot',
      'Begin with weight on left foot',
    ],
    ml: [60, 210, 45, 0.2],
    mr: [80, 230, 45, 1],
    ll: [130, 200, 225, 1],
    lr: [110, 180, 225, 0.2],
  },
  {
    text: [
      '1. Moving together towards DC',
      '1. LF fwd (HT),  commence to rise end of 1',
      '1. RF back (TH),  commence to rise end of 1 , NFR',
    ],
    ml: [mdStep, -mdStep, -45, 0.8],
    mr: [0, 0, 0, -0.8],
    ll: [0, 0, 0, -0.8],
    lr: [smStep, -lgStep, -45, 0.8],
  },
  {
    text: [
      '2. Moving together towards LOD',
      '2. RF to side (T),  cont. to rise',
      '2. LF to side (T),  cont. to rise',
    ],
    ml: [0, 0, 0, -0.8],
    mr: [180, 2 * (-lgStep)-10, -90, 0.8],
    ll: [2 * smStep, 2 * (-lgStep), -135, 0.8],
    lr: [0, 0, 0, -0.8],
  },
  {
    text: [
      '3. Collecting weight under body,  change weight end of 3',
      '3. RF closes to LF (T),  cont. to rise',
      '3. LF closes to RF (T),  cont. to rise',
    ],
    ml: [140, -75, -90, 0.8],
    mr: [0, -5, -45, -0.8],
    ll: [0, 0, 0, -0.8],
    lr: [60, -40, -90, 0.8],
  },
];

const spin_turn_data = [
  {
    text: [
      'Prepare to move towards LOD',
      'Begin with weight on right foot',
      'Begin with weight on left foot',
    ],
    ml: [100, 170, 270, 0.2, 'top', 'all 2s'],
    mr: [120, 120, 270, 1, 'center', 'all 2s'],
    ll: [80, 125, 90, 1, 'top', 'all 2s'],
    lr: [80, 155, 90, 0.2, 'top', 'all 2s'],
  },
  {
    text: [
      '1. Moving together towards LOD',
      '1. LF back & slightly to side with Pivot (THT),  toe turned in',
      '1. RF forward with Pivot (HT)',
    ],
    ml: [smStep, xsStep, 22.5, 0.8, 'top'],
    mr: [0, 0, 0, -0.8],
    ll: [0, 0, 0, -0.8, 'top', 'all 2s'],
    lr: [lgStep, xsStep, 0, 0.8, 'top'],
  },
  {
    text: [
      '2. Moving together towards LOD',
      '2. RF fwd in CBMP (HT),  rise end of 2',
      '2. LF back & slightly to side (T),  then brush RF to LF',
    ],
    ml: [0, 0, 157.5, -0.8, 'top'],
    mr: [xlStep, mdStep, 180, 0.8],
    ll: [2*lgStep+20, xlStep, 180, 0.8, 'top', 'left 2s,  top 1.8s ease-in,  opacity 2s,  transform 2s'],
    lr: [0, 0, 180, -0.8, 'top'],
  },
  {
    text: [
      '3. Collecting weight under body',
      '3. LF to side & slightly back (TH)',
      '3. RF diag fwd (TH)',
    ],
    ml: [mdStep, -xlStep-10, 45, 0.8],
    mr: [0, 0, 45, -0.8],
    ll: [0, 0, 45, -0.8, 'top'],
    lr: [mdStep, -smStep-10, 45, 0.8],
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
    mr: [70, 220, 45, 0.2],
    ll: [120, 190, 225, 0.2],
    lr: [100, 170, 225, 1],
  },
  {
    text: [
      'Move towards DC',
      'Begin with weight on left foot',
      'Begin with weight on right foot',
    ],
    ml: [0, 0, 0, -0.8],
    mr: [lgStep, -lgStep, 0, 0.8],
    ll: [lgStep, -lgStep, 0, 0.8],
    lr: [0, 0, 0, -0.8],
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
    ml: [-mdStep, -mdStep, 0, 0.8],
    mr: [0, 0, 0, -0.8],
    ll: [0, 0, 0, -0.8],
    lr: [-mdStep, -mdStep, 0, 0.8],
  },
  {
    text: [
      'Collect feet under',
      '3. RF close to LF (T)',
      '3. LF close to RF (T)',
    ],
    ml: [0, 0, 0, -0.8],
    mr: [-mdStep-5, -mdStep-5, 0, 0.8],
    ll: [-mdStep-5, -mdStep-5, 0, 0.8],
    lr: [0, 0, 0, -0.8],
  },
];

const lf_closed_change_data = [
  {
    text: [
      'Prepare to move towards DW',
      'Begin with weight on left foot',
      'Begin with weight on right foot',
    ],
    ml: [75, 10, 135, 0.2],
    mr: [55, 30, 135, 1],
    ll: [80, 75, -45, 1],
    lr: [100, 55, -45, 0.2],
  },
  {
    text: [
      'Move towards DW',
      '1. LF forward (HT)',
      '1. RF Back (TH)',
    ],
    ml: [lgStep, lgStep, 0, 0.8],
    mr: [0, 0, 0, -0.8],
    ll: [0, 0, 0, -0.8],
    lr: [lgStep, lgStep, 0, 0.8],
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
    ml: [0, 0, 0, -0.8],
    mr: [-mdStep, mdStep, 0, 0.8],
    ll: [-mdStep, mdStep, 0, 0.8],
    lr: [0, 0, 0, -0.8],
  },
  {
    text: [
      'Collect feet under',
      '3. RF close to LF (TH),  lower end of 3',
      '3. LF close to RF (TH),  lower end of 3',
    ],
    ml: [-mdStep-5, mdStep+5, 0, 0.8],
    mr: [0, 0, 0, -0.8],
    ll: [0, 0, 0, -0.8],
    lr: [-mdStep-5, mdStep+5, 0, 0.8],
  },
];

const whisk_data = [
  {
    text: [
      'Prepare to move towards DW',
      'Begin with weight on right foot',
      'Begin with weight on left foot',
    ],
    ml: [175, 10, 135, 0.2],
    mr: [145, 40, 135, 1],
    ll: [170, 90, -45, 1],
    lr: [200, 60, -45, 0.2],
  },
  {
    text: [
      '1. Moving together towards DW',
      '1. LF fwd (HT),  commence to rise end of 1',
      '1. RF back (TH),  commence to rise end of 1 , NFR',
    ],
    ml: [mdStep, mdStep, 0, 0.8],
    mr: [0, 0, 0, -0.8],
    ll: [0, 0, 0, -0.8],
    lr: [mdStep, mdStep, 0, 0.8],
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
    ml: [0, 0, 0, -0.8],
    mr: [-smStep, xsStep, 0, 0.8],
    ll: [-lgStep, xsStep, 90, 0.8],
    lr: [-10, 10, 90, -0.8],
  },
  {
    text: [
      '3. Whisk to PP,  crossing behind',
      '3. RF closes to LF (T),  cont. to rise',
      '3. RF crosses behind LF in PP (TH),  cont. to rise',
    ],
    ml: [-xlStep, smStep, 0, 0.8],
    mr: [0, 0, 0, -0.8],
    ll: [0, 0, 0, -0.8],
    lr: [-xlStep-30, smStep, 0, 0.8],
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
    mr: [75, 120, 135, 0.2],
    ll: [60, 170, 45, 0.2],
    lr: [20, 180, 45, 1],
  },
  {
    text: [
      '1. Moving together towards LOD',
      '1. RF fwd and across in CBMP (HT),  commence to rise end of 1',
      '1. LF back (TH),  commence to rise end of 1 , NFR',
    ],
    ml: [0, 0, 0, -0.8],
    mr: [smStep, 0, 0, 0.8],
    ll: [smStep, 0, 0, 0.8],
    lr: [0, 0, 0, -0.8],
  },
  {
    text: [
      '2. Moving together towards LOD',
      '2. LF to side and slightly forward (T),  cont. to rise',
      '2. RF to side (T),  cont. to rise',
    ],
    ml: [2*lgStep, 0, 0, 0.8],
    mr: [0, 0, 0, -0.8],
    ll: [0, 0, 0, -0.8],
    lr: [2*xlStep, -xsStep, -90, 0.8],
  },
  {
    text: [
      '2&. Collecting weight under body,  change weight end of 3',
      '2&. RF closes to LF (T),  cont. to rise',
      '2&. LF closes to RF (T),  cont. to rise',
    ],
    ml: [0, 0, 0, -0.8],
    mr: [mdStep, 0, 0, 0.8],
    ll: [xlStep, 0, -90, 0.8],
    lr: [0, 0, 0, -0.8],
  },
  {
    text: [
      '3. Moving together towards LOD',
      '3. RF to side & slightly back (TH),  cont. to rise',
      '3. LF to side & slightly forward (TH),  cont. to rise',
    ],
    ml: [mdStep, 0, 0, 0.8],
    mr: [0, 0, 0, -0.8],
    ll: [0, 0, 0, -0.8],
    lr: [mdStep, 0, 0, 0.8],
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
    ml: [65, 20, 135, 0.2],
    mr: [35, 50, 135, 1],
    ll: [60, 100, -45, 1],
    lr: [90, 70, -45, 0.2],
  },
  {
    text: [
      '1-2-3. Moving together towards DC',
      '1-2-3. LF side',
      '1-2-3. RF side',
    ],
    ml: [xsStep, -xsStep, 0, 0.8],
    mr: [0, 0, 0, -0.8],
    ll: [0, 0, 0, -0.8],
    lr: [xsStep, -xsStep, 0, 0.8],
  },
  {
    text: [
      '1-2. Prepare to move DW',
      '1-2. LF close to RF',
      '1-2. RF close to LF',
    ],
    ml: [-xsStep, xsStep, 0, -0.8],
    mr: [0, 0, 0, 0.8],
    ll: [0, 0, 0, 0.8],
    lr: [-xsStep, xsStep, 0, -0.8],
  },
  {
    text: [
      '3. Moving DW',
      '3. LF fwd (HT)',
      '3. RF fwd (TH)',
    ],
    ml: [mdStep, mdStep, 0, 0.8],
    mr: [0, 0, 0, -0.8],
    ll: [0, 0, 0, -0.8],
    lr: [mdStep, mdStep, 0, 0.8],
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
    ml: [235, 145, -45, 0.2],
    mr: [330, 125, -45, 1],
    ll: [330, 75, 135, 1],
    lr: [220, 95, 135, 0.2],
  },
  {
    text: [
      '3&. Collecting weight under body',
      '3&. Collect LF and lower end of 3',
      '3&. Collect RF and lower end of 3',
    ],
    ml: [310, 145, -45, 0.2],
    mr: [340, 125, -45, 1],
    ll: [330, 75, 135, 1],
    lr: [300, 95, 135, 0.2],
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
    ml: [36, 36, -90, 0.2, 'bottom', 'all 2s'],
    mr: [25, 40, -90, 1, 'top', 'all 2s'],
    ll: [20, 36, 90, 1, 'top', 'all 2s'],
    lr: [20, 44, 90, 0.2, 'top', 'all 2s'],
  },
  {
    type: 'percent',
    text: [
      '1. Moving together towards LOD',
      '1. LF back (TH)',
      '1. RF fwd (HT)',
    ],
    ml: [15, 15, 45, 0.8, 'bottom', 'all 2s'],
    mr: [0, 0, 0, -0.8, 'top', 'all 2s'],
    ll: [0, 0, 0, -0.8, 'top', 'all 2s'],
    lr: [22, 4, 0, 0.8, 'top', 'all 2s'],
  },
  {
    type: 'percent',
    text: [
      '2. Moving together towards LOD',
      '2. RF closes to LF (Heel Turn)',
      '2. LF to side (T), then brush RF to LF',
    ],
    ml: [0, 0, 90, -0.8, 'bottom', 'left 3s, top 3s, opacity 1.5s ease-in 1.5s, transform 2.5s 0.5s'],
    mr: [40, 19, 135, 0.8, 'top', 'left 3s, top 2.8s 0.2s, opacity 1.5s ease-in 1.5s, transform 2.8s 0.2s'],
    ll: [50, 25, 135, 0.8, 'top', 'all 3s'],
    lr: [25, 10, 135, -0.8, 'top', 'all 2s 1s'],
  },
  {
    type: 'percent',
    text: [
      '3. Collecting weight under body',
      '3. LF to side & slightly back',
      '3. RF diag fwd (TH), lower e/o 3',
    ],
    ml: [-10, -45, 90, 0.8, 'bottom', 'all 3s'],
    mr: [0, 0, 90, -0.8, 'top', 'all 3s'],
    ll: [0, 0, 90, -0.8, 'top', 'all 2.7s 0.2s'],
    lr: [-17, -24, 90, 0.8, 'top', 'all 2.7s 0.2s'],
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
    ml: [25, 48, -90, 0.2, 'top', 'all 2s'],
    mr: [25, 40, -90, 1, 'top', 'all 2s'],
    ll: [20, 36, 90, 1, 'top', 'all 2s'],
    lr: [20, 44, 90, 0.2, 'top', 'all 2s'],
  },
  {
    type: 'percent',
    text: [
      '1. Moving together towards LOD',
      '1. LF back (TH)',
      '1. RF fwd (HT)',
    ],
    ml: [25, 0, 22.5, 0.8, 'center', 'all 2s'],
    mr: [0, 0, 0, -0.8, 'top', 'all 2s'],
    ll: [0, 0, 0, -0.8, 'top', 'all 2s'],
    lr: [30, 2, 0, 0.8, 'top', 'all 2s'],
  },
  {
    type: 'percent',
    text: [
      '2. Moving together towards LOD',
      '2. RF to side, small step (Heel Pull)',
      '2. LF to side (T)',
    ],
    ml: [0, 0, 67.5, -0.8, 'center', 'left 3s, top 3s, opacity 3s, transform 2.5s 0.5s'],
    mr: [50, 10, 135, 0.8, 'top', 'left 2.5s, top 2s ease-in, opacity 3s, transform 2s 0.5s'],
    ll: [62, 12, 135, 0.8, 'top', 'left 3s, top 3s, opacity 3s, transform 2s 1s'],
    lr: [0, 0, 90, -0.8, 'top', 'all 2s 1s'],
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
    ml: [20, 75, 225, 0.2, 'top', 'all 2s'],
    mr: [15, 70, 225, 1, 'top', 'all 2s'],
    ll: [10, 70, 45, 1, 'top', 'all 2s'],
    lr: [15, 75, 45, 0.2, 'top', 'all 2s'],
  },
  {
    type: 'percent',
    text: [
      '1. Moving together towards DC',
      '1. LF back in CBMP (TH)',
      '1. RF fwd in CBMP (HT)',
    ],
    ml: [20, -20, 0, 0.8, 'top', 'all 2s'],
    mr: [0, 0, 0, -0.8, 'top', 'all 2s'],
    ll: [0, 0, 0, -0.8, 'top', 'all 2s'],
    lr: [20, -20, 0, 0.8, 'top', 'all 2s'],
  },
  {
    type: 'percent',
    text: [
      '2. Moving together towards DC in closed',
      '2. RF back (T)',
      '2. LF fwd (T)',
    ],
    ml: [0, 0, 0, -0.8, 'top', 'all 2s'],
    mr: [38, -38, 0, 0.8, 'top', 'all 2s'],
    ll: [38, -38, 0, 0.8, 'top', 'all 2s'],
    lr: [0, 0, 0, -0.8, 'top', 'all 2s'],
  },
  {
    type: 'percent',
    text: [
      '2&. Collect under body',
      '2&. LF collects to RF w/o weight',
      '2&. RF collects to LF w/o weight',
    ],
    ml: [18, -18, 0, 0, 'top', 'all 2s'],
    mr: [0, 0, 0, 0, 'top', 'all 2s'],
    ll: [0, 0, 0, 0, 'top', 'all 2s'],
    lr: [18, -18, 0, 0, 'top', 'all 2s'],
  },
  {
    type: 'percent',
    text: [
      '3. Moving LOD',
      '3. LF to side & slightly fwd (TH)',
      '3. RF to side & slightly back (TH)',
    ],
    ml: [27, 4, -90, 0.8, 'top'],
    mr: [0, 0, 0, -0.8, 'top'],
    ll: [0, 0, 0, -0.8, 'top'],
    lr: [27, 12, -90, 0.8, 'top'],
  },
  {
    type: 'percent',
    text: [
      '3&. Collect under body',
      '3&. RF collects to lF w/o weight',
      '3&. LF collects to RF w/o weight',
    ],
    ml: [0, 0, 0, 0, 'top'],
    mr: [27, 14, -90, 0, 'top'],
    ll: [27, 22, -90, 0, 'top'],
    lr: [0, 0, 0, 0, 'top'],
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
    ml: [15, 64, 270, 1, 'top', 'all 2s'],
    mr: [26, 44, 270, 0.2, 'bottom', 'all 2s'],
    ll: [10, 52, 90, 0.2, 'top', 'all 2s'],
    lr: [10, 60, 90, 1, 'top', 'all 2s'],
  },
  {
    type: 'percent',
    text: [
      '1. Moving together towards LOD',
      '1. RF back (TH)',
      '1. LF fwd (HT)',
    ],
    ml: [0, 0, 0, -0.8, 'top'],
    mr: [20, -15, -22.5, 0.8, 'bottom'],
    ll: [25, 0, 0, 0.8, 'top'],
    lr: [0, 0, 0, -0.8, 'top'],
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
    ll: [0, 0, -90, -0.8, 'top', 'all 1.5s 0.5s'],
    lr: [48, -8, -90, 0.8, 'top'],
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
    ll: [18, 4, -45, 0.8, 'top'],
    lr: [0, 0, -45, -0.8, 'top'],
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
    ml: [85, 42, 135, 0.2, 'top', 'all 2s'],
    mr: [80, 47, 135, 1, 'top', 'all 2s'],
    ll: [78, 52, -45, 1, 'top', 'all 2s'],
    lr: [84, 47, -45, 0.2, 'top', 'all 2s'],
  },
  {
    type: 'percent',
    text: [
      '1. Prepare to move DC against LOD',
      '1. RF back (TH)',
      '1. LF fwd (HT)',
    ],
    ml: [-30, 0, 0, 0.8, 'top'],
    mr: [0, 0, 0, -0.8, 'top'],
    ll: [0, 0, 0, -0.8, 'top'],
    lr: [-30, 0, 0, 0.8, 'top'],
  },
  {
    type: 'percent',
    text: [
      '2. Moving against LOD',
      '2. RF diag back (T)',
      '2. LF to side (T)',
    ],
    ml: [0, 0, 0, -0.8, 'top'],
    mr: [-40, -5, 0, 0.8, 'top'],
    ll: [-48, -10, 45, 0.8, 'top'],
    lr: [0, 0, 45, -0.8, 'top'],
  },
  {
    type: 'percent',
    text: [
      '3. Cross behind into PP',
      '3. LF crosses behind RF (TH)',
      '3. RF crosses behind LF (TH)',
    ],
    ml: [-25, -5, 0, 0.8, 'top'],
    mr: [0, 0, 0, -0.8, 'top'],
    ll: [0, 0, 45, -0.8, 'top'],
    lr: [-33, -3, 45, 0.8, 'top'],
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
    mr: [30, 70, -45, 0.2, 'top', 'all 2s'],
    ll: [30, 65, 135, 0.2, 'top', 'all 2s'],
    lr: [25, 70, 135, 1, 'top', 'all 2s'],
  },
  {
    type: 'percent',
    text: [
      '1. Moving together DW',
      '1. RF back (TH)',
      '1. LF fwd (HT)',
    ],
    ml: [0, 0, 0, -0.8, 'top'],
    mr: [10, 10, 0, 0.8, 'top'],
    ll: [10, 10, 0, 0.8, 'top'],
    lr: [0, 0, 0, -0.8, 'top'],
  },
  {
    type: 'percent',
    text: [
      '2. Moving towards DC against LOD',
      '2. LF fwd (T)',
      '2. RF back (T)',
    ],
    ml: [-8, -8, 0, 0.8, 'top'],
    mr: [-16, -16, 0, -0.8, 'top', 'all 1.5s ease-in 1.5s'],
    ll: [-16, -16, 0, -0.8, 'top', 'all 1.5s ease-in 1.5s'],
    lr: [-8, -8, 0, 0.8, 'top'],
  },
  {
    type: 'percent',
    text: [
      '3. Moving Center',
      '3. RF to side (T)',
      '3. LF to side pointing DC (T)',
    ],
    ml: [0, 0, 0, -0.8, 'top'],
    mr: [-0, -22, -45, 0.8, 'top', 'all 2s'],
    ll: [-5, -22, -90, 0.8, 'top', 'all 2s'],
    lr: [0, 0, 0, -0.8, 'top'],
  },
  {
    type: 'percent',
    text: [
      '4. Moving DC',
      '4. LF back in CBMP (TH)',
      '4. RF fwd in CBMP (TH)',
    ],
    ml: [20, -35, -90, 0.8, 'top'],
    mr: [0, 0, -45, -0.8, 'top'],
    ll: [0, 0, 0, -0.8, 'top'],
    lr: [15, -35, -90, 0.8, 'top'],
  },
  {
    type: 'percent',
    text: [
      '5. Moving DC',
      '5. RF back (T)',
      '5. LF fwd (T)',
    ],
    ml: [12, -17, 0, -0.8, 'top', 'all 1.5s ease-in 1.5s'],
    mr: [20, -30, 0, 0.8, 'top'],
    ll: [20, -26, 0, 0.8, 'top'],
    lr: [10, -10, 0, -0.8, 'top', 'all 1.5s ease-in 1.5s'],
  },
  {
    type: 'percent',
    text: [
      '6. Moving LOD',
      '6. LF to side & slightly back (TH)',
      '6. RF to side & slightly back (TH)',
    ],
    ml: [25, 15, -90, 0.8, 'top', 'left 2s, top 2s, opacity 1s 1s, transform 2s'],
    mr: [25, 22, -90, -0.8, 'top', 'left 2s 2s, top 2s 2s, opacity 1s 1s, transform 2s 2s'],
    ll: [28, 28, -90, -0.8, 'top', 'left 2s 2s, top 2s 2s, opacity 1s 1s, transform 2s 2s'],
    lr: [30, 18, -90, 0.8, 'top', 'left 2s, top 2s, opacity 1s 1s, transform 2s'],
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
    ml: [10, 60, 45, 0.2, 'top', 'all 2s'],
    mr: [15, 65, 45, 1, 'top', 'all 2s'],
    ll: [21, 65, 225, 1, 'top', 'all 2s'],
    lr: [16+8, 60-21, 225, 0.2, 'bottom', 'all 2s'],
  },
  {
    type: 'percent',
    text: [
      '1. Moving together towards DC',
      '1. LF fwd (HT)',
      '1. RF back (TH)',
    ],
    ml: [5, -20, -45, 0.8, 'top'],
    mr: [0, 0, 0, -0.8, 'top'],
    ll: [0, 0, 0, -0.8, 'top'],
    lr: [-3, -25, -45, 0.8, 'bottom'],
  },
  {
    type: 'percent',
    text: [
      '2. Moving together towards DC',
      '2. RF to side (T)',
      '2. LF closes to RF (Heel Turn)',
    ],
    ml: [0, 0, -45, -0.8, 'top', 'all 3s'],
    mr: [22, -50, -90, 0.8, 'top', 'all 3s'],
    ll: [12, -45, -135, 0.8, 'top', 'top 3s, left 3s, opacity 2s 1s, transform 2.75s 0.25s'],
    lr: [0, 0, -90, -0.8, 'bottom', 'top 3s, left 3s, opacity 2s 1s, transform 2s 1s'],
  },
  {
    type: 'percent',
    text: [
      '2&. Lady moves LOD, man pivots under body',
      '2&. LF closes to RF without weight (Toe Pivot)',
      '2&. RF to side & slightly back (T)',
    ],
    ml: [28, -25, -135, 0, 'top', 'left 2s, top 3s, opacity 3s, transform 2.25s 0.85s'],
    mr: [0, 0, -135, 0, 'top', 'left 2s, top 2s, opacity 3s, transform 2.25s 0.85s'],
    ll: [0, 0, 0, -0.8, 'top', 'all 2.25s 0.85s'],
    lr: [22, 8, -90, 0.8, 'bottom', 'all 2.25s 0.85s'],
  },
  {
    type: 'percent',
    text: [
      '3. Moving together under body',
      '3. Hold weight on RF',
      '3. LF crosses in front of RF (T)',
    ],
    ml: [-6, -7, -90, 0, 'top'],
    mr: [0, 0, -90, 0, 'top'],
    ll: [10, 0, -180, 0.8, 'top'],
    lr: [4, -1, -45, -0.8, 'bottom'],
  },
];

const reversePivotData = [
  {
    type: 'percent',
    text: [
      'Prepare to move LOD',
      'Begin with weight on left foot',
      'Begin with weight on right foot',
    ],
    ml: [25+11, 44-12, 270, 1, 'bottom', 'all 2s'],
    mr: [25, 36, 270, 0.2, 'top', 'all 2s'],
    ll: [20, 32, 90, 0.2, 'top', 'all 2s'],
    lr: [20, 40, 90, 1, 'top', 'all 2s'],
  },
  {
    type: 'percent',
    text: [
      '1. Moving together towards LOD',
      '1. RF back (TH)',
      '1. LF fwd (HT)',
    ],
    ml: [0, 0, 0, -0.8, 'bottom'],
    mr: [18, -10, -22.5, 0.8, 'top'],
    ll: [24, 0, 0, 0.8, 'top'],
    lr: [0, 0, 0, -0.8, 'top'],
  },
  {
    type: 'percent',
    text: [
      '1. Pivot',
      '1. Pivot on RF (T)',
      '1. Pivot on LF (T)',
    ],
    ml: [18, -17, -180, 0, 'bottom', 'all 2s'],
    mr: [0, 0, -157.5, 0, 'top', 'all 2s'],
    ll: [0, 0, -180, 0, 'top', 'all 2.5s'],
    lr: [47, -7, -180, 0, 'top', 'all 3s'],
  },
];

const backLockData = [
  {
    count: 0,
    type: 'percent',
    text: [
      'Prepare to move DW',
      'Begin with weight on right foot',
      'Begin with weight on left foot',
    ],
    ml: [10, 38, -45, 0.2, 'top', 'all 2s'],
    mr: [15, 33, -45, 1, 'top', 'all 2s'],
    ll: [15, 25, 135, 1, 'top', 'all 2s'],
    lr: [10, 30, 135, 0.2, 'top', 'all 2s'],
  },
  {
    count: 1,
    type: 'percent',
    text: [
      '1. Moving together towards DW',
      '1. LF back in CBMP (TH)',
      '1. RF fwd in CBMP (HT)',
    ],
    ml: [20, 10, 0, 0.8, 'top'],
    mr: [0, 0, 0, -0.8, 'top'],
    ll: [0, 0, 0, -0.8, 'top'],
    lr: [20, 10, 0, 0.8, 'top'],
  },
  {
    count: 2,
    type: 'percent',
    text: [
      '2. Moving together towards DW',
      '2. RF back (T)',
      '2. LF diag fwd (T)',
    ],
    ml: [0, 0, 0, -0.8, 'top'],
    mr: [40, 25, 0, 0.8, 'top'],
    ll: [40, 25, 0, 0.8, 'top'],
    lr: [0, 0, 0, -0.8, 'top'],
  },
  {
    count: 2.5,
    type: 'percent',
    text: [
      '2&. Lock, moving together towards DW',
      '2&. LF crosses in front of RF (T)',
      '2&. RF crosses behind LF (T)',
    ],
    ml: [28, 4, 0, 0.8, 'top'],
    mr: [0, 0, 0, -0.8, 'top'],
    ll: [0, 0, 0, -0.8, 'top'],
    lr: [28, 4, 0, 0.8, 'top'],
  },
  {
    count: 3,
    type: 'percent',
    text: [
      '3. Moving together towards DW',
      '3. RF diag back (T)',
      '3. LF diag fwd (T)',
    ],
    ml: [0, 0, 0, -0.8, 'top'],
    mr: [30, 0, 0, 0.8, 'top'],
    ll: [30, 0, 0, 0.8, 'top'],
    lr: [0, 0, 0, -0.8, 'top'],
  },
  {
    count: 3.5,
    type: 'percent',
    text: [
      '3&. Collect under body',
      '3&. Collect LF to RF w/o weight',
      '3&. Collect RF to LF w/o weight',
    ],
    ml: [22, 10, 0, 0, 'top'],
    mr: [0, 0, 0, 0, 'top'],
    ll: [0, 0, 0, 0, 'top'],
    lr: [22, 10, 0, 0, 'top'],
  },
];

const chasse_to_right_data = [
  {
    type: 'percent',
    count: 0,
    text: [
      'Prepare to move towards DC',
      'Begin with weight on right foot',
      'Begin with weight on left foot',
    ],
    ml: [10, 60, 45, 0.2, 'top'],
    mr: [15, 65, 45, 1, 'top'],
    ll: [20, 65, 225, 1, 'top'],
    lr: [15, 60, 225, 0.2, 'top'],
  },
  {
    type: 'percent',
    count: 1,
    text: [
      '1. Moving together towards DC',
      '1. LF fwd (HT),  commence to rise end of 1',
      '1. RF back (TH),  commence to rise end of 1 , NFR',
    ],
    ml: [10, -20, -45, 0.8, 'top'],
    mr: [0, 0, 0, -0.8, 'top'],
    ll: [0, 0, 0, -0.8, 'top'],
    lr: [10, -25, -45, 0.8, 'top'],
  },
  {
    type: 'percent',
    count: 2,
    text: [
      '2. Moving together towards LOD',
      '2. RF to side (T),  cont. to rise',
      '2. LF to side (T),  cont. to rise',
    ],
    ml: [0, 0, 0, -0.8, 'top'],
    mr: [34, -25, -45, 0.8, 'top'],
    ll: [30, -30, -45, 0.8, 'top'],
    lr: [0, 0, 0, -0.8, 'top'],
  },
  {
    type: 'percent',
    count: 2.5,
    text: [
      '2&. Collecting weight under body',
      '2&. LF closes to RF (T),  cont. to rise',
      '2&. RF closes to LF (T),  cont. to rise',
    ],
    ml: [25, 4, -45, 0.8, 'top'],
    mr: [0, 0, -45, -0.8, 'top'],
    ll: [0, 0, -45, -0.8, 'top'],
    lr: [21, 4, -45, 0.8, 'top'],
  },
  {
    type: 'percent',
    count: 3,
    text: [
      '3. Moving together towards LOD',
      '3. RF to side & slightly back (TH),  cont. to rise',
      '3. LF to side & slightly forward (TH),  cont. to rise',
    ],
    ml: [0, 0, 0, -0.8, 'top'],
    mr: [25, 0, 0, 0.8, 'top'],
    ll: [25, 0, 0, 0.8, 'top'],
    lr: [0, 0, 0, -0.8, 'top'],
  },
  {
    type: 'percent',
    count: 3.5,
    text: [
      '3&. Collecting weight under body',
      '3&. Collect LF and lower end of 3',
      '3&. Collect RF and lower end of 3',
    ],
    ml: [25, 0, 0, 0, 'top'],
    mr: [0, 0, 0, 0, 'top'],
    ll: [0, 0, 0, 0, 'top'],
    lr: [25, 0, 0, 0, 'top'],
  },
];

const weaveFromPromenadeData = [
  {
    count: 0,
    type: 'percent',
    text: [
      'Prepare to move DC',
      'Begin with weight on left foot',
      'Begin with weight on right foot',
    ],
    ml: [15, 60, 90, 1, 'top'],
    mr: [10, 65, 90, 0.2, 'top'],
    ll: [10, 70, 0, 0.2, 'top'],
    lr: [15, 65, 0, 1, 'top'],
  },
  {
    count: 1,
    type: 'percent',
    text: [
      '1. Moving together towards DW',
      '1. RF fwd & across in CBMP',
      '1. LF fwd in CBMP',
    ],
    ml: [0, 0, 0, -0.8, 'top'],
    mr: [15, -20, -45, 0.8, 'top'],
    ll: [15, -20, 0, 0.8, 'top'],
    lr: [0, 0, 0, -0.8, 'top'],
  },
  {
    count: 2,
    type: 'percent',
    text: [
      '2. Moving together towards DW',
      '2. LF fwd (T)',
      '2. RF to side & slightly back (T)',
    ],
    ml: [15, -30, -45, 0.8, 'top'],
    mr: [0, 0, 0, -0.8, 'top'],
    ll: [0, 0, -90, -0.8, 'top', 'all 1.5s 0.5s'],
    lr: [20, -35, -135, 0.8, 'top'],
  },
  {
    count: 3,
    type: 'percent',
    text: [
      '3. Moving together towards LOD',
      '3. RF to side & slightly back (T)',
      '3. LF to side & slightly fwd (T)',
    ],
    ml: [0, 0, -90, -0.8, 'top'],
    mr: [32, -22, -90, 0.8, 'top'],
    ll: [32, -32, -180, 0.8, 'top'],
    lr: [0, 0, -90, -0.8, 'top'],
  },
  {
    count: 4,
    type: 'percent',
    text: [
      '4. Moving outside partner towards LOD',
      '4. LF back in CBMP (TH)',
      '4. RF fwd in CBMP (TH)',
    ],
    ml: [50, -8, -45, 0.8, 'top'],
    mr: [0, 0, -45, -0.8, 'top'],
    ll: [0, 0, 0, -0.8, 'top'],
    lr: [45, -15, -45, 0.8, 'top'],
  },
  {
    count: 5,
    type: 'percent',
    text: [
      '5. Moving LOD',
      '5. RF back (T)',
      '5. LF fwd (T)',
    ],
    ml: [0, 0, 0, -0.8, 'top'],
    mr: [42, -20, -22.5, 0.8, 'top'],
    ll: [42, -10, -22.5, 0.8, 'top'],
    lr: [0, 0, 0, -0.8, 'top'],
  },
  {
    count: 6,
    type: 'percent',
    text: [
      '6. Moving LOD',
      '6. LF to side & slightly back (TH)',
      '6. RF to side & slightly back (TH)',
    ],
    ml: [40, 0, -135, 0.8, 'top', 'left 2s, top 2s, opacity 1s 1s, transform 2s'],
    mr: [15, 22, -112.5, -0.8, 'top', 'left 2s 2s, top 2s 2s, opacity 1s 1s, transform 2s'],
    ll: [16, 20, -112.5, -0.8, 'top', 'left 2s 2s, top 2s 2s, opacity 1s 1s, transform 2s'],
    lr: [40, 10, -135, 0.8, 'top', 'left 2s, top 2s, opacity 1s 1s, transform 2s'],
  },
];

const closedTelemarkData = [
  {
    count: 0,
    type: 'percent',
    text: [
      'Prepare to move towards DC',
      'Begin with weight on right foot',
      'Begin with weight on left foot',
    ],
    ml: [10, 60, 45, 0.2, 'top', 'all 2s'],
    mr: [15, 65, 45, 1, 'top', 'all 2s'],
    ll: [21, 65, 225, 1, 'top', 'all 2s'],
    lr: [16+8, 60-21, 225, 0.2, 'bottom', 'all 2s'],
  },
  {
    count: 1,
    type: 'percent',
    text: [
      '1. Moving together towards DC',
      '1. LF fwd (HT)',
      '1. RF back (TH)',
    ],
    ml: [5, -20, -45, 0.8, 'top'],
    mr: [0, 0, 0, -0.8, 'top'],
    ll: [0, 0, 0, -0.8, 'top'],
    lr: [-3, -25, -45, 0.8, 'bottom'],
  },
  {
    count: 2,
    type: 'percent',
    text: [
      '2. Moving together towards DC',
      '2. RF to side (T)',
      '2. LF closes to RF (Heel Turn)',
    ],
    ml: [0, 0, -45, -0.8, 'top', 'all 3s'],
    mr: [22, -50, -90, 0.8, 'top', 'all 3s'],
    ll: [12, -45, -135, 0.8, 'top', 'top 3s, left 3s, opacity 2s 1s, transform 2.75s 0.25s'],
    lr: [0, 0, -90, -0.8, 'bottom', 'top 3s, left 3s, opacity 2s 1s, transform 2s 1s'],
  },
  {
    count: 2.5,
    type: 'percent',
    text: [
      '2&. Moving together towards DC',
      '2&. LF closes to RF without height (Toe pivot)',
      '2&. RF to side & slightly back (TH)',
    ],
    ml: [28, -25, -135, 0, 'top', 'left 2s, top 3s, opacity 3s, transform 2.25s 0.85s'],
    mr: [0, 0, -135, 0, 'top', 'left 2s, top 2s, opacity 3s, transform 2.25s 0.85s'],
    ll: [0, 0, -90, 0, 'top', 'all 2.25s 0.85s'],
    lr: [18, 7, -90, 0, 'bottom', 'all 2.25s 0.85s'],
  },
  {
    count: 3,
    type: 'percent',
    text: [
      '3. Moving together towards DC',
      '3. LF to side & slightly fwd (TH)',
      '3. RF to side & slightly back (TH)',
    ],
    ml: [25, 20, -45, 0.8, 'top'],
    mr: [0, 0, 0, -0.8, 'top'],
    ll: [0, 0, 0, -0.8, 'top'],
    lr: [35, 15, -45, 0.8, 'bottom'],
  },
  {
    count: 3.5,
    type: 'percent',
    text: [
      '3&. Collect under body',
      '3&. RF collect to LF',
      '3&. LF collect to RF',
    ],
    ml: [0, 0, 0, 0, 'top'],
    mr: [25, 25, -45, 0, 'top'],
    ll: [28, 25, -45, 0, 'top'],
    lr: [0, 0, 0, 0, 'bottom'],
  },
];


const openTelemarkData = [
  {
    count: 0,
    type: 'percent',
    text: [
      'Prepare to move towards DC',
      'Begin with weight on right foot',
      'Begin with weight on left foot',
    ],
    ml: [10, 60, 45, 0.2, 'top', 'all 2s'],
    mr: [15, 65, 45, 1, 'top', 'all 2s'],
    ll: [21, 65, 225, 1, 'top', 'all 2s'],
    lr: [16+8, 60-21, 225, 0.2, 'bottom', 'all 2s'],
  },
  {
    count: 1,
    type: 'percent',
    text: [
      '1. Moving together towards DC',
      '1. LF fwd (HT)',
      '1. RF back (TH)',
    ],
    ml: [5, -20, -45, 0.8, 'top'],
    mr: [0, 0, 0, -0.8, 'top'],
    ll: [0, 0, 0, -0.8, 'top'],
    lr: [-3, -25, -45, 0.8, 'bottom'],
  },
  {
    count: 2,
    type: 'percent',
    text: [
      '2. Moving together towards DC',
      '2. RF to side (T)',
      '2. LF closes to RF (Heel Turn)',
    ],
    ml: [0, 0, -45, -0.8, 'top', 'all 3s'],
    mr: [22, -50, -90, 0.8, 'top', 'all 3s'],
    ll: [12, -45, -135, 0.8, 'top', 'top 3s, left 3s, opacity 2s 1s, transform 2.75s 0.25s'],
    lr: [0, 0, -90, -0.8, 'bottom', 'top 3s, left 3s, opacity 2s 1s, transform 2s 1s'],
  },
  {
    count: 2.5,
    type: 'percent',
    text: [
      '2&. Moving together towards DC, open to PP',
      '2&. LF closes to RF without height (Toe pivot)',
      '2&. RF to side & slightly back (TH)',
    ],
    ml: [30, -25, -180, 0, 'top', 'left 2s, top 3s, opacity 3s, transform 2.25s 0.85s'],
    mr: [0, 0, -180, 0, 'top', 'left 2s, top 2s, opacity 3s, transform 2.25s 0.85s'],
    ll: [0, 0, -45, 0, 'top', 'all 2.25s 0.85s'],
    lr: [11, 3, -45, 0, 'bottom', 'all 2.25s 0.85s'],
  },
  {
    count: 3,
    type: 'percent',
    text: [
      '3. Moving in Promenade towards LOD',
      '3. LF to side (TH)',
      '3. RF to side (TH)',
    ],
    ml: [25, 0, 0, 0.8, 'top'],
    mr: [0, 0, 0, -0.8, 'top'],
    ll: [0, 0, 0, -0.8, 'top'],
    lr: [25, 0, 0, 0.8, 'bottom'],
  },
  {
    count: 3.5,
    type: 'percent',
    text: [
      '3&. Collect under body',
      '3&. RF collect to LF',
      '3&. LF collect to RF',
    ],
    ml: [0, 0, 0, 0, 'top'],
    mr: [25, 0, 0, 0, 'top'],
    ll: [25, 0, 0, 0, 'top'],
    lr: [0, 0, 0, 0, 'bottom'],
  },
];

const openImpetusData = [
  {
    type: 'percent',
    text: [
      'Prepare to move towards DW',
      'Begin with weight on right foot',
      'Begin with weight on left foot',
    ],
    ml: [26, 36, -90, 0.2, 'bottom', 'all 2s'],
    mr: [15, 40, -90, 1, 'top', 'all 2s'],
    ll: [12, 36, 90, 1, 'top', 'all 2s'],
    lr: [12, 44, 90, 0.2, 'top', 'all 2s'],
  },
  {
    type: 'percent',
    text: [
      '1. Moving together towards LOD',
      '1. LF back (TH)',
      '1. RF fwd (HT)',
    ],
    ml: [15, 15, 45, 0.8, 'bottom', 'all 2s'],
    mr: [0, 0, 0, -0.8, 'top', 'all 2s'],
    ll: [0, 0, 0, -0.8, 'top', 'all 2s'],
    lr: [22, 4, 0, 0.8, 'top', 'all 2s'],
  },
  {
    type: 'percent',
    text: [
      '2. Moving together towards LOD',
      '2. RF closes to LF (Heel Turn)',
      '2. LF to side (T), then brush RF to LF',
    ],
    ml: [0, 0, 90, -0.8, 'bottom', 'left 3s, top 3s, opacity 1.5s ease-in 1.5s, transform 2.5s 0.5s'],
    mr: [40, 19, 135, 0.8, 'top', 'left 2.5s, top 2.8s 0.2s, opacity 1.5s ease-in 1.5s, transform 2.8s 0.2s'],
    ll: [48, 25, 135, 0.8, 'top', 'all 3s'],
    lr: [0, 0, 135, -0.8, 'top', 'all 2s 1s'],
    // lr: [25, 10, 135, -0.8, 'top', 'all 2s 1s'],
  },
  {
    count: 2.5,
    type: 'percent',
    text: [
      '2&. Collecting weight under body',
      '2&. ',
      '2&. ',
    ],
    ml: [12, -12, 45, 0, 'bottom', 'all 3s'],
    mr: [7, -2, 45, 0, 'top', 'all 3s'],
    ll: [0, 0, 135, 0, 'top', 'all 2.7s 0.2s'],
    lr: [32, 12, 135, 0, 'top', 'left 2s, top 2.5s, opacity 2s, transform 2s 0.5s'],
  },
  {
    type: 'percent',
    text: [
      '3. Moving DC',
      '3. ',
      '3. ',
    ],
    ml: [15, -15, 0, 0.8, 'bottom', 'all 2s'],
    mr: [0, 0, 0, -0.8, 'top', 'all 2s'],
    ll: [0, 0, 0, -0.8, 'top', 'all 2s'],
    lr: [15, -15, 0, 0.8, 'top', 'all 2s'],
  },
  {
    type: 'percent',
    text: [
      '3&. Collecting weight under body',
      '3&. LF to side & slightly back',
      '3&. RF closes to LF (T),  cont. to rise',
    ],
    ml: [0, 0, 0, 0, 'bottom'],
    mr: [15, -15, 0, 0, 'top'],
    ll: [15, -15, 0, 0, 'top'],
    lr: [0, 0, 0, 0, 'top'],
  },
];

const crossHesitationData = [
  {
    count: 0,
    type: 'percent',
    text: [
      'Prepare to move DC',
      'Begin with weight on left foot',
      'Begin with weight on right foot',
    ],
    ml: [25, 50, 90, 1, 'top'],
    mr: [20, 55, 90, 0.2, 'top'],
    ll: [22, 62, 0, 0.2, 'top'],
    lr: [27, 57, 0, 1, 'top'],
  },
  {
    count: 1,
    type: 'percent',
    text: [
      '1. Moving together towards DW',
      '1. RF fwd & across in CBMP',
      '1. LF fwd & across in CBMP',
    ],
    ml: [0, 0, 0, -0.8, 'top'],
    mr: [20, -20, -45, 0.8, 'top'],
    ll: [18, -18, 0, 0.8, 'top'],
    lr: [0, 0, 0, -0.8, 'top'],
  },
  {
    count: 2,
    type: 'percent',
    text: [
      '2. Moving together towards DW',
      '2. LF closes to RF without weight',
      '2. RF to side & slightly back (T)',
    ],
    ml: [8, -20, -45, 0, 'top'],
    mr: [0, 0, 0, 0, 'top'],
    ll: [0, 0, -90, -0.8, 'top'],
    lr: [12, -26, -135, 0.8, 'top'],
  },
  {
    count: 3,
    type: 'percent',
    text: [
      '3. Moving under body',
      '3. Hold position on RF',
      '3. LF closes to RF',
    ],
    ml: [0, 0, 0, 0, 'top'],
    mr: [0, 0, 0, 0, 'top'],
    ll: [5, -9, -45, 0.8, 'top'],
    lr: [0, 0, 0, -0.8, 'top'],
  },
];

const wingData = [
  {
    count: 0,
    type: 'percent',
    text: [
      'Prepare to move DC',
      'Begin with weight on left foot',
      'Begin with weight on right foot',
    ],
    ml: [25, 50, 90, 1, 'top'],
    mr: [20, 55, 90, 0.2, 'top'],
    ll: [22, 62, 0, 0.2, 'top'],
    lr: [27, 57, 0, 1, 'top'],
  },
  {
    count: 1,
    type: 'percent',
    text: [
      '1. Moving together towards DW',
      '1. RF fwd & across in CBMP',
      '1. LF fwd & across in CBMP',
    ],
    ml: [0, 0, 0, -0.8, 'top'],
    mr: [20, -20, -45, 0.8, 'top'],
    ll: [18, -18, 0, 0.8, 'top'],
    lr: [0, 0, 0, -0.8, 'top'],
  },
  {
    count: 2,
    type: 'percent',
    text: [
      '2. Moving together towards DW',
      '2. Draw LF toward RF',
      '2. RF to side & slightly back (T)',
    ],
    ml: [4, -10, -45, 0, 'top'],
    mr: [0, 0, 0, 0, 'top'],
    ll: [0, 0, -90, -0.8, 'top'],
    lr: [15, -35, -135, 0.8, 'top'],
  },
  {
    count: 3,
    type: 'percent',
    text: [
      '3. Wing position, lady left side outside',
      '3. LF closes to RF without weight',
      '3. LF fwd in CBMP (TH)',
    ],
    ml: [4, -10, 0, 0, 'top'],
    mr: [0, 0, 0, 0, 'top'],
    ll: [-10, -20, -45, 0.8, 'top'],
    lr: [0, 0, 0, -0.8, 'top'],
  },
];

const outsideSpinData = [
  {
    type: 'percent',
    text: [
      'Prepare to move towards DW',
      'Begin with weight on right foot',
      'Begin with weight on left foot',
    ],
    ml: [60, 36, 90, 0.2, 'top', 'all 2s'],
    mr: [60, 44, 90, 1, 'top', 'all 2s'],
    ll: [65, 54, -90, 1, 'top', 'all 2s'],
    lr: [65, 46, -90, 0.2, 'top', 'all 2s'],
  },
  {
    type: 'percent',
    text: [
      '1. Moving together towards BLOD',
      '1. LF back (TH)',
      '1. RF fwd (HT)',
    ],
    ml: [-10, 5, 45, 0.8, 'top', 'all 2s'],
    mr: [0, 0, 0, -0.8, 'top', 'all 2s'],
    ll: [0, 0, 0, -0.8, 'top', 'all 2s'],
    lr: [-30, 0, 0, 0.8, 'top', 'all 2s'],
  },
  {
    type: 'percent',
    text: [
      '1&. Moving together towards LOD',
      '1&. RF closes to LF (Heel Turn)',
      '1&. LF to side (T), then brush RF to LF',
    ],
    ml: [0, 0, 0, -0.8, 'top', 'left 3s, top 3s, opacity 1.5s ease-in 1.5s, transform 2.5s 0.5s'],
    mr: [-20, 15, 135, 0.8, 'top', 'all 3s'],
    ll: [-30, -10, 135, 0, 'top', 'left 2s, top 3s, opacity 3s, transform 2s 1s'],
    lr: [3, 3, 135, 0, 'top', 'all 2s 1s'],
  },
  {
    type: 'percent',
    text: [
      '2. Collecting weight under body',
      '2. LF to side & slightly back',
      '2. RF diag fwd (TH), lower e/o 3',
    ],
    ml: [-10, 25, 180, 0, 'top', 'all 3s'],
    mr: [-5, -5, 90, 0, 'top', 'all 3s'],
    ll: [10, 5, 90, 0, 'top', 'all 2.7s 0.2s'],
    lr: [0, 0, 90, 0, 'top', 'all 2.7s 0.2s'],
  },
  {
    type: 'percent',
    text: [
      '2&',
      '2&',
      '2&',
    ],
    ml: [-15, -15, 90, 0, 'top', 'all 3s'],
    mr: [0, 0, 90, 0, 'top', 'all 3s'],
    ll: [0, 0, 90, 0.8, 'top', 'all 2.7s 0.2s'],
    lr: [0, 0, 90, -0.8, 'top', 'all 2.7s 0.2s'],
  },
  {
    type: 'percent',
    text: [
      '3. Collecting weight under body',
      '3. LF to side & slightly back',
      '3. RF closes to LF (T),  cont. to rise',
    ],
    ml: [10, -20, 90, 0.8, 'top'],
    mr: [0, 0, 90, -0.8, 'top'],
    ll: [-5, 5, 90, -0.8, 'top'],
    lr: [-10, -15, 90, 0.8, 'top'],
  },
];

const turningLocktoLeftData = [
  {
    count: 0,
    type: 'percent',
    text: [
      'Prepare to move DW',
      'Begin with weight on right foot',
      'Begin with weight on left foot',
    ],
    ll: [10, 60, 45, 0.2, 'top'],
    lr: [15, 65, 45, 1, 'top'],
    ml: [20, 65, 225, 1, 'top'],
    mr: [15, 60, 225, 0.2, 'top'],
  },
  {
    count: 1,
    type: 'percent',
    text: [
      '1. Moving together towards DW',
      '1. LF back in CBMP (TH)',
      '1. RF fwd in CBMP (HT)',
    ],
    ml: [0, 0, 0, -0.8, 'top'],
    mr: [20, -20, 0, 0.8, 'top'],
    ll: [15, -20, 0, 0.8, 'top'],
    lr: [0, 0, 0, -0.8, 'top'],
  },
  {
    count: 1.5,
    type: 'percent',
    text: [
      '1&. Moving together towards DW',
      '1&. RF back (T)',
      '1&. LF diag fwd (T)',
    ],
    ml: [6, -20, 0, 0.8, 'top'],
    mr: [0, 0, 0, -0.8, 'top'],
    ll: [0, 0, 0, -0.8, 'top'],
    lr: [0, -20, 0, 0.8, 'top'],
  },
  {
    count: 2,
    type: 'percent',
    text: [
      '2. Lock, moving together towards DW',
      '2. LF crosses in front of RF (T)',
      '2. RF crosses behind LF (T)',
    ],
    ml: [0, 0, 0, -0.8, 'top'],
    mr: [5, -20, -22.5, 0.8, 'top'],
    ll: [10, -20, 0, 0.8, 'top'],
    lr: [0, 0, 0, -0.8, 'top'],
  },
  {
    count: 2.5,
    type: 'percent',
    text: [
      '2&. Moving together towards DW',
      '2&. RF diag back (T)',
      '2&. LF diag fwd (T)',
    ],
    ml: [23, -30, -90, 0, 'top', 'left 2s, top 2s, opacity 2s, transform 2.5s 0.5s'],
    mr: [0, 0, -67.5, 0, 'top', 'left 2s, top 2s, opacity 2s, transform 2.5s 0.5s'],
    ll: [0, 5, -90, 0, 'top', 'left 2s, top 2s, opacity 2s, transform 2.5s 0.5s'],
    lr: [30, -25, -90, 0, 'top', 'left 2s, top 2s, opacity 2s, transform 2.5s 0.5s'],
  },
  {
    count: 3,
    type: 'percent',
    text: [
      '3. Collect under body',
      '3. Collect LF to RF w/o weight',
      '3. Collect RF to LF w/o weight',
    ],
    ml: [20, 20, 0, 0.8, 'top'],
    mr: [0, 0, 0, -0.8, 'top'],
    ll: [0, 0, 0, -0.8, 'top'],
    lr: [20, 20, 0, 0.8, 'top'],
  },
  {
    count: 3.5,
    type: 'percent',
    text: [
      '3&. Collect under body',
      '3&. Collect LF to RF w/o weight',
      '3&. Collect RF to LF w/o weight',
    ],
    mr: [20, 20, 0, 0, 'top'],
    ml: [0, 0, 0, 0, 'top'],
    lr: [0, 0, 0, 0, 'top'],
    ll: [20, 20, 0, 0, 'top'],
  },
];

const dragHesitationData = [
  {
    type: 'percent',
    count: 0,
    text: [
      'Prepare to move towards DC',
      'Begin with weight on right foot',
      'Begin with weight on left foot',
    ],
    ml: [15, 60, 90, 0.2, 'top'],
    mr: [15, 68, 90, 1, 'top'],
    ll: [20, 72, -90, 1, 'top'],
    lr: [20, 64, -90, 0.2, 'top'],
  },
  {
    type: 'percent',
    count: 1,
    text: [
      '1. Moving together towards DC',
      '1. LF fwd (HT),  commence to rise end of 1',
      '1. RF back (TH),  commence to rise end of 1 , NFR',
    ],
    ml: [20, 0, 0, 0.8, 'top'],
    mr: [0, 0, 0, -0.8, 'top'],
    ll: [0, 0, 0, -0.8, 'top'],
    lr: [20, -5, 0, 0.8, 'top'],
  },
  {
    type: 'percent',
    count: 2,
    text: [
      '2. Moving together towards LOD',
      '2. RF to side (T),  cont. to rise',
      '2. LF to side (T),  cont. to rise',
    ],
    ml: [0, 0, -90, -0.8, 'top'],
    mr: [50, -8, -90, 0.8, 'top'],
    ll: [50, -13, -90, 0.8, 'top'],
    lr: [0, 0, -90, -0.8, 'top'],
  },
  {
    type: 'percent',
    count: 3,
    text: [
      '3. Collecting weight under body',
      '3. LF closes to RF (T),  cont. to rise',
      '3. RF closes to LF (T),  cont. to rise',
    ],
    ml: [22, 0, 0, 0, 'top', 'all 3s'],
    mr: [0, 0, 0, 0, 'top', 'all 3s'],
    ll: [0, 0, 0, 0, 'top', 'all 3s'],
    lr: [22, 0, 0, 0, 'top', 'all 3s'],
  },
];

const leftWhiskData = [
  {
    type: 'percent',
    count: 0,
    text: [
      'Prepare to move towards DC',
      'Begin with weight on left foot',
      'Begin with weight on right foot',
    ],
    ml: [20, 52, -90, 1, 'top', 'all 2s'],
    mr: [20, 44, -90, 0.2, 'top', 'all 2s'],
    ll: [15, 40, 90, 0.2, 'top', 'all 2s'],
    lr: [15, 48, 90, 1, 'top','all 2s'],
  },
  {
    type: 'percent',
    count: 1,
    text: [
      '1. Moving together towards DC',
      '1. LF fwd (HT),  commence to rise end of 1',
      '1. RF back (TH),  commence to rise end of 1 , NFR',
    ],
    mr: [20, -5, -22.5, 0.8, 'top'],
    ml: [0, 0, 0, -0.8, 'top'],
    lr: [0, 0, 0, -0.8, 'top'],
    ll: [20, 0, 0, 0.8, 'top'],
  },
  {
    type: 'percent',
    count: 2,
    text: [
      '2. Moving together towards LOD',
      '2. RF to side (T),  cont. to rise',
      '2. LF to side (T),  cont. to rise',
    ],
    ml: [50, -12, -135, 0.8, 'top', 'left 2s, top 1.5s ease-in, opacity 2s, transform 2s'],
    mr: [0, 0, -22.5, -0.8, 'top'],
    ll: [0, 0, -90, -0.8, 'top'],
    lr: [50, -5, -90, 0.8, 'top', 'left 2s, top 1.5s ease-in, opacity 2s, transform 2s'],
  },
  {
    type: 'percent',
    count: 3,
    text: [
      '3. Collecting weight under body',
      '3. LF closes to RF (T),  cont. to rise',
      '3. RF closes to LF (T),  cont. to rise',
    ],
    ml: [0, 0, 0, -0.8, 'top', 'all 2s'],
    mr: [30, -10, -90, 0.8, 'top', 'all 2s'],
    ll: [40, 17, -90, 0.8, 'top', 'all 2s'],
    lr: [0, 0, -45, -0.8, 'top', 'all 2s'],
  },
];

const contraCheckData = [
  {
    type: 'percent',
    count: 0,
    text: [
      'Prepare to move towards DC',
      'Begin with weight on right foot',
      'Begin with weight on left foot',
    ],
    ml: [40, 40, 135, 0.2, 'top', 'all 2s'],
    mr: [35, 45, 135, 1, 'top', 'all 2s'],
    ll: [35, 50, -45, 1, 'top', 'all 2s'],
    lr: [40, 45, -45, 0.2, 'top', 'all 2s'],
  },
  {
    type: 'percent',
    count: 1,
    text: [
      'Moving DW with check',
      'Begin with weight on left foot',
      'Begin with weight on right foot',
    ],
    ml: [20, 20, -45, 0.8, 'top'],
    mr: [0, 0, 0, -0.2, 'top'],
    ll: [0, 0, 0, -0.2, 'top'],
    lr: [20, 20, -45, 0.8, 'top'],
  },
  {
    type: 'percent',
    count: 2,
    text: [
      'Moving DW with check',
      'Begin with weight on left foot',
      'Begin with weight on right foot',
    ],
    ml: [-18, -16, 45, -0.8, 'top'],
    mr: [0, 0, 0, 0.2, 'top'],
    ll: [-5, 0, 90, 0.2, 'top'],
    lr: [-22, -15, 135, -0.8, 'top'],
  },
  {
    type: 'percent',
    count: 3,
    text: [
      'Moving DW with check',
      'Begin with weight on left foot',
      'Begin with weight on right foot',
    ],
    ml: [20, 0, 0, 0.8, 'top'],
    mr: [0, 0, 0, -0.8, 'top'],
    ll: [0, 0, 0, -0.8, 'top'],
    lr: [20, 0, 0, 0.8, 'top'],
  },
  {
    type: 'percent',
    count: 3.5,
    text: [
      '3&. Collect under body',
      '3&. RF collects to LF',
      '3&. LF collects to RF',
    ],
    ml: [0, 0, 0, 0, 'top'],
    mr: [20, 0, 0, 0, 'top'],
    ll: [20, 0, 0, 0, 'top'],
    lr: [0, 0, 0, 0, 'top'],
  },
];


const closedWingData = [
  {
    count: 0,
    type: 'percent',
    text: [
      'Prepare to move LOD',
      'Begin with weight on left foot',
      'Begin with weight on right foot',
    ],
    ml: [25, 50, 90, 1, 'top'],
    mr: [25, 58, 90, 0.2, 'top'],
    ll: [30, 62, -90, 0.2, 'top'],
    lr: [30, 54, -90, 1, 'top'],
  },
  {
    count: 1,
    type: 'percent',
    text: [
      '1. Moving together towards LOD',
      '1. RF fwd in CBMP (HT), outside partner',
      '1. LF back in CBMP (TH), outside partner',
    ],
    ml: [0, 0, 0, -0.8, 'top'],
    mr: [18, -20, 0, 0.8, 'top'],
    ll: [20, -20, 0, 0.8, 'top'],
    lr: [0, 0, 0, -0.8, 'top'],
  },
  {
    count: 2,
    type: 'percent',
    text: [
      '2. Danced under body',
      '2. LF starts to close to RF',
      '2. RF to side and slightly back (T)',
    ],
    ml: [10, -19, 0, 0, 'top'],
    mr: [0, 0, 0, 0, 'top'],
    ll: [0, 0, 0, -0.8, 'top'],
    lr: [20, -35, 0, 0.8, 'top'],
  },
  {
    count: 3,
    type: 'percent',
    text: [
      '3. Wing position, lady left side outside',
      '3. LF closes to RF without weight',
      '3. LF fwd in CBMP (TH), outside partner on left side',
    ],
    ml: [8, 0, 0, 0, 'top'],
    mr: [0, 0, 0, 0, 'top'],
    ll: [-8, -18, 0, 0.8, 'top'],
    lr: [0, 0, 0, -0.8, 'top'],
  },
];

const turningLockToRightData = [
  {
    type: 'percent',
    count: 0,
    text: [
      'Prepare to move towards DC',
      'Begin with weight on left foot',
      'Begin with weight on right foot',
    ],
    ml: [20, 52, -90, 1, 'top', 'all 2s'],
    mr: [20, 44, -90, 0.2, 'top', 'all 2s'],
    ll: [15, 40, 90, 0.2, 'top', 'all 2s'],
    lr: [15, 48, 90, 1, 'top', 'all 2s'],
  },
  {
    type: 'percent',
    count: 1,
    text: [
      '1. Moving together LOD',
      '1. RF back (T), R side leading',
      '1. LF fwd, (T), L side leading',
    ],
    mr: [20, 15, 22.5, 0.8, 'top'],
    ml: [0, 0, 0, -0.8, 'top'],
    lr: [0, 0, 0, -0.8, 'top'],
    ll: [20, 0, 0, 0.8, 'top'],
  },
  {
    type: 'percent',
    count: 1.5,
    text: [
      '1&. Moving together LOD',
      '1&. RF back (T), R side leading',
      '1&. LF fwd, (T), L side leading',
    ],
    mr: [0, 0, 22.5, -0.8, 'top'],
    ml: [25, -5, 90, 0.8, 'top'],
    lr: [25, 0, 90, 0.8, 'top'],
    ll: [0, 0, 90, -0.8, 'top'],
  },
  {
    type: 'percent',
    count: 2,
    text: [
      '2. Moving together LOD',
      '2. RF back (T), R side leading',
      '2. LF fwd, (T), L side leading',
    ],
    mr: [20, -16, 90, 0.8, 'top'],
    ml: [0, 0, 0, -0.8, 'top'],
    lr: [0, 0, 0, -0.8, 'top'],
    ll: [30, 5, 45, 0.8, 'top'],
  },
  {
    type: 'percent',
    count: 2.5,
    text: [
      '2&. Moving together LOD',
      '2&. RF back (T), R side leading',
      '2&. LF fwd, (T), L side leading',
    ],
    mr: [3, -3, 45, 0, 'top'],
    ml: [20, -13, 90, 0, 'top'],
    lr: [32, -6, 180, 0, 'top', 'left 2s, top 2s cubic-bezier(0.175, 0.885, 0.32, 2.575), opacity 2s, transform 2s'],
    ll: [0, 0, 135, 0, 'top'],
  },
  {
    type: 'percent',
    count: 3,
    text: [
      '3. Moving together LOD',
      '3. RF back (T), R side leading',
      '3. LF fwd, (T), L side leading',
    ],
    mr: [0, 0, 0, -0.8, 'top'],
    ml: [15, -15, 0, 0.8, 'top'],
    lr: [15, -15, 0, 0.8, 'top'],
    ll: [0, 0, 0, -0.8, 'top'],
  },
  {
    type: 'percent',
    count: 3.5,
    text: [
      '3&. Collect under body',
      '3&. RF collects to LF',
      '3&. LF collects to RF',
    ],
    mr: [15, -15, 0, 0, 'top'],
    ml: [0, 0, 0, 0, 'top'],
    lr: [0, 0, 0, 0, 'top'],
    ll: [15, -15, 0, 0, 'top'],
  },
];

const fallawaySlipPivotData = [
  {
    type: 'percent',
    count: 0,
    text: [
      'Prepare to move towards DC',
      'Begin with weight on right foot',
      'Begin with weight on left foot',
    ],
    ml: [10, 70, 45, 0.2, 'top'],
    mr: [15, 75, 45, 1, 'top'],
    ll: [20, 75, 225, 1, 'top'],
    lr: [15, 70, 225, 0.2, 'top'],
  },
  {
    type: 'percent',
    count: 1,
    text: [
      '1. Moving together towards DC',
      '1. LF fwd (HT)',
      '1. RF back (TH)',
    ],
    ml: [10, -20, -45, 0.8, 'top'],
    mr: [0, 0, 0, -0.8, 'top'],
    ll: [0, 0, 0, -0.8, 'top'],
    lr: [10, -22, -45, 0.8, 'top'],
  },
  {
    type: 'percent',
    count: 1.5,
    text: [
      '1&. Moving together towards DC',
      '1&. RF back, R side leading (T)',
      '1&. LF back, L side leading (T)',
    ],
    ml: [0, 0, -45, -0.8, 'top'],
    mr: [25, -25, -135, 0.8, 'top'],
    ll: [20, -30, -45, 0.8, 'top'],
    lr: [0, 0, 45, -0.8, 'top'],
  },
  {
    type: 'percent',
    count: 2,
    text: [
      '2. Moving together towards DC',
      '2. LF back in CBMP (TH slip pivot)',
      '2. RF back in CBMP, small step (T)',
    ],
    ml: [40, -5, -90, 0.8, 'top', 'left 2s, top 2s cubic-bezier(.6,-2.41,.57,.58), opacity 2s, transform 2s'],
    mr: [0, 0, 0, -0.8, 'top'],
    ll: [0, 0, 0, -0.8, 'top'],
    lr: [25, -10, -90, 0.8, 'top'],
  },
  {
    type: 'percent',
    count: 3,
    text: [
      '3. Moving together towards DC',
      '3. RF back, LF held in CBMP (toe pivot)',
      '3. LF fwd in CBMP, RF held behind in CBMP (toe pivot)',
    ],
    ml: [0, 0, 0, -0.8, 'top'],
    mr: [20, -30, -112.5, 0.8, 'top'],
    ll: [22, -20, -180, 0.8, 'top'],
    lr: [0, 0, -90, -0.8, 'top'],
  },
  {
    type: 'percent',
    count: 3.5,
    text: [
      '3&. Moving together towards DC',
      '3&. RF back, LF held in CBMP (toe pivot)',
      '3&. LF fwd in CBMP, RF held behind in CBMP (toe pivot)',
    ],
    ml: [20, -27, -135, 0, 'top'],
    mr: [0, 0, -67.5, 0, 'top'],
    ll: [0, 0, -90, 0, 'top'],
    lr: [32, -15, -135, 0, 'top'],
  },
];

const hoverCorteData = [
  {
    type: 'percent',
    count: 0,
    text: [
      'Prepare to move towards LOD',
      'Begin with weight on left foot',
      'Begin with weight on right foot',
    ],
    ml: [20, 52, -90, 1, 'top', 'all 2s'],
    mr: [20, 44, -90, 0.2, 'top', 'all 2s'],
    ll: [15, 40, 90, 0.2, 'top', 'all 2s'],
    lr: [15, 48, 90, 1, 'top', 'all 2s'],
  },
  {
    type: 'percent',
    count: 1,
    text: [
      '1. Moving together towards LOD',
      '1. RF back (TH)',
      '1. LF fwd (HT)',
    ],
    mr: [20, -5, -22.5, 0.8, 'top'],
    ml: [0, 0, 0, -0.8, 'top'],
    lr: [0, 0, 0, -0.8, 'top'],
    ll: [20, 0, 0, 0.8, 'top'],
  },
  {
    type: 'percent',
    count: 2,
    text: [
      '2. Moving together towards LOD',
      '2. LF to side & slightly fwd (T)',
      '2. RF to side & slightly fwd (T)',
    ],
    ml: [50, -12, -135, 0.8, 'top', 'left 2s, top 1.5s ease-in, opacity 2s, transform 2s'],
    mr: [0, 0, -22.5, -0.8, 'top'],
    ll: [0, 0, -90, -0.8, 'top'],
    lr: [55, -3, -90, 0.8, 'top', 'left 2s, top 1.5s ease-in, opacity 2s, transform 2s'],
  },
  {
    type: 'percent',
    count: 2.5,
    text: [
      '2&. Hover and shape',
      '2&. Weight on LF',
      '2&. Brush RF to LF',
    ],
    ml: [0, 0, 0, 0, 'top', 'all 2s'],
    mr: [25, 5, -90, 0, 'top', 'all 2s'],
    ll: [30, 9, -45, 0, 'top', 'all 2s'],
    lr: [0, 0, -45, 0, 'top', 'all 2s'],
  },
  {
    type: 'percent',
    count: 3,
    text: [
      '3. Moving Backing DC',
      '3. Transfer weight to RF (T)',
      '3. LF diag fwd (TH)',
    ],
    ml: [0, 0, 0, -0.8, 'top', 'all 2s'],
    mr: [-20, -20, 0, 0.8, 'top', 'all 2s'],
    ll: [-20, -20, 0, 0.8, 'top', 'all 2s'],
    lr: [0, 0, 0, -0.8, 'top', 'all 2s'],
  },
  {
    type: 'percent',
    count: 3,
    text: [
      '3&. Collecting weight under body',
      '3&. Collect LF and lower end of 3',
      '3&. Collect RF and lower end of 3',
    ],
    ml: [-20, -20, 0, 0, 'top', 'all 2s'],
    mr: [0, 0, 0, 0, 'top', 'all 2s'],
    ll: [0, 0, 0, 0, 'top', 'all 2s'],
    lr: [-20, -20, 0, 0, 'top', 'all 2s'],
  },
];

const dataTemplates = [
  {
    type: 'percent',
    count: 0,
    text: [
      'Prepare to move towards DC',
      'Begin with weight on left foot',
      'Begin with weight on right foot',
    ],
  // Top to bottom is roughly 8,-21
  // Bottom Left
  ml: [10, 60, 45, 0.2, 'top'],
  mr: [15, 65, 45, 1, 'top'],
  ll: [20, 65, 225, 1, 'top'],
  lr: [15, 60, 225, 0.2, 'top'],
  },
  {
  // Blank
  ml: [0, 0, 0, 0, 'top'],
  mr: [0, 0, 0, 0, 'top'],
  ll: [0, 0, 0, 0, 'top'],
  lr: [0, 0, 0, 0, 'top'],
  },
];

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
  new Figure('Reverse Pivot', 'Waltz', 'Bronze', 'Standard', reversePivotData),
  new Figure('Back Lock', 'Waltz', 'Bronze', 'Standard', backLockData),
  new Figure('Chasse to Right', 'Waltz', 'Bronze', 'Standard', chasse_to_right_data),

  new Figure('Weave from Promenade', 'Waltz', 'Silver', 'Standard', weaveFromPromenadeData),
  new Figure('Closed Telemark', 'Waltz', 'Silver', 'Standard', closedTelemarkData),
  new Figure('Open Telemark', 'Waltz', 'Silver', 'Standard', openTelemarkData),
  new Figure('Open Impetus', 'Waltz', 'Silver', 'Standard', openImpetusData),
  new Figure('Cross Hesitation', 'Silver', 'Silver', 'Standard', crossHesitationData),
  new Figure('Wing', 'Waltz', 'Silver', 'Standard', wingData),
  new Figure('Outside Spin', 'Waltz', 'Silver', 'Standard', outsideSpinData),
  new Figure('Turning Lock to Left', 'Waltz', 'Silver', 'Standard', turningLocktoLeftData),
  new Figure('Drag Hesitation', 'Waltz', 'Silver', 'Standard', dragHesitationData),

  new Figure('Left Whisk', 'Waltz', 'Gold', 'Standard', leftWhiskData),
  new Figure('Contra Check', 'Waltz', 'Gold', 'Standard', contraCheckData),
  new Figure('Closed Wing', 'Waltz', 'Gold', 'Standard', closedWingData),
  new Figure('Turning Lock to Right', 'Waltz', 'Gold', 'Standard', turningLockToRightData),
  new Figure('Fallaway Reverse Slip Pivot', 'Waltz', 'Gold', 'Standard', fallawaySlipPivotData),
  new Figure('Hover Corte', 'Waltz', 'Gold', 'Standard', hoverCorteData),
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
