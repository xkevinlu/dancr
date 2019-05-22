const app = new Vue({
  el: '#app',
  data: {
    style: 'Standard',
    dance: 'Waltz',
    lead_active: true,
    follow_active: true,
    current_figure: waltz_all_figures[0],
    step: 0,
    step_total: 999,
    foot_width: 20,
    ml: [0, 0, 0, 0.2],
    mr: [0, 0, 0, 1],
    ll: [0, 0, 0, 1],
    lr: [0, 0, 0, 0.2],
    text: null,
    instruction_both: 'both_text',
    instruction_lead: 'lead text',
    instruction_follow: 'follow text',
    preceding_figures: waltz_all_figures[0].preceding_figures,
    following_figures: waltz_all_figures[0].following_figures,
    newcomer_figures: 'Newcomer_figures',
    bronze_figures: 'Bronze_figures',
    silver_figures: 'Silver_figures',
    gold_figures: 'Gold_figures',
    playing: false,
    rewinding: false,
    replaying: false,
    LODToggle: true,
    LODFacing: 0, // 0 is facing right
    scale: 100,
    moreControls:true,
  },
  computed: {
    LODStyle: function() {
      return {transform: `rotate(${this.LODFacing}deg)`};
    },
    DiagramStyle: function() {
      return {transform: `rotate(${this.LODFacing}deg) scale(${this.scale / 100})`};
    },
  },
  methods: {
    change_dance: function(dance) {
      try {
        document.querySelector('.mdl-layout').MaterialLayout.toggleDrawer();
      } catch (err) {
        console.log(err);
      }
      this.dance = dance;
      switch (dance) {
        case 'Slow Waltz':
          this.change_figure(waltz_all_figures[0]);
          this.newcomer_figures = waltz_all_figures.filter(
              (figure) => figure.level == 'Newcomer');
          this.bronze_figures = waltz_all_figures.filter(
              (figure) => figure.level == 'Bronze');
          this.silver_figures = waltz_all_figures.filter(
              (figure) => figure.level == 'Silver');
          this.gold_figures = waltz_all_figures.filter(
              (figure) => figure.level == 'Gold');
          break;

        case 'Tango':
          this.change_figure(tango_all_figures[0]);
          this.newcomer_figures = tango_all_figures.filter(
              (figure) => figure.level == 'Newcomer');
          this.bronze_figures = tango_all_figures.filter(
              (figure) => figure.level == 'Bronze');
          this.silver_figures = tango_all_figures.filter(
              (figure) => figure.level == 'Silver');
          this.gold_figures = tango_all_figures.filter(
              (figure) => figure.level == 'Gold');
          break;

        case 'Viennese Waltz':
          this.change_figure(vwaltz_all_figures[0]);
          this.newcomer_figures = vwaltz_all_figures.filter(
              (figure) => figure.level == 'Newcomer');
          this.bronze_figures = vwaltz_all_figures.filter(
              (figure) => figure.level == 'Bronze');
          this.silver_figures = vwaltz_all_figures.filter(
              (figure) => figure.level == 'Silver');
          this.gold_figures = vwaltz_all_figures.filter(
              (figure) => figure.level == 'Gold');
          break;

        case 'Slow Foxtrot':
          this.change_figure(foxtrot_all_figures[0]);
          this.newcomer_figures = foxtrot_all_figures.filter(
              (figure) => figure.level == 'Newcomer');
          this.bronze_figures = foxtrot_all_figures.filter(
              (figure) => figure.level == 'Bronze');
          this.silver_figures = foxtrot_all_figures.filter(
              (figure) => figure.level == 'Silver');
          this.gold_figures = foxtrot_all_figures.filter(
              (figure) => figure.level == 'Gold');
          break;

        case 'Quickstep':
          this.change_figure(quickstep_all_figures[0]);
          this.newcomer_figures = quickstep_all_figures.filter(
              (figure) => figure.level == 'Newcomer');
          this.bronze_figures = quickstep_all_figures.filter(
              (figure) => figure.level == 'Bronze');
          this.silver_figures = quickstep_all_figures.filter(
              (figure) => figure.level == 'Silver');
          this.gold_figures = quickstep_all_figures.filter(
              (figure) => figure.level == 'Gold');
          break;
      }
    },
    change_figure: async function(newFigure) {
      this.current_figure = newFigure;
      this.step_total = newFigure.data.length;
      this.preceding_figures = newFigure.preceding_figures;
      this.following_figures = newFigure.following_figures;
      this.replay();
      // await this.wait(2000);
      // this.play();
    },
    play: async function() {
      this.playing = true;
      while (this.step < this.step_total-1 && this.playing == true) {
        this.next();
        await this.wait(1500);
      }
    },
    wait: function(ms) {
      return new Promise( (resolve) => setTimeout(resolve, ms));
    },
    next: function() {
      if (app.step < app.step_total-1) {
        app.step += 1;
        const newData = this.current_figure.data[app.step];

        app.instruction_both = newData.text[0];
        app.instruction_lead = newData.text[1];
        app.instruction_follow = newData.text[2];

        app.ml = newData.ml.map((value, idx) => {
          return (idx < 4) ? value + app.ml[idx] : value;
        });
        app.mr = newData.mr.map((value, idx) => {
          return (idx < 4) ? value + app.mr[idx] : value;
        });
        app.ll = newData.ll.map((value, idx) => {
          return (idx < 4) ? value + app.ll[idx] : value;
        });
        app.lr = newData.lr.map((value, idx) => {
          return (idx < 4) ? value + app.lr[idx] : value;
        });

        this.update_foot_position();
      }
    },
    prev: function() {
      if (app.step > 0) {
        this.playing = false;
        this.rewinding = true;
        let newData = this.current_figure.data[app.step];

        app.ml = newData.ml.map((value, idx) => {
          return (idx < 4) ? app.ml[idx] - value: value;
        });
        app.mr = newData.mr.map((value, idx) => {
          return (idx < 4) ? app.mr[idx] - value : value;
        });
        app.ll = newData.ll.map((value, idx) => {
          return (idx < 4) ? app.ll[idx] - value : value;
        });
        app.lr = newData.lr.map((value, idx) => {
          return (idx < 4) ? app.lr[idx] - value : value;
        });

        app.step -= 1;
        newData = this.current_figure.data[app.step];
        app.instruction_both = newData.text[0];
        app.instruction_lead = newData.text[1];
        app.instruction_follow = newData.text[2];

        this.update_foot_position();
        this.rewinding = false;
      }
    },
    replay: function() {
      playing = false;
      app.step = 0;
      const newData = this.current_figure.data[0];

      app.instruction_both = newData.text[0];
      app.instruction_lead = newData.text[1];
      app.instruction_follow = newData.text[2];

      app.ml = newData.ml;
      app.mr = newData.mr;
      app.ll = newData.ll;
      app.lr = newData.lr;

      this.update_foot_position();
      this.replaying = false;
    },
    lead: function() {
      app.lead_active = true;
      app.follow_active = false;
    },
    follow: function() {
      app.lead_active = false;
      app.follow_active = true;
    },
    both: function() {
      app.lead_active = true;
      app.follow_active = true;
    },
    moveFoot: function(foot, data) {
      const hasTransition = ((data[5] != undefined) && (this.replaying == false));
      const isPercent = (this.current_figure.data[app.step].type == 'percent');

      foot.style.left = isPercent ? `${data[0]}%` : `${data[0]}px`;
      foot.style.top = isPercent ? `${data[1]}%` : `${data[1]}px`;
      foot.style.transform = `rotate(${data[2]}deg)`;
      foot.style.opacity = `${data[3]}`;
      foot.style.transformOrigin = (data[4] != undefined ) ? data[4] : 'center';
      foot.style.transition = this.replaying ? 'all 0s': hasTransition ? data[5] : 'all 2s';

      // SHOW FOOTWORK
      if ((data[6] != undefined) &&
          (this.rewinding == false) &&
          (this.replaying == false)) {
        this.show_footwork(foot, data[6]);
      }
    },
    update_foot_position: function() {
      app.moveFoot(mlSvg, app.ml);
      app.moveFoot(mrSvg, app.mr);
      app.moveFoot(llSvg, app.ll);
      app.moveFoot(lrSvg, app.lr);
    },
    show_footwork: async function(foot, footwork) {
      const heel = foot.children[0].children[0].children[1];
      const toe = foot.children[0].children[0].children[0];
      const accentColor = foot.classList.contains('M') ? '#003C78':'#E10071';
      const normalColor = foot.classList.contains('M') ? '#069FE6':'#FF51A6';
      await this.wait(1000);
      switch (footwork) {
        case 'HT':
          heel.style.fill = accentColor;
          await this.wait(500);
          toe.style.fill = accentColor;
          await this.wait(50);
          heel.style.fill = normalColor;
          await this.wait(1000);
          toe.style.fill = normalColor;
          break;
        case 'TH':
          toe.style.fill = accentColor;
          await this.wait(500);
          heel.style.fill = accentColor;
          await this.wait(50);
          toe.style.fill = normalColor;
          await this.wait(1000);
          heel.style.fill = normalColor;
          break;
        case 'T&H':
          toe.style.fill = accentColor;
          await this.wait(500);
          heel.style.fill = accentColor;
          await this.wait(1000);
          toe.style.fill = normalColor;
          heel.style.fill = normalColor;
          break;
        case 'T':
          toe.style.fill = accentColor;
          await this.wait(1500);
          toe.style.fill = normalColor;
          break;
        case 'THT':
          toe.style.fill = accentColor;
          await this.wait(300);
          heel.style.fill = accentColor;
          await this.wait(50);
          toe.style.fill = normalColor;
          await this.wait(300);
          heel.style.fill = normalColor;
          await this.wait(50);
          toe.style.fill = accentColor;
          await this.wait(800);
          toe.style.fill = normalColor;
          break;
      }
    },
    LODRotateLeft: function() {
      this.LODFacing -= 45;
    },
  },
});

const mlSvg = document.getElementById('ML');
const mrSvg = document.getElementById('MR');
const llSvg = document.getElementById('LL');
const lrSvg = document.getElementById('LR');

// Start
window.onload = function() {
  app.change_dance('Slow Waltz');
  app.change_figure(waltz_all_figures[0]);
};
