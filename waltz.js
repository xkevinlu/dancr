const natural_turn_data = [
  {
    text:[
      "Prepare to move towards DW",
      "Begin with weight on left foot",
      "Begin with weight on right foot"
    ],
    ml: [75,10,135,1],
    mr: [45,40,135,0.3],
    ll: [70,90,-45,0.3],
    lr: [100,60,-45,1]
  },
  {
    text:[
      "1. Moving together towards DW",
      "1. RF fwd (HT), commence to rise end of 1",
      "1. LF back (TH), commence to rise end of 1 ,NFR"
    ],
    ml: [0,0,0,f_off],
    mr: [50,50,0,f_on],
    ll: [30,45,0,f_on],
    lr: [0,0,0,f_off]
  },
  {
    text:[
      "2. Moving together towards LOD",
      "2. LF to side (T), cont. to rise",
      "2. RF to side (T), cont. to rise"
    ],
    ml: [155,170,90,f_on],
    mr: [25,0,90,f_off],
    ll: [0,0,0,f_off],
    lr: [70,120,135,f_on],
  },
  {
    text:[
      "3. Collecting weight under body, change weight end of 3",
      "3. RF closes to LF (T), cont. to rise",
      "3. LF closes to RF (T), cont. to rise"
    ],
    ml: [0,15,45,f_off],
    mr: [110,75,45,f_on],
    ll: [70,15,135,f_on],
    lr: [0,0,0,f_off]
  }
];

const spin_turn_data = [
  {
    text:[
      "Prepare to move towards LOD",
      "Begin with weight on right foot",
      "Begin with weight on left foot"
    ],
    ml: [120,150,270,0.3],
    mr: [120,120,270,1],
    ll: [60,105,90,1],
    lr: [60,135,90,0.3]
  },
  {
    text:[
      "1. Moving together towards LOD",
      "1. LF back & slightly to side with Pivot (THT), toe turned in",
      "1. RF forward with Pivot (HT)"
    ],
    ml: [300,260,280,1],
    mr: [220,210,270,0.3],
    ll: [140,190,90,0.3],
    lr: [250,230,90,1]
  },
  {
    text:[
      "2. Moving together towards LOD",
      "2. RF fwd in CBMP (HT), rise end of 2",
      "2. LF back & slightly to side (T), then brush RF to LF"
    ],
    ml: [300,260,450,0.3],
    mr: [220,210,270,1],
    ll: [140,190,90,1],
    lr: [250,230,90,0.3]
  },
  {
    text:[
      "3. Collecting weight under body",
      "3. LF to side & slightly back (TH)",
      "3. RF diag fwd (TH)"
    ],
    ml: [250,280,270,1],
    mr: [250,240,270,0.3],
    ll: [170,220,90,0.3],
    lr: [170,260,90,1]
  },
  {
  text:[
    "3&. Collecting weight under body",
    "3&. Collect RF and lower end of 3",
    "3&. Collect LF and lower end of 3"
  ],
  ml: [250,280,270,0.3],
  mr: [250,240,270,1],
  ll: [170,220,90,1],
  lr: [170,260,90,0.3]
  }
];

const rf_closed_change_data = [
  {
    text:[
      "Prepare to move towards DC",
      "Begin with weight on left foot",
      "Begin with weight on right foot"
    ],
    ml: [50,200,45,1],
    mr: [80,230,45,0.3],
    ll: [140,200,225,0.3],
    lr: [110,170,225,1]
  },
  {
    text:[
      "Move towards DC",
      "Begin with weight on left foot",
      "Begin with weight on right foot"
    ],
    ml: [0,0,0,f_off],
    mr: [lg_step,-lg_step,0,f_on],
    ll: [lg_step,-lg_step,0,f_on],
    lr: [0,0,0,f_off]
  },
  {
    text:[
      "Collect feet under body",
      "Begin with weight on left foot",
      "Begin with weight on right foot"
    ],
    ml: [lg_step,-lg_step,0,0],
    mr: [0,0,0,0],
    ll: [0,0,0,0],
    lr: [lg_step,-lg_step,0,0]
  },
  {
    text:[
    "Moving side",
    "2. LF side (T)",
    "2. RF side (T)"
    ],
    ml: [-md_step,-md_step,0,f_on],
    mr: [0,0,0,f_off],
    ll: [0,0,0,f_off],
    lr: [-md_step,-md_step,0,f_on]
  },
  {
    text:[
    "Collect feet under",
    "3. RF close to LF (T)",
    "3. LF close to RF (T)"
    ],
    ml: [0,0,0,f_off],
    mr: [-md_step,-md_step,0,f_on],
    ll: [-md_step,-md_step,0,f_on],
    lr: [0,0,0,f_off]
  },
];

const lf_closed_change_data = [
  {
    text:[
      "Prepare to move towards DW",
      "Begin with weight on left foot",
      "Begin with weight on right foot"
    ],
    ml: [75,10,135,0.3],
    mr: [45,40,135,1],
    ll: [70,90,-45,1],
    lr: [100,60,-45,0.3]
  },
  {
    text:[
      "Move towards DW",
      "1. LF forward (HT)",
      "1. RF Back (TH)"
    ],
    ml: [lg_step,lg_step,0,f_on],
    mr: [0,0,0,f_off],
    ll: [0,0,0,f_off],
    lr: [lg_step,lg_step,0,f_on]
  },
  {
    text:[
      "Collect feet under body",
      "1&. RF close to LF",
      "1&. LF close to RF"
    ],
    ml: [0,0,0,0],
    mr: [lg_step,lg_step,0,0],
    ll: [lg_step,lg_step,0,0],
    lr: [0,0,0,0],

  },
  {
    text:[
    "Moving side",
    "2. LF side (T)",
    "2. RF side (T)"
    ],
    ml: [0,0,0,f_off],
    mr: [-md_step,md_step,0,f_on],
    ll: [-md_step,md_step,0,f_on],
    lr: [0,0,0,f_off]
  },
  {
    text:[
    "Collect feet under",
    "3. RF close to LF (TH), lower end of 3",
    "3. LF close to RF (TH), lower end of 3"
    ],
    ml: [-md_step,md_step,0,f_on],
    mr: [0,0,0,f_off],
    ll: [0,0,0,f_off],
    lr: [-md_step,md_step,0,f_on],
  },
];

const chasse_to_right_data = [
  {
    text:[
      "Prepare to move towards DC",
      "Begin with weight on right foot",
      "Begin with weight on left foot"
    ],
    ml: [54,209,45,0.3],
    mr: [84,234,45,1],
    ll: [154,190,225,1],
    lr: [120,165,225,0.3]
  },
  {
    text:[
      "1. Moving together towards DC",
      "1. LF fwd (HT), commence to rise end of 1",
      "1. RF back (TH), commence to rise end of 1 ,NFR"
    ],
    ml: [123,132,0,1],
    mr: [84,234,45,0.3],
    ll: [154,190,225,0.3],
    lr: [163,67,180,1]
  },
  {
    text:[
      "2. Moving together towards LOD",
      "2. RF to side (T), cont. to rise",
      "2. LF to side (T), cont. to rise"
    ],
    ml: [123,132,0,0.3],
    mr: [260,132,0,1],
    ll: [270,67,180,1],
    lr: [163,67,180,0.3]
  },
  {
    text:[
      "2&. Collecting weight under body",
      "2&. LF closes to RF (T), cont. to rise",
      "2&. RF closes to LF (T), cont. to rise"
    ],
    ml: [235,145,-45,1],
    mr: [260,125,-45,0.3],
    ll: [250,75,135,0.3],
    lr: [220,95,135,1]
  },
  {
    text:[
      "3. Moving together towards LOD",
      "3. RF to side & slightly back (TH), cont. to rise",
      "3. LF to side & slightly forward (TH), cont. to rise"
    ],
    ml: [235,145,-45,0.3],
    mr: [330,125,-45,1],
    ll: [330,75,135,1],
    lr: [220,95,135,0.3]
  },
  {
  text:[
    "3&. Collecting weight under body",
    "3&. Collect LF and lower end of 3",
    "3&. Collect RF and lower end of 3"
  ],
  ml: [310,145,-45,0.3],
  mr: [340,125,-45,1],
  ll: [330,75,135,1],
  lr: [300,95,135,0.3]
  }
];

var waltz_all_figures =  [
  new Figure("Natural Turn", "Waltz", "Newcomer", "Standard", natural_turn_data),
  new Figure("Spin Turn", "Waltz", "Newcomer", "Standard", spin_turn_data),
  new Figure("Reverse Turn", "Waltz", "Newcomer", "Standard", natural_turn_data),
  new Figure("RF Closed Change", "Waltz", "Newcomer", "Standard", rf_closed_change_data),
  new Figure("LF Closed Change", "Waltz", "Newcomer", "Standard", lf_closed_change_data),
  new Figure("Whisk", "Waltz", "Newcomer", "Standard", natural_turn_data),
  new Figure("Chasse from Promenade", "Waltz", "Newcomer", "Standard", natural_turn_data),
  new Figure("Prep Step", "Waltz", "Newcomer", "Standard", natural_turn_data),

  new Figure("Closed Impetus", "Waltz", "Bronze", "Standard", chasse_to_right_data),
  new Figure("Hesitation Change", "Waltz", "Bronze", "Standard", chasse_to_right_data),
  new Figure("Outside Change", "Waltz", "Bronze", "Standard", chasse_to_right_data),
  new Figure("Reverse Corte", "Waltz", "Bronze", "Standard", chasse_to_right_data),
  new Figure("Back Whisk", "Waltz", "Bronze", "Standard", chasse_to_right_data),
  new Figure("Basic Weave", "Waltz", "Bronze", "Standard", chasse_to_right_data),
  new Figure("Double Reverse Spin", "Waltz", "Bronze", "Standard", chasse_to_right_data),
  new Figure("Reverse Pivot", "Waltz", "Bronze", "Standard", chasse_to_right_data),
  new Figure("Back Lock", "Waltz", "Bronze", "Standard", chasse_to_right_data),
  new Figure("Chasse to Right", "Waltz", "Bronze", "Standard", chasse_to_right_data),
  new Figure("Weave from Promenade", "Waltz", "Bronze", "Standard", chasse_to_right_data),
  new Figure("Closed Telemark", "Waltz", "Bronze", "Standard", chasse_to_right_data),

  new Figure("Open Telemark", "Waltz", "Silver", "Standard", chasse_to_right_data),
  new Figure("Open Impetus", "Waltz", "Silver", "Standard", chasse_to_right_data),
  new Figure("Closed Hesitation", "Silver", "Bronze", "Standard", chasse_to_right_data),
  new Figure("Wing", "Waltz", "Silver", "Standard", chasse_to_right_data),
  new Figure("Outside Spin", "Waltz", "Silver", "Standard", chasse_to_right_data),
  new Figure("Turning Lock to Left", "Waltz", "Silver", "Standard", chasse_to_right_data),
  new Figure("Drag Hesitation", "Waltz", "Silver", "Standard", chasse_to_right_data),

  new Figure("Left Whisk", "Waltz", "Gold", "Standard", chasse_to_right_data),
  new Figure("Contra Check", "Waltz", "Gold", "Standard", chasse_to_right_data),
  new Figure("Closed Wing", "Waltz", "Gold", "Standard", chasse_to_right_data),
  new Figure("Turning Lock to Right", "Waltz", "Gold", "Standard", chasse_to_right_data),
  new Figure("Fallaway Reverse Slip Pivot", "Waltz", "Gold", "Standard", chasse_to_right_data),
  new Figure("Hover Corte", "Waltz", "Gold", "Standard", chasse_to_right_data),
]

waltz_all_figures[0].preceding_figures= [
  waltz_all_figures[4],
];
waltz_all_figures[0].following_figures= [
  waltz_all_figures[1],
];

waltz_all_figures[1].preceding_figures= [
  waltz_all_figures[0],
];
waltz_all_figures[1].following_figures= [
  waltz_all_figures[3],
];

waltz_all_figures[4].preceding_figures= [
  waltz_all_figures[3],
];
waltz_all_figures[4].following_figures= [
  waltz_all_figures[0],
];
