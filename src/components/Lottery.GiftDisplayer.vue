<template>
  <div class="lottery-gift-displayer-component full-screen">
    <div class="gift-image-wrapper">
      <img class="border-area" src="../assets/images/board-3.png" alt="Board"/>
      <img class="gift-image" :src="image" alt="Gift"/>
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
  },
  methods: {
  }
}
</script>

<style scoped>
.lottery-gift-displayer-component {
  background-image: url(../assets/images/bg-1.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.gift-image-wrapper {
  width: 300px;
  height: 300px;
  background-size: 96% 96%;
  background-repeat: no-repeat;
  z-index: 999;
  position: relative;
  top: -40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.border-area {
  position: absolute;
  width: 300px;
  height: 300px;
}
.gift-image {
  margin-top: 15px;
  margin-right: 10px;
  width: 230px;
  height: 230px;
}
.gift-name {
  margin-top: 20px;
}
.gift-desc {
  margin-top: 10px;
}
</style>