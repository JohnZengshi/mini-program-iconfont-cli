Component({
  properties: {
    // alipay | user | setup
    name: {
      type: String,
    },
    // string | string[]
    color: {
      type: null,
      value: '',
      observer: function(color, originalColor) {
        if (color !== originalColor) {
          this.setData({
            colorIsString: typeof color === 'string',
          });
        }
      }
    },
    size: {
      type: Number,
      value: 18,
    },
  },
  data: {
    quot: '"',
    colorIsString: false,
  },
});