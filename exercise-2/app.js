new Vue({
  el: '#exercise',
  data: {
    value: ''
  },
  methods: {
    alertButton: function () {
      alert("Whats up?!")
    },
    keydownAction: function (event) {
      this.value = event.target.value
    },
    keydownActionEnterOnly: function (event) {
      this.value = event.target.value
    }
  }
});
