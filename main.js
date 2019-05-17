//
// Vue.component('figure-item', {
//   props:['figure'],
//   template: `<li class="mdl-list__item" v:on-click="$emit('change')">
//   <span class="mdl-list__item-primary-content">
//   {{figure.name}}
//   </span>
//   </li>`
// })
const app = new Vue({
  el: '#app',
  data: {
    current_figure: waltz_all_figures[0],
    text: null,
    instruction_both: 'both_text',
    instruction_lead: 'lead text',
    instruction_follow: 'follow text',
    ml: [0, 0, 0, 0.3],
    mr: [0, 0, 0, 1],
    ll: [0, 0, 0, 1],
    lr: [0, 0, 0, 0.3],
    preceding_figures: waltz_all_figures[0].preceding_figures,
    following_figures: waltz_all_figures[0].following_figures,
    newcomer_figures: 'Newcomer_figures',
    bronze_figures: 'Bronze_figures',
    silver_figures: 'Silver_figures',
    gold_figures: 'Gold_figures',
    lead_active: true,
    follow_active: true,
    step: 0,
    step_total: 999,
    style: 'Standard',
    dance: 'Waltz',
    foot_width: 20,
    playing: false,
    rewinding: false,
    replaying: false,
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
    change_figure: function(newFigure) {
      this.current_figure = newFigure;
      this.step_total = newFigure.data.length;
      this.preceding_figures = newFigure.preceding_figures;
      this.following_figures = newFigure.following_figures;
      this.replay();
    },
    play: async function() {
      this.playing = true;
      while (this.step < this.step_total-1 && this.playing == true) {
        this.next();
        await this.wait(3000);
      }
      playing = false;
    },
    wait: function(ms) {
      return new Promise( (resolve) => setTimeout(resolve, ms));
    },
    next: function() {
      if (app.step < app.step_total-1) {
        app.step += 1;

        app.instruction_both = this.current_figure.data[app.step].text[0];
        app.instruction_lead = this.current_figure.data[app.step].text[1];
        app.instruction_follow = this.current_figure.data[app.step].text[2];
        // const all_feet = [app.ml, app.mr, app.ll, app.lr];

        app.ml = this.current_figure.data[app.step].ml.map((value, idx) => {
          if (idx < 2 ) {
            return (this.current_figure.data[app.step].type == 'translate') ? value : value + app.ml[idx];
          } else if (1 < idx < 4) {
            return value + app.ml[idx];
          } else {
            return value;
          }
        });

        app.mr = this.current_figure.data[app.step].mr.map((value, idx) => {
          if (idx < 2 ) {
            return (this.current_figure.data[app.step].type == 'translate') ? value : value + app.ml[idx];
          } else if (1 < idx < 4) {
            return value + app.ml[idx];
          } else {
            return value;
          }
        });
        app.ll = this.current_figure.data[app.step].ll.map((value, idx) => {
          if (idx < 2 ) {
            return (this.current_figure.data[app.step].type == 'translate') ? value : value + app.ml[idx];
          } else if (1 < idx < 4) {
            return value + app.ml[idx];
          } else {
            return value;
          }
        });
        app.lr = this.current_figure.data[app.step].lr.map((value, idx) => {
          if (idx < 2 ) {
            return (this.current_figure.data[app.step].type == 'translate') ? value : value + app.ml[idx];
          } else if (1 < idx < 4) {
            return value + app.ml[idx];
          } else {
            return value;
          }
        });

        this.update_feet_position();
      }
    },
    prev: function() {
      if (app.step > 0) {
        this.playing = false;
        this.rewinding = true;

        app.ml = this.current_figure.data[app.step].ml.map(
            function(value, idx) {
              if (idx < 4) {
                return isNaN(value) ? value : app.ml[idx] - value;
              } else {
                return value;
              }
            });

        app.mr = this.current_figure.data[app.step].mr.map(
            function(value, idx) {
              if (idx < 4) {
                return isNaN(value) ? value : app.mr[idx] - value;
              } else {
                return value;
              }
            });

        app.ll = this.current_figure.data[app.step].ll.map(
            function(value, idx) {
              if (idx < 4) {
                return isNaN(value) ? value : app.ll[idx] - value;
              } else {
                return value;
              }
            });
        app.lr = this.current_figure.data[app.step].lr.map(
            function(value, idx) {
              if (idx < 4) {
                return isNaN(value) ? value : app.lr[idx] - value;
              } else {
                return value;
              }
            });

        app.step -= 1;
        app.instruction_both = this.current_figure.data[app.step].text[0];
        app.instruction_lead = this.current_figure.data[app.step].text[1];
        app.instruction_follow = this.current_figure.data[app.step].text[2];

        mlSvg.style.transition = 'all 2s';
        mrSvg.style.transition = 'all 2s';
        llSvg.style.transition = 'all 2s';
        lrSvg.style.transition = 'all 2s';
        this.update_feet_position();
        this.rewinding = false;
      }
    },
    replay: function() {
      this.playing = false;
      this.replaying = true;
      app.step = 0;

      app.instruction_both = this.current_figure.data[0].text[0];
      app.instruction_lead = this.current_figure.data[0].text[1];
      app.instruction_follow = this.current_figure.data[0].text[2];

      app.ml = this.current_figure.data[0].ml;
      app.mr = this.current_figure.data[0].mr;
      app.ll = this.current_figure.data[0].ll;
      app.lr = this.current_figure.data[0].lr;
      mlSvg.style.transition = 'left 2s, top 2s, opacity 2s, transform 0s';
      mrSvg.style.transition = 'left 2s, top 2s, opacity 2s, transform 0s';
      llSvg.style.transition = 'left 2s, top 2s, opacity 2s, transform 0s';
      lrSvg.style.transition = 'left 2s, top 2s, opacity 2s, transform 0s';
      this.update_feet_position();
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
    moveFoot: function(feet, data) {
      if (data[4] != undefined ) {
        feet.style.transformOrigin = data[4];
      } else {
        feet.style.transformOrigin = 'center';
      }
      console.log(data);
      // TRANSITION, if specified use it going forward, and condition for replay
      if ((data[5] != undefined) && (this.rewinding == false) && (this.replaying == false) ) {
        feet.style.transition = data[5];
      } else if (this.replaying == true) {
        feet.style.transition = 'all 2s';
      } else {
        feet.style.transition = 'all 2s';
      }
      if (this.current_figure.data[app.step].type == 'percent') {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        foot.style.left = `${data[0]}%`;
        foot.style.top = `${data[1]}%`;
        foot.style.transform = `rotate(${data[2]})`;
      } else if (this.current_figure.data[app.step].type == 'translate') {
        foot.style.transform = `translate(${data[0]}px, ${data[1]}px) rotate(${data[2]}deg)`;
      } else { // MOVE FOOT BY POSITION VALUE
        foot.style.left = `${data[0]}px`;
        foot.style.top = `${data[1]}px`;
        foot.style.transform = `rotate(${data[2]}deg)`;
      } // ROTATE AND OPACITY
      foot.style.opacity = `${data[3]}`;
      // SHOW FOOTWORK
      if ((data[6] != undefined) &&
          (this.rewinding == false) &&
          (this.replaying == false)) {
        this.show_footwork(foot, data[6]);
=======
=======
>>>>>>> parent of 0677e4f... footwork and timing
=======
>>>>>>> parent of 0677e4f... footwork and timing
        feet.style.left = `${data[0]}%`;
        feet.style.top = `${data[1]}%`;
      } else {
        feet.style.left = `${data[0]}px`;
        feet.style.top = `${data[1]}px`;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 0677e4f... footwork and timing
=======
>>>>>>> parent of 0677e4f... footwork and timing
=======
>>>>>>> parent of 0677e4f... footwork and timing
      }
      feet.style.transform = `rotate(${data[2]}deg)`;
      feet.style.opacity = `${data[3]}`;
    },
    update_feet_position: function() {
      app.moveFoot(mlSvg, app.ml);
      app.moveFoot(mrSvg, app.mr);
      app.moveFoot(llSvg, app.ll);
      app.moveFoot(lrSvg, app.lr);
    },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    show_footwork: async function(foot, footwork) {
      const heel = foot.children[0].children[0].children[1];
      const toe = foot.children[0].children[0].children[0];
      await this.wait(1000);
      switch (footwork) {
        case 'HT':
          heel.style.fill = foot.classList.contains('M') ? '#003C78':'#730038';
          await this.wait(500);
          toe.style.fill = foot.classList.contains('M') ? '#003C78':'#730038';
          await this.wait(50);
          heel.style.fill = foot.classList.contains('M') ? '#069FE6':'#FF51A6';
          await this.wait(1000);
          toe.style.fill = foot.classList.contains('M') ? '#069FE6':'#FF51A6';
          break;
        case 'TH':
          toe.style.fill = foot.classList.contains('M') ? '#003C78':'#730038';
          await this.wait(500);
          heel.style.fill = foot.classList.contains('M') ? '#003C78':'#730038';
          await this.wait(50);
          toe.style.fill = foot.classList.contains('M') ? '#069FE6':'#FF51A6';
          await this.wait(1000);
          heel.style.fill = foot.classList.contains('M') ? '#069FE6':'#FF51A6';
          break;
        case 'T&H':
          toe.style.fill = foot.classList.contains('M') ? '#003C78':'#730038';
          await this.wait(500);
          heel.style.fill = foot.classList.contains('M') ? '#003C78':'#730038';
          await this.wait(1000);
          toe.style.fill = foot.classList.contains('M') ? '#069FE6':'#FF51A6';
          heel.style.fill = foot.classList.contains('M') ? '#069FE6':'#FF51A6';
          break;
        case 'T':
          toe.style.fill = foot.classList.contains('M') ? '#003C78':'#730038';
          await this.wait(1500);
          toe.style.fill = foot.classList.contains('M') ? '#069FE6':'#FF51A6';
          break;
      }
    },
=======
>>>>>>> parent of 0677e4f... footwork and timing
=======
>>>>>>> parent of 0677e4f... footwork and timing
=======
>>>>>>> parent of 0677e4f... footwork and timing
    set_foot_width: function(px) {
      mlSvg.style.width = px + 'px';
      mrSvg.style.width = px + 'px';
      llSvg.style.width = px + 'px';
      lrSvg.style.width = px + 'px';
    },
  },
});


const mlSvg = document.getElementById('ML');
const mrSvg = document.getElementById('MR');
const llSvg = document.getElementById('LL');
const lrSvg = document.getElementById('LR');

// Start
app.change_dance('Slow Waltz');
app.change_figure(waltz_all_figures[0]);

// debug
// app.change_dance('Viennese Waltz');
// app.change_figure(vwaltz_all_figures[8]);
