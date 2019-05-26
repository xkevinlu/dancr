const quarter_turn_data = [
    {
        text: [
          'Begin man facing and lady backing DW',
          'Begin with weight on left foot',
          'Begin with weight on right foot',
          // 'Prepare to move towards DW',
          // 'Begin with weight on left foot',
          // 'Begin with weight on right foot',
        ],
        ml: [75, 10, 135, 1, 'center', 'all 1.5s ease-in', ''],
        mr: [68, 65, 135, 0.2, 'top', 'all 1.5s ease-in', ''],
        ll: [85, 75, -45, 0.2, 'center', 'all 1.5s ease-in', ''],
        lr: [105, 55, -45, 1, 'center', 'all 1.5s ease-in', ''],
    },
    {
        text: [
          'slow',
          // 'slow. Moving together towards DW',
          '1. RF fwd (HT),  commence to rise end of 1',
          '1. LF back (TH),  commence to rise end of 1 , NFR',
        ],
        ml: [0, 0, 0, -0.8, 'center', 'all 1.2s ease-in', ''],
        mr: [50, 50, 0, 0.8, 'top', 'all 1.2s ease-in', 'HT'],
        ll: [30, 45, 0, 0.8, 'center', 'all 1.2s ease-in', 'TH'],
        lr: [0, 0, 0, -0.8, 'center', 'all 1.2s ease-in', ''],
  },
  {
        text: [
          'first quick',
          // 'first quick. Moving together on LOD',
          'first quick. LF to side (T),  cont. to rise',
          'first quick. RF to side (T),  cont. to rise',
        ],
        ml: [155, 50, 90, 0.8, 'center', 'all 1.2s cubic-bezier(0.55, 0.085, 0.68, 0.53)', 'T'],
        mr: [0, 0, 90, -0.8, 'top', 'all 1.2s ease, transform 0.7s 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53)'],
        ll: [0, 0, 0, -0.8],
        lr: [130, 45, 90, 0.8, 'center', 'all 1.2s cubic-bezier(0.55, 0.085, 0.68, 0.53)', 'T'],
  },
  {
        text: [
          'second quick',
          // 'second quick. close feet for chasse and switch weight to R',
          'second quick. RF closes to LF (T),  chasse',
          'second quick. LF closes to RF (T),  chasse',
        ],
        ml: [0, 0, 0, -0.8, 'center', 'all 1.5s'],
        mr: [55, 0, 0, 0.8, 'top', 'all 2s ease', 'T&H'],
        ll: [50, 0, 90, 0.8, 'center', 'all 2s ease', 'T&H'],
        lr: [0, 0, 0, -0.8],
  },  
  {
        text: [
          'last slow',
          // 'last slow. LF goes DC, RF on toe',
          'last slow. LF goes back DC. RF still on toe',
          'last slow. RF goes forwards DC,  LF still on toe',
        ],
        ml: [50, -50, 0, 0.8, 'center', 'all 1.5s', 'T&H'],
        mr: [0, 0, 0, -0.4, 'center', 'all 2s ease'],
        ll: [0, 0, 0, -0.4, 'center', 'all 2s ease'],
        lr: [30, -45, 0, 0.8],
  },  
  {
        text: [
          'collect',
          // 'last slow. LF goes DC, RF on toe',
          'collect. RF goes beside LF. Weight on LF',
          'collect. LF goes beside RF. Weight on RF',
        ],
        ml: [0, 0, 0, 0.8, 'center', 'all 1.5s'],
        mr: [50, -50, 0, -0.4, 'top', 'all 2s ease', 'T&H'],
        ll: [30, -45, 0, -0.4, 'center', 'all 2s ease', 'T&H'],
        lr: [0, 0, 0, -0.8],
  },    
        
]


const quickstep_all_figures = [
    new Figure("Quarter Turn to Right", "Quickstep", "Newcomer", "Standard", quarter_turn_data),
    new Figure("Natural Turn", "Quickstep", "Newcomer", "Standard", natural_turn_data),
    new Figure("Natural Turn with Hesitation", "Quickstep", "Newcomer", "Standard", natural_turn_data),
    new Figure("Natural Pivot Turn", "Quickstep", "Newcomer", "Standard", natural_turn_data),
    new Figure("Natural Spin Turn", "Quickstep", "Newcomer", "Standard", natural_turn_data),
    new Figure("Progressive Chasse", "Quickstep", "Newcomer", "Standard", natural_turn_data),
    new Figure("Forward Lock", "Quickstep", "Newcomer", "Standard", natural_turn_data),

    new Figure("Closed Impetus", "Quickstep", "Bronze", "Standard", natural_turn_data),
    new Figure("Back Lock", "Quickstep", "Bronze", "Standard", natural_turn_data),
    new Figure("Reverse Pivot", "Quickstep", "Bronze", "Standard", natural_turn_data),
    new Figure("Progressive Chasse to Right", "Quickstep", "Bronze", "Standard", natural_turn_data),
    new Figure("Tipple Chasse to Right", "Quickstep", "Bronze", "Standard", natural_turn_data),
    new Figure("Running Finish", "Quickstep", "Bronze", "Standard", natural_turn_data),
    new Figure("Double Reverse Spin", "Quickstep", "Bronze", "Standard", natural_turn_data),
    new Figure("Cross Chasse", "Quickstep", "Bronze", "Standard", natural_turn_data),
    new Figure("Change of Direction", "Quickstep", "Bronze", "Standard", natural_turn_data),

    new Figure("Quick Open Reverse", "Quickstep", "Silver", "Standard", natural_turn_data),
    new Figure("Fishtail", "Quickstep", "Silver", "Standard", natural_turn_data),
    new Figure("Running Right Turn", "Quickstep", "Silver", "Standard", natural_turn_data),
    new Figure("Four Quick Run", "Quickstep", "Silver", "Standard", natural_turn_data),
    new Figure("V6", "Quickstep", "Silver", "Standard", natural_turn_data),
    new Figure("Closed Telemark", "Quickstep", "Silver", "Standard", natural_turn_data),

    new Figure("Cross Swivel", "Quickstep", "Gold", "Standard", natural_turn_data),
    new Figure("Six Quick Run", "Quickstep", "Gold", "Standard", natural_turn_data),
    new Figure("Rumba Cross", "Quickstep", "Gold", "Standard", natural_turn_data),
    new Figure("Tipsy to Right", "Quickstep", "Gold", "Standard", natural_turn_data),
    new Figure("Tipsy to Left", "Quickstep", "Gold", "Standard", natural_turn_data),
    new Figure("Hover Corte", "Quickstep", "Gold", "Standard", natural_turn_data)

]
