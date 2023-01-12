<template>
  <div class="lottery-gift-displayer-component full-screen">
    <div :class=boardStyle>
      <div class="border-area">
        <img class="gift-image" :src="image" alt="Gift">
      </div>
    </div>
    <h2 class="gift-name">{{ name }}</h2>
    <p class="gift-desc">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'LotteryGiftDisplayer',
  data() {
    return {}
  },
  props: ['name', 'image', 'description'],
  computed: {
    boardStyle: {
      get: function () {
        let bg = new Date().getTime() % 2 + 1;
        return "gift-image-wrapper gift-image-wrapper-bg-" + bg;
      }
    },
  },
  methods: {
  }
}
</script>

<style scoped>
.lottery-gift-displayer-component {
  background-color: #F0C0D8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.gift-image-wrapper {
  width: 500px;
  height: 500px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: 999;
  position: relative;
  top: -40px;
  padding: 80px 10px 50px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.gift-image-wrapper-bg-1 {
  background-image: url(../assets/images/board-1.png);
  background-position: bottom 10px left 10px;
}
.gift-image-wrapper-bg-2 {
  background-image: url(../assets/images/board-2.png);
  background-position: top 20px right 10px;
}

.border-area {
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.gift-image {
  display: block;
  width: 190px;
  height: 190px;
}
.gift-name {
  margin-top: 20px;
}
.gift-desc {
  margin-top: 10px;
}
</style>