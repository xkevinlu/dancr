
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
    current_figure: natural_turn,
    text: null,
    instruction_both: "both_text",
    instruction_lead: "lead text",
    instruction_follow: "follow text",
    ml: [54,209,45,0.3],
    mr: [84,234,45,1],
    ll: [54,209,45,1],
    lr: [120,165,225,0.3],
    newcomer_figures: waltz_newcomer_figures,
    bronze_figures: waltz_bronze_figures,
    silver_figures: waltz_silver_figures,
    gold_figures: waltz_gold_figures,
    lead_active: true,
    follow_active: true,
    step:0,
    step_total:999,
    style: "Standard",
    dance: "Waltz"
  },
  methods: {
    change_dance: function(dance) {
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
      this.instruction_both = new_figure.data[0].text[0];
      this.instruction_lead = new_figure.data[0].text[1];
      this.instruction_follow = new_figure.data[0].text[2];
      this.step = 0;
      this.step_total = new_figure.data.length;
      this.ml = new_figure.data[0].ml;
      this.mr = new_figure.data[0].mr;
      this.ll = new_figure.data[0].ll;
      this.lr = new_figure.data[0].lr;
      this.update_feet_position();
    },
    next: function () {
      if (app.step < app.step_total-1) {
        app.step += 1;

        app.instruction_both = this.current_figure.data[app.step].text[0];
        app.instruction_lead = this.current_figure.data[app.step].text[1];
        app.instruction_follow = this.current_figure.data[app.step].text[2];

        app.ml = this.current_figure.data[app.step].ml;
        app.mr = this.current_figure.data[app.step].mr;
        app.ll = this.current_figure.data[app.step].ll;
        app.lr = this.current_figure.data[app.step].lr;
        this.update_feet_position();
      }
    },
    prev: function () {
      if (app.step > 0) {
        app.step -= 1;

        app.instruction_both = this.current_figure.data[app.step].text[0];
        app.instruction_lead = this.current_figure.data[app.step].text[1];
        app.instruction_follow = this.current_figure.data[app.step].text[2];

        app.ml = this.current_figure.data[app.step].ml;
        app.mr = this.current_figure.data[app.step].mr;
        app.ll = this.current_figure.data[app.step].ll;
        app.lr = this.current_figure.data[app.step].lr;
        this.update_feet_position();
      }
    },
    replay: function () {
      app.step = 0;

      app.instruction_both = this.current_figure.data[app.step].text[0];
      app.instruction_lead = this.current_figure.data[app.step].text[1];
      app.instruction_follow = this.current_figure.data[app.step].text[2];

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
    update_feet_position: function() {
      ml_visual.style.left = app.ml[0];
      ml_visual.style.top = app.ml[1];
      ml_visual.style.transform = "rotate("+app.ml[2]+"deg)";
      ml_visual.style.opacity =app.ml[3];

      mr_visual.style.left = app.mr[0];
      mr_visual.style.top = app.mr[1];
      mr_visual.style.transform = "rotate("+app.mr[2]+"deg)";
      mr_visual.style.opacity =app.mr[3];

      ll_visual.style.left = app.ll[0];
      ll_visual.style.top = app.ll[1];
      ll_visual.style.transform = "rotate("+app.ll[2]+"deg)";
      ll_visual.style.opacity =app.ll[3];

      lr_visual.style.left = app.lr[0];
      lr_visual.style.top = app.lr[1];
      lr_visual.style.transform = "rotate("+app.lr[2]+"deg)";
      lr_visual.style.opacity =app.lr[3];
    }
  }
})

const ml_visual = document.getElementById("ML");
const mr_visual = document.getElementById("MR");
const ll_visual = document.getElementById("LL");
const lr_visual = document.getElementById("LR");

app.change_figure(natural_turn);
