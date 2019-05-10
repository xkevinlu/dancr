
Vue.component('figure-item', {
  props:['figure'],
  template: `
  <li class="mdl-list__item" v:on-click="$emit('change')">
  <span class="mdl-list__item-primary-content">
  {{figure.name}}
  </span>
  </li>`
})

var app = new Vue({
  el: "#app",
  data: {
    current_figure: waltz_all_figures[0],
    text: null,
    instruction_both: "both_text",
    instruction_lead: "lead text",
    instruction_follow: "follow text",
    ml: [0,0,0,0.3],
    mr: [0,0,0,1],
    ll: [0,0,0,1],
    lr: [0,0,0,0.3],
    preceding_figures: waltz_all_figures[0].preceding_figures,
    following_figures: waltz_all_figures[0].following_figures,
    newcomer_figures: "Newcomer_figures",
    bronze_figures: "Bronze_figures",
    silver_figures: "Silver_figures",
    gold_figures: "Gold_figures",
    lead_active: true,
    follow_active: true,
    step:0,
    step_total:999,
    style: "Standard",
    dance: "Waltz",
    foot_width: 20,
    playing:false,
  },
  methods: {
    change_dance: function(dance) {
      try{
      document.querySelector('.mdl-layout').MaterialLayout.toggleDrawer();
    }catch{}
      this.dance = dance;
      switch(dance) {
        case "Slow Waltz":
          this.change_figure(waltz_all_figures[0]);
          this.newcomer_figures = waltz_all_figures.filter(figure => figure.level == "Newcomer");
          this.bronze_figures = waltz_all_figures.filter(figure => figure.level == "Bronze");
          this.silver_figures = waltz_all_figures.filter(figure => figure.level == "Silver");
          this.gold_figures = waltz_all_figures.filter(figure => figure.level == "Gold");
        break;

        case "Tango":
          this.change_figure(tango_all_figures[0]);
          this.newcomer_figures = tango_all_figures.filter(figure => figure.level == "Newcomer");
          this.bronze_figures = tango_all_figures.filter(figure => figure.level == "Bronze");
          this.silver_figures = tango_all_figures.filter(figure => figure.level == "Silver");
          this.gold_figures = tango_all_figures.filter(figure => figure.level == "Gold");
        break;

        case "Viennese Waltz":
          this.change_figure(vwaltz_all_figures[0]);
          this.newcomer_figures = vwaltz_all_figures.filter(figure => figure.level == "Newcomer");
          this.bronze_figures = vwaltz_all_figures.filter(figure => figure.level == "Bronze");
          this.silver_figures = vwaltz_all_figures.filter(figure => figure.level == "Silver");
          this.gold_figures = vwaltz_all_figures.filter(figure => figure.level == "Gold");
        break;

        case "Slow Foxtrot":
          this.change_figure(foxtrot_all_figures[0]);
          this.newcomer_figures = foxtrot_all_figures.filter(figure => figure.level == "Newcomer");
          this.bronze_figures = foxtrot_all_figures.filter(figure => figure.level == "Bronze");
          this.silver_figures = foxtrot_all_figures.filter(figure => figure.level == "Silver");
          this.gold_figures = foxtrot_all_figures.filter(figure => figure.level == "Gold");
        break;

        case "Quickstep":
          this.change_figure(quickstep_all_figures[0]);
          this.newcomer_figures = quickstep_all_figures.filter(figure => figure.level == "Newcomer");
          this.bronze_figures = quickstep_all_figures.filter(figure => figure.level == "Bronze");
          this.silver_figures = quickstep_all_figures.filter(figure => figure.level == "Silver");
          this.gold_figures = quickstep_all_figures.filter(figure => figure.level == "Gold");
        break;
      }
    },
    change_figure: function (new_figure) {
      this.current_figure = new_figure;
      this.step_total = new_figure.data.length;
      this.preceding_figures = new_figure.preceding_figures;
      this.following_figures = new_figure.following_figures;
      this.replay();
    },
    play: async function () {
      playing = true;
      while (this.step < this.step_total-1 && playing == true) {
        this.next();
        await counterDelay(2000);
      }
    },
    next: function () {
      if (app.step < app.step_total-1) {
        app.step += 1;

        app.instruction_both = this.current_figure.data[app.step].text[0];
        app.instruction_lead = this.current_figure.data[app.step].text[1];
        app.instruction_follow = this.current_figure.data[app.step].text[2];

        app.ml = this.current_figure.data[app.step].ml.map(function (value, idx) {
          if (idx < 4) {
            return value+app.ml[idx];
          } else {
            return value;
          }
        });

        app.mr = this.current_figure.data[app.step].mr.map(function (value, idx) {
          if (idx < 4) {
            return value+app.mr[idx];
          } else {
            return value;
          }
        });

        app.ll = this.current_figure.data[app.step].ll.map(function (value, idx) {
          if (idx < 4) {
            return value+app.ll[idx];
          } else {
            return value;
          }
       });
        app.lr = this.current_figure.data[app.step].lr.map(function (value, idx) {
          if (idx < 4) {
            return value+app.lr[idx];
          } else {
            return value;
          }
        });


        this.update_feet_position();
      }
    },
    prev: function () {
      if (app.step > 0) {
        playing = false;

        app.instruction_both = this.current_figure.data[app.step].text[0];
        app.instruction_lead = this.current_figure.data[app.step].text[1];
        app.instruction_follow = this.current_figure.data[app.step].text[2];

        app.ml = this.current_figure.data[app.step].ml.map(function (value, idx) { if(idx < 4) return app.ml[idx] - value});
        app.mr = this.current_figure.data[app.step].mr.map(function (value, idx) { if(idx < 4) return app.mr[idx] - value});
        app.ll = this.current_figure.data[app.step].ll.map(function (value, idx) { if(idx < 4) return app.ll[idx] - value});
        app.lr = this.current_figure.data[app.step].lr.map(function (value, idx) { if(idx < 4) return app.lr[idx] - value});
        app.step -= 1;
        this.update_feet_position();
      }
    },
    replay: function () {
      playing = false;
      app.step = 0;

      app.instruction_both = this.current_figure.data[0].text[0];
      app.instruction_lead = this.current_figure.data[0].text[1];
      app.instruction_follow = this.current_figure.data[0].text[2];

      app.ml = this.current_figure.data[0].ml;
      app.mr = this.current_figure.data[0].mr;
      app.ll = this.current_figure.data[0].ll;
      app.lr = this.current_figure.data[0].lr;
      this.update_feet_position();
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
    moveFoot: function(feet, data) {
      if (data[4] != undefined ) {
        feet.style.transformOrigin = data[4];
      } else {
        feet.style.transformOrigin = "center";
      }
      console.log(data);
      if (data[5] != undefined ) {
        feet.style.transition = data[5];
        console.log(data[5])
      } else {
        feet.style.transition = "all 2s";
        console.log("all 2s");
      }
      feet.style.left = `${data[0]}px`;
      feet.style.top = `${data[1]}px`;
      feet.style.transform = `rotate(${data[2]}deg)`;
      feet.style.opacity = `${data[3]}`;
    },
    update_feet_position: function() {
      app.moveFoot(ml_visual,app.ml);
      app.moveFoot(mr_visual,app.mr);
      app.moveFoot(ll_visual,app.ll);
      app.moveFoot(lr_visual,app.lr);
    },
    set_foot_width: function(px) {
      ml_visual.style.width = px + "px";
      mr_visual.style.width = px + "px";
      ll_visual.style.width = px + "px";
      lr_visual.style.width = px + "px";
    }
  }
})

function counterDelay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const ml_visual = document.getElementById("ML");
const mr_visual = document.getElementById("MR");
const ll_visual = document.getElementById("LL");
const lr_visual = document.getElementById("LR");

app.change_dance("Slow Waltz");
app.change_figure(waltz_all_figures[6]);
