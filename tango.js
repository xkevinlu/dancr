const left_foot_walk_data = [
  {
    text:[
      "Prepare to move towards DW",
      "Begin with weight on right foot",
      "Begin with weight on left foot"
    ],
    ml: [75,50,150,0.3],
    mr: [45,40,135,1],
    ll: [50,90,-30,1],
    lr: [80,90,-45,0.3]
  },
  {
    text:[
      "1. Moving together towards DW",
      "1. LF fwd (HT) in CBMP, no rise",
      "1. RF back (TH) in CBMP, no rise"
    ],
    ml: [md_step,md_step,-22.5,0.7],
    mr: [0,0,0,-0.7],
    ll: [0,0,0,-0.7],
    lr: [lg_step,md_step,-22.5,0.7]
  },
  {
    text:[
      "2. Moving together towards LOD",
      "2. LF to side (T), cont. to rise",
      "2. RF to side (T), cont. to rise"
    ],
    ml: [0,0,0,0],
    mr: [md_step+5,lg_step+5,-22.5,0],
    ll: [lg_step,lg_step,-22.5,0],
    lr: [0,0,0,0],
  }
];


const tango_all_figures = [
    new Figure("Left Foot Walk", "Tango", "Newcomer", "Standard", left_foot_walk_data),
    new Figure("Right Foot Walk", "Tango", "Newcomer", "Standard", natural_turn_data),
    new Figure("Progressive Side Step", "Tango", "Newcomer", "Standard", natural_turn_data),
    new Figure("Point to PP", "Tango", "Newcomer", "Standard", natural_turn_data),
    new Figure("Progressive Link", "Tango", "Newcomer", "Standard", natural_turn_data),
    new Figure("Closed Promenade", "Tango", "Newcomer", "Standard", natural_turn_data),
    new Figure("Rock Turn", "Tango", "Newcomer", "Standard", natural_turn_data),
    new Figure("Open Reverse Turn", "Tango", "Newcomer", "Standard", natural_turn_data),
    new Figure("Back Corte", "Tango", "Newcomer", "Standard", natural_turn_data),

    new Figure("Open Promenade", "Tango", "Bronze", "Standard", natural_turn_data),
    new Figure("Progressive Side Step Reverse Turn", "Tango", "Bronze", "Standard", natural_turn_data),
    new Figure("Left Foot Rock", "Tango", "Bronze", "Standard", natural_turn_data),
    new Figure("Right Foot Rock", "Tango", "Bronze", "Standard", natural_turn_data),
    new Figure("Natural Twist Turn", "Tango", "Bronze", "Standard", natural_turn_data),
    new Figure("Natural Promenade Turn", "Tango", "Bronze", "Standard", natural_turn_data),

    new Figure("Promenade Link", "Tango", "Silver", "Standard", natural_turn_data),
    new Figure("Four Step", "Tango", "Silver", "Standard", natural_turn_data),
    new Figure("Back Open Promenade", "Tango", "Silver", "Standard", natural_turn_data),
    new Figure("Outside Swivel", "Tango", "Silver", "Standard", natural_turn_data),
    new Figure("Reverse Outside Swivel", "Tango", "Silver", "Standard", natural_turn_data),
    new Figure("Fallaway Promenade", "Tango", "Silver", "Standard", natural_turn_data),
    new Figure("Four Step Change", "Tango", "Silver", "Standard", natural_turn_data),
    new Figure("Brush Tap", "Tango", "Silver", "Standard", natural_turn_data),

    new Figure("Fallaway Four Step", "Tango", "Gold", "Standard", natural_turn_data),
    new Figure("Oversway", "Tango", "Gold", "Standard", natural_turn_data),
    new Figure("Basic Reverse Turn (Viennese Cross)", "Tango", "Gold", "Standard", natural_turn_data),
    new Figure("The Chase", "Tango", "Gold", "Standard", natural_turn_data),
    new Figure("Fallaway Reverse & Slip Pivot", "Tango", "Gold", "Standard", natural_turn_data),
    new Figure("Five Step", "Tango", "Gold", "Standard", natural_turn_data),
    new Figure("Overturned Five Step", "Tango", "Gold", "Standard", natural_turn_data),
    new Figure("Contra Check", "Tango", "Gold", "Standard", natural_turn_data)

]
