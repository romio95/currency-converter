module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/helpers/_variables.scss";
          @import "@/assets/scss/helpers/_mixins.scss";
        `
      }
    }
  }
}
