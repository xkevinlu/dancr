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

const waltz_all_figures = [
  new Figure('Natural Turn', 'Waltz', 'Newcomer', 'Standard', natural_turn_data),
  new Figure('Spin Turn (Underturned)', 'Waltz', 'Newcomer', 'Standard', spin_turn_data),
  new Figure('Reverse Turn', 'Waltz', 'Newcomer', 'Standard', reverse_turn_data),
  new Figure('RF Closed Change', 'Waltz', 'Newcomer', 'Standard', rf_closed_change_data),
  new Figure('LF Closed Change', 'Waltz', 'Newcomer', 'Standard', lf_closed_change_data),
  new Figure('Whisk', 'Waltz', 'Newcomer', 'Standard', whisk_data),
  new Figure('Chasse from Promenade', 'Waltz', 'Newcomer', 'Standard', chasse_from_promenade_data),
  new Figure('Prep Step', 'Waltz', 'Newcomer', 'Standard', prep_step_data),

  new Figure('Closed Impetus', 'Waltz', 'Bronze', 'Standard', chasse_to_right_data),
  new Figure('Hesitation Change', 'Waltz', 'Bronze', 'Standard', chasse_to_right_data),
  new Figure('Outside Change', 'Waltz', 'Bronze', 'Standard', chasse_to_right_data),
  new Figure('Reverse Corte', 'Waltz', 'Bronze', 'Standard', chasse_to_right_data),
  new Figure('Back Whisk', 'Waltz', 'Bronze', 'Standard', chasse_to_right_data),
  new Figure('Basic Weave', 'Waltz', 'Bronze', 'Standard', chasse_to_right_data),
  new Figure('Double Reverse Spin', 'Waltz', 'Bronze', 'Standard', chasse_to_right_data),
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
