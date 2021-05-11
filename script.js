const KinesisContainer = window["vue-kinesis"].KinesisContainer;
const KinesisElement = window["vue-kinesis"].KinesisElement;

Vue.component("kinesis-container", KinesisContainer);
Vue.component("kinesis-element", KinesisElement);

new Vue({
  el: "#app",
  data: {
    quizes: [
      {
        question:
          "大きな音や雑然とした光景のような強い刺激がわずらわしいですか?",
      },
      {
        question: "大きな音で不快になりますか?",
      },
      {
        question: "一度にたくさんの事が起こっていると不快になりますか?",
      },
      {
        question:
          "いろいろなことが自分の周りで起きていると，不快な気分が高まりますか?",
      },
      {
        question:
          "明るい光や強いにおい，ごわごわした布地，近くのサイレンの音などにゾッとしやすいですか?",
      },
      {
        question:
          "忙しい日々が続くと，ベッドや暗くした部屋などプライバシーが得られ，刺激の少ない場所に逃げ込みたくなりますか?",
      },
      {
        question: "一度にたくさんのことを頼まれるとイライラしますか?",
      },
      {
        question: "短時間にしなければならないことが多いとオロオロしますか?",
      },
      {
        question: "他人の気分に左右されますか?",
      },
      {
        question: "ビクッとしやすいですか?",
      },
      {
        question:
          "競争場面や見られていると，緊張や同様のあまり，いつもの力を発揮できなくなりますか?",
      },
      {
        question: "強い刺激に圧倒されやすいですか?",
      },
      {
        question: "痛みに敏感になることがありますか?",
      },
      {
        question:
          "子供の頃，親や教師はあなたのことを「敏感だ」とか「内気だ」と見ていましたか?",
      },
      {
        question: "生活に変化があると混乱しますか?",
      },
      {
        question: "微細で繊細な香り・味・音・芸術作品などを好みますか?",
      },
      {
        question: "自分に対して誠実ですか?",
      },
      {
        question: "美術や音楽に深く感動しますか?",
      },
      {
        question: "豊かな内面生活を送っていますか?",
      },
    ],
    count: 0,
    lowSensoryThresholdCount: 0,
    easeOfExcitationCount: 0,
    austhenticCount: 0,
    num: 0,
  },
  methods: {
    question() {
      this.num += 1;
    },
  },
});

new Vue({
  el: "#app2",
});
