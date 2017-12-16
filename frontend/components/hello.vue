<template lang="pug">

    h1.header(@click="swap") Hello, {{isAlter ? alterName : name}}!

</template>

<script>

  export default {
      data: () => {
        return { isAlter: false };
      },
      props: {
        name: { type: String, required: true },
        alterName: { type: String, required: true }
      },
      methods: {
        swap: function() {
          this.isAlter = !this.isAlter;
        }
      }
    }

</script>

<style lang="scss" scoped>

    .header {
      color: navy;
      font-size: 50px;
      text-align: center;
      top: 50vh;
      position: relative;
      cursor: pointer;
      user-select: none;
      transform: translateY(-150%);

      &:hover {
        color: mediumvioletred;
      }
    }

</style>
