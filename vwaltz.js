const vnatural_turn_123_data = [
  {
    type:"percent",
    text:[
      "Prepare to move towards LOD",
      "Begin with weight on left foot",
      "Begin with weight on right foot"
    ],
    ml: [15,40,dc,1,"top"],
    mr: [20,45,dc,0.3,"top", "all 2s"],
    ll: [25,45,bdc,0.3,"top"],
    lr: [20,40,bdc,1,"top"]
  },
  {
    type:"percent",
    text:[
      "1. Moving together towards LOD",
      "1. RF fwd (HT), commence to rise end of 1",
      "1. LF back (TH), commence to rise end of 1 ,NFR"
    ],
    ml: [0,0,0,f_off,"top"],
    mr: [20,0,45,f_on,"top","all 2s"],
    ll: [15,5,45,f_on,"top"],
    lr: [0,0,0,f_off,"top"]
  },
  {
    type:"percent",
    text:[
      "2. Moving together towards LOD",
      "2. LF to side (T), cont. to rise",
      "2. RF to side (T), cont. to rise"
    ],
    ml: [60,5,135,f_on,"top"],
    mr: [0,0,90,f_off,"top","left 2s, top 2s, opacity 2s, transform 1.5s 0.5s"],
    ll: [0,0,0,f_off,"top"],
    lr: [50,5,180,f_on,"top"],
  },
  {
    type:"percent",
    text:[
      "3. Collecting weight under body, change weight end of 3",
      "3. RF closes to LF (T), cont. to rise",
      "3. LF closes to RF (T), cont. to rise"
    ],
    ml: [0,0,45,f_off,"top"],
    mr: [30,-5,45,f_on,"top"],
    ll: [25,-10,135,f_on,"top"],
    lr: [0,0,0,f_off,"top"]
  }
];

const vnatural_turn_456_data = [
  {
    type:"percent",
    text:[
      "Prepare to move towards LOD",
      "Begin with weight on right foot",
      "Begin with weight on left foot"
    ],
    ml: [25,45,bdc,0.3,"top"],
    mr: [20,40,bdc,1,"top"],
    ll: [15,40,dc+360,1,"top"],
    lr: [20,45,dc+360,0.3,"top","all 2s"],
  },
  {
    type:"percent",
    text:[
      "1. Moving together towards LOD",
      "1. LF back (TH), commence to rise end of 1 ,NFR",
      "1. RF fwd (HT), commence to rise end of 1"
    ],
    ml: [15,5,45,f_on,"top"],
    mr: [0,0,0,f_off,"top"],
    ll: [0,0,0,f_off,"top"],
    lr: [20,0,45,f_on,"top"]
  },
  {
    type:"percent",
    text:[
      "2. Moving together towards LOD",
      "2. RF to side (T), cont. to rise",
      "2. LF to side (T), cont. to rise"
    ],
    ml: [0,0,0,f_off,"top"],
    mr: [50,5,180,f_on,"top"],
    ll: [60,5,135,f_on,"top"],
    lr: [0,0,90,f_off,"top","left 2s, top 2s, opacity 2s, transform 1.5s 0.5s"]
  },
  {
    type:"percent",
    text:[
      "3. Collecting weight under body, change weight end of 3",
      "3. LF closes to RF (T)",
      "3. RF closes to LF (T)"
    ],
    ml: [25,-10,135,f_on,"top"],
    mr: [0,0,0,f_off,"top"],
    ll: [0,0,45,f_off,"top"],
    lr: [30,-5,45,f_on,"top"]
  }
];

const vreverse_turn_123_data = [
  {
    type:"percent",
    text:[
      "Prepare to move towards LOD",
      "Begin with weight on left foot",
      "Begin with weight on right foot"
    ],
    ml: [10,45,bdw,1,"top"],
    mr: [15,40,bdw,0.3,"top", "all 2s"],
    ll: [17,35,dw,0.3,"top","all 2s"],
    lr: [12,40,dw,1,"top"]
  },
  {
    type:"percent",
    text:[
      "1. Moving together towards LOD",
      "1. RF fwd (HT), commence to rise end of 1",
      "1. LF back (TH), commence to rise end of 1 ,NFR"
    ],
    ml: [0,0,0,f_off,"top"],
    mr: [20,-10,-45,f_on,"top"],
    ll: [18,0,-45,f_on,"top"],
    lr: [0,0,0,f_off,"top"]
  },
  {
    type:"percent",
    text:[
      "2. Moving together towards LOD",
      "2. LF to side (T), cont. to rise",
      "2. RF to side (T), cont. to rise"
    ],
    ml: [55,-15,-180,f_on,"top"],
    mr: [0,0,-90,f_off,"top","left 2s, top 2s, opacity 2s, transform 1.5s 0.5s"],
    ll: [0,0,-90,f_off,"top","left 2s, top 2s, opacity 2s, transform 1.5s 0.5s"],
    lr: [47,2,-135,f_on,"top"],
  },
  {
    type:"percent",
    text:[
      "3. Collecting weight under body, change weight end of 3",
      "3. RF closes to LF (T)",
      "3. LF crosses in front of RF (T)"
    ],
    ml: [0,0,0,f_off,"top"],
    mr: [25,5,-45,f_on,"top"],
    ll: [25,3,-45,f_on,"top"],
    lr: [0,0,0,f_off,"top"]
  }
];

const vreverse_turn_456_data = [
  {
    type:"percent",
    text:[
      "Prepare to move towards LOD",
      "Begin with weight on left foot",
      "Begin with weight on right foot"
    ],
    ll: [10,45,bdw-360,1,"top"],
    lr: [8,50,c,0.3,"top", "all 2s"],
    ml: [17,35,dw,0.3,"top","all 2s"],
    mr: [12,40,dw,1,"top"]
  },
  {
    type:"percent",
    text:[
      "1. Moving together towards LOD",
      "1. RF fwd (HT), commence to rise end of 1",
      "1. LF back (TH), commence to rise end of 1 ,NFR"
    ],
    ll: [0,0,0,f_off,"top"],
    lr: [27,-20,-90,f_on,"top"],
    ml: [18,0,-45,f_on,"top"],
    mr: [0,0,0,f_off,"top"]
  },
  {
    type:"percent",
    text:[
      "2. Moving together towards LOD",
      "2. LF to side (T), cont. to rise",
      "2. RF to side (T), cont. to rise"
    ],
    ll: [55,-15,-180,f_on,"top"],
    lr: [0,0,-90,f_off,"top","left 2s, top 2s, opacity 2s, transform 1.5s 0.5s"],
    ml: [0,0,-90,f_off,"top","left 2s, top 2s, opacity 2s, transform 1.5s 0.5s"],
    mr: [47,2,-135,f_on,"top"],
  },
  {
    type:"percent",
    text:[
      "3. Collecting weight under body, change weight end of 3",
      "3. RF closes to LF (T)",
      "3. LF crosses in front of RF (T)"
    ],
    ll: [0,0,0,f_off,"top"],
    lr: [25,5,-45,f_on,"top"],
    ml: [25,3,-45,f_on,"top"],
    mr: [0,0,0,f_off,"top"]
  }
];


const vwaltz_all_figures = [
    new Figure("Natural Turn (1-3)", "Viennese Waltz", "Bronze", "Standard", vnatural_turn_123_data),
    new Figure("Natural Turn (4-6)", "Viennese Waltz", "Bronze", "Standard", vnatural_turn_456_data),
    new Figure("Reverse Turn (1-3)", "Viennese Waltz", "Bronze", "Standard", vreverse_turn_123_data),
    new Figure("Reverse Turn (4-6)", "Viennese Waltz", "Bronze", "Standard", vreverse_turn_456_data),
    new Figure("Forward Change (Natural to Reverse)", "Viennese Waltz", "Bronze", "Standard", natural_turn_data),
    new Figure("Forward Change (Reverse to Natural)", "Viennese Waltz", "Bronze", "Standard", natural_turn_data),
    new Figure("Backward Change (Natural to Reverse)", "Viennese Waltz", "Bronze", "Standard", natural_turn_data),
    new Figure("Backward Change (Reverse to Natural)", "Viennese Waltz", "Bronze", "Standard", natural_turn_data),

    new Figure("Reverse Fleckerl", "Viennese Waltz", "Silver", "Standard", natural_turn_data),

    new Figure("Natural Fleckerl", "Viennese Waltz", "Gold", "Standard", natural_turn_data),
    new Figure("Contra Check", "Viennese Waltz", "Gold", "Standard", natural_turn_data)

]
