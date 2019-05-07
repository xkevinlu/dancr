class Figure {
    constructor(name, dance, level, style, data) {
        this.name = name;
        this.dance = dance;
        this.level = level;
        this.style = style;
        this.data = data;
    }
}

var foot_width = 20;
var large_step = 100;
var small_step = 80;

const rf_closed_change_data = [
  {
    text:[
      "Prepare to move towards DC",
      "Begin with weight on left foot",
      "Begin with weight on right foot"
    ],
    ml: [54,209,45,0.3],
    mr: [84,234,45,1],
    ll: [154,190,225,1],
    lr: [120,165,225,0.3]
  }
]

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
    ml: [75,10,135,0.3],
    mr: [95,90,135,1],
    ll: [100,135,-45,1],
    lr: [100,60,-45,0.3]
  },
  {
    text:[
      "2. Moving together towards LOD",
      "2. LF to side (T), cont. to rise",
      "2. RF to side (T), cont. to rise"
    ],
    ml: [230,180,225,1],
    mr: [110,90,225,0.3],
    ll: [100,135,-45,0.3],
    lr: [170,180,90,1]
  },
  {
    text:[
      "3. Collecting weight under body, change weight end of 3",
      "3. RF closes to LF (T), cont. to rise",
      "3. LF closes to RF (T), cont. to rise"
    ],
    ml: [230,195,270,0.3],
    mr: [230,165,270,1],
    ll: [170,150,90,1],
    lr: [170,180,90,0.3]
  }
];

const spin_turn_data = [
  {
    text:[
      "Prepare to move towards LOD",
      "Begin with weight on right foot",
      "Begin with weight on left foot"
    ],
    ml: [220,250,270,0.3],
    mr: [220,210,270,1],
    ll: [140,190,90,1],
    lr: [140,230,90,0.3]
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
    mr: [297,132,0,1],
    ll: [320,67,180,1],
    lr: [163,67,180,0.3]
  },
  {
    text:[
      "2&. Collecting weight under body",
      "2&. LF closes to RF (T), cont. to rise",
      "2&. RF closes to LF (T), cont. to rise"
    ],
    ml: [285,155,-45,1],
    mr: [320,125,-45,0.3],
    ll: [300,67,135,0.3],
    lr: [265,95,135,1]
  },
  {
    text:[
      "3. Moving together towards LOD",
      "3. RF to side & slightly back (TH), cont. to rise",
      "3. LF to side & slightly forward (TH), cont. to rise"
    ],
    ml: [285,155,-45,0.3],
    mr: [425,122,-45,1],
    ll: [395,62,135,1],
    lr: [265,95,135,0.3]
  },
  {
  text:[
    "3&. Collecting weight under body",
    "3&. Collect LF and lower end of 3",
    "3&. Collect RF and lower end of 3"
  ],
  ml: [390,150,-45,0.3],
  mr: [425,122,-45,1],
  ll: [395,62,135,1],
  lr: [360,90,135,0.3]
  }
];

const natural_turn = new Figure("Natural Turn", "Waltz", "Newcomer", "Standard", natural_turn_data);
const natural_spin_turn = new Figure("Natural Spin Turn", "Waltz", "Newcomer", "Standard", spin_turn_data);
const reverse_turn = new Figure("Reverse Turn", "Waltz", "Newcomer", "Standard", natural_turn_data);
const rf_closed_change = new Figure("RF Closed Change", "Waltz", "Newcomer", "Standard", natural_turn_data);
const lf_closed_change = new Figure("LF Closed Change", "Waltz", "Newcomer", "Standard", natural_turn_data);
const whisk = new Figure("Whisk", "Waltz", "Newcomer", "Standard", natural_turn_data);
const chasse_from_promenade = new Figure("Chasse from Promenade", "Waltz", "Newcomer", "Standard", natural_turn_data);
const prep_step = new Figure("Prep Step", "Waltz", "Newcomer", "Standard", natural_turn_data);

const waltz_newcomer_figures = [natural_turn, natural_spin_turn, reverse_turn, rf_closed_change, lf_closed_change, whisk, chasse_from_promenade, prep_step];

const closed_impetus = new Figure("Closed Impetus", "Waltz", "Bronze", "Standard", chasse_to_right_data);
const hesitation_change = new Figure("Hesitation Change", "Waltz", "Bronze", "Standard", chasse_to_right_data);
const outside_change = new Figure("Outside Change", "Waltz", "Bronze", "Standard", chasse_to_right_data);
const reverse_corte = new Figure("Reverse Corte", "Waltz", "Bronze", "Standard", chasse_to_right_data);
const back_whisk = new Figure("Back Whisk", "Waltz", "Bronze", "Standard", chasse_to_right_data);
const basic_weave = new Figure("Basic Weave", "Waltz", "Bronze", "Standard", chasse_to_right_data);
const double_reverse_spin = new Figure("Double Reverse Spin", "Waltz", "Bronze", "Standard", chasse_to_right_data);
const reverse_pivot = new Figure("Reverse Pivot", "Waltz", "Bronze", "Standard", chasse_to_right_data);
const back_lock = new Figure("Back Lock", "Waltz", "Bronze", "Standard", chasse_to_right_data);
const chasse_to_right = new Figure("Chasse to Right", "Waltz", "Bronze", "Standard", chasse_to_right_data);
const weave_from_promenade = new Figure("Weave from Promenade", "Waltz", "Bronze", "Standard", chasse_to_right_data);
const closed_telemark = new Figure("Closed Telemark", "Waltz", "Bronze", "Standard", chasse_to_right_data);

const waltz_bronze_figures = [closed_impetus, hesitation_change, outside_change, reverse_corte, back_whisk, basic_weave, double_reverse_spin, reverse_pivot, back_lock, chasse_to_right, weave_from_promenade, closed_telemark];

const open_telemark = new Figure("Open Telemark", "Waltz", "Silver", "Standard", chasse_to_right_data);
const open_impetus = new Figure("Open Impetus", "Waltz", "Silver", "Standard", chasse_to_right_data);
const closed_hesitation = new Figure("Closed Hesitation", "Silver", "Bronze", "Standard", chasse_to_right_data);
const wing = new Figure("Wing", "Waltz", "Silver", "Standard", chasse_to_right_data);
const outside_spin = new Figure("Outside Spin", "Waltz", "Silver", "Standard", chasse_to_right_data);
const turning_lock_to_left = new Figure("Turning Lock to Left", "Waltz", "Silver", "Standard", chasse_to_right_data);
const drag_hesitation = new Figure("Drag Hesitation", "Waltz", "Silver", "Standard", chasse_to_right_data);

const waltz_silver_figures = [open_telemark,open_impetus, closed_hesitation, wing, outside_spin, turning_lock_to_left, drag_hesitation];

const left_whisk = new Figure("Left Whisk", "Waltz", "Gold", "Standard", chasse_to_right_data);
const contra_check = new Figure("Contra Check", "Waltz", "Gold", "Standard", chasse_to_right_data);
const closed_wing = new Figure("Closed Wing", "Waltz", "Gold", "Standard", chasse_to_right_data);
const turning_lock_to_right = new Figure("Turning Lock to Right", "Waltz", "Gold", "Standard", chasse_to_right_data);
const fallaway_reverse_slip_pivot = new Figure("Fallaway Reverse Slip Pivot", "Waltz", "Gold", "Standard", chasse_to_right_data);
const hover_corte = new Figure("Hover Corte", "Waltz", "Gold", "Standard", chasse_to_right_data);

const waltz_gold_figures = [left_whisk, contra_check, closed_wing, turning_lock_to_right, fallaway_reverse_slip_pivot, hover_corte];

const waltz_all_figures = waltz_newcomer_figures.concat(waltz_bronze_figures).concat(waltz_silver_figures).concat(waltz_gold_figures);
