const chasse_to_right = [
  {
    text:"Begin with weight on right foot",
    ml: [54,209,45,0.3],
    mr: [84,234,45,1],
    ll: [154,190,225,1],
    lr: [120,165,225,0.3]
  },
  {
    text:"1. LF fwd (HT),commence to rise end of 1",
    ml: [123,132,0,1],
    mr: [84,234,45,0.3],
    ll: [154,190,225,0.3],
    lr: [163,67,180,1]
  },
  {
    text:"2. RF to side (T), continue to rise",
    ml: [123,132,0,0.3],
    mr: [297,132,0,1],
    ll: [320,67,180,1],
    lr: [163,67,180,0.3]
  },
  {
    text:"2&. LF closes to RF (T), continue to rise",
    ml: [285,155,-45,1],
    mr: [320,125,-45,0.3],
    ll: [300,67,135,0.3],
    lr: [265,95,135,1]
  },
  {
    text:"3. RF to side & slightly back (TH), continue to rise",
    ml: [285,155,-45,0.3],
    mr: [425,122,-45,1],
    ll: [395,62,135,1],
    lr: [265,95,135,0.3]
  },
  {
  text:"3&. Collect LF and lower end of 3",
  ml: [390,150,-45,0.3],
  mr: [425,122,-45,1],
  ll: [395,62,135,1],
  lr: [360,90,135,0.3]
  }
];


const current = {
  step: 0,
  step_total: chasse_to_right.length,
  text:chasse_to_right[0].text,
  ml: [54,209,45,0.3],
  mr: [84,234,45,1],
  ll: [54,209,45,1],
  lr: [120,165,225,0.3],

  prev() {
    if (current.step > 0) {
      current.step -= 1;
      current.text = chasse_to_right[current.step].text;
      current.ml = chasse_to_right[current.step].ml;
      current.mr = chasse_to_right[current.step].mr;
      current.ll = chasse_to_right[current.step].ll;
      current.lr = chasse_to_right[current.step].lr;
      bind();
      console.log("prev");
    } else{
      console.log("no more");
    }
  },

  next() {
    if (current.step < current.step_total-1) {
      console.log("next");
      current.step += 1;
      current.text = chasse_to_right[current.step].text;
      current.ml = chasse_to_right[current.step].ml;
      current.mr = chasse_to_right[current.step].mr;
      current.ll = chasse_to_right[current.step].ll;
      current.lr = chasse_to_right[current.step].lr;
      bind();
    } else{
      console.log("no more");
    }
  },

  replay() {
        console.log("next");
        current.step = 0;
        current.text = chasse_to_right[0].text;
        current.ml = chasse_to_right[0].ml;
        current.mr = chasse_to_right[0].mr;
        current.ll = chasse_to_right[0].ll;
        current.lr = chasse_to_right[0].lr;
        bind();
      }

};

var app = new Vue({
  el: "#app",
  data: {
    dance: "Waltz",
    figure_name: "Chasse to Right",
    style: "Standard",
    instruction: current.text,
    waltz_newcomer_figures: [
       'Prep Step',
       'Natural Turn',
       'Natural Spin Turn',
       'Reverse Turn',
       'Change Step',
       'Whisk',
       'Chasse from Promenade'
    ],
    waltz_bronze_figures: [
       'Closed Impetus',
       'Hesitation Change',
       'Outside Change',
       'Reverse Corte',
       'Back Whisk',
       'Basic Weave',
       'Double Reverse Spin',
       'Reverse Pivot',
       'Back Lock',
       'Progressive Chasse to Right'
    ],
    waltz_silver_figures: [
       'Weave from Promenade',
       'Closed Telemark',
       'Open Telemark',
       'Open Impetus',
       'Closed Hesitation',
       'Wing',
       'Outside Spin',
       'Turning Lock to L',
       'Drag Hesitation'
    ],
    waltz_gold_figures: [
       'Left Whisk',
       'Contra Check',
       'Closed Wing',
       'Turning Lock to Right',
       'Fallaway Reverse & Slip Pivot',
       'Hover Corte',
       'Turning Lock to Right'
    ],
  }

})


const btn_lead = document.getElementById("btn-lead");
const btn_follow = document.getElementById("btn-follow");
const btn_both = document.getElementById("btn-both");
const ml = document.getElementById("ML");
const mr = document.getElementById("MR");
const ll = document.getElementById("LL");
const lr = document.getElementById("LR");

document.getElementById("prev").onclick = current.prev;
document.getElementById("next").onclick = current.next;
document.getElementById("replay").onclick = current.replay;


const toggle = {
  lead() {
    ll.style.display = "none";
    lr.style.display = "none";
    ml.style.display = "block";
    mr.style.display = "block";
    btn_lead.classList.add("mdl-button--colored");
    btn_follow.classList.remove("mdl-button--colored");
    btn_both.classList.remove("mdl-button--colored");
  },
  follow() {
    ll.style.display = "block";
    lr.style.display = "block";
    ml.style.display = "none";
    mr.style.display = "none";
    btn_lead.classList.remove("mdl-button--colored");
    btn_follow.classList.add("mdl-button--colored");
    btn_both.classList.remove("mdl-button--colored");
  },
  both() {
    ll.style.display = "block";
    lr.style.display = "block";
    ml.style.display = "block";
    mr.style.display = "block";
    btn_lead.classList.remove("mdl-button--colored");
    btn_follow.classList.remove("mdl-button--colored");
    btn_both.classList.add("mdl-button--colored");
  }
}

btn_lead.onclick = toggle.lead;
btn_follow.onclick = toggle.follow;
btn_both.onclick = toggle.both;

function bind() {

  app.instruction = current.text;

  ml.style.left = current.ml[0];
  ml.style.top = current.ml[1];
  ml.style.transform = "rotate("+current.ml[2]+"deg)";
  ml.style.opacity =current.ml[3];

  mr.style.left = current.mr[0];
  mr.style.top = current.mr[1];
  mr.style.transform = "rotate("+current.mr[2]+"deg)";
  mr.style.opacity =current.mr[3];

  ll.style.left = current.ll[0];
  ll.style.top = current.ll[1];
  ll.style.transform = "rotate("+current.ll[2]+"deg)";
  ll.style.opacity =current.ll[3];

  lr.style.left = current.lr[0];
  lr.style.top = current.lr[1];
  lr.style.transform = "rotate("+current.lr[2]+"deg)";
  lr.style.opacity =current.lr[3];
}
