<script>
export default {
  name: "PlatesListCard",
  data() {
    return {

    };
  },
  props: {
    plateObj: {
      type: Object,
      required: true,
    },
  },
  components: {

  },
  methods: {

  },
  computed: {
    isVisible() {
      return this.plateObj.visible === true;
    }
  }
}
</script>

<template>
  <li id="plate-card">
    <div class="info-plate-card">
      <h4>{{ plateObj.name }}</h4>
      <p>{{ plateObj.description }}</p>
      <div class="price">{{ plateObj.price }}<span>&euro;</span></div>
    </div>
    <div class="box-img">
      <img :src="plateObj.image" :alt="`Image of ${plateObj.name}`">
    </div>
    <button class="btn-add-item"><span>+</span></button>
  </li>
</template>

<style lang="scss" scoped>
#plate-card {
  flex-basis: calc(50% - 15px);
  display: flex;
  gap: 10px;
  border: 1px solid rgb(230, 217, 217);
  padding: 15px 12px;
  min-width: 375px;
  border-radius: 5px;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .info-plate-card {
    flex-grow: 1;

    h4 {
      font-size: 17px;
    }

    p,
    h4 {
      margin-bottom: 8px;
    }

    p,
    .price {
      font-size: 14px;
    }
  }

  .box-img {
    // flex-basis: 500px;

    img {
      display: block;
      max-width: 100%;
      max-height: auto;
      // object-fit: cover;
    }
  }

  .box-img,
  .btn-add-item {
    max-height: 90px;
    border: 1px solid rgb(230, 217, 217);
  }

  .btn-add-item {
    flex-basis: 40px;
    background-color: #fff;

    span {
      color: #70C8BF;
      font-size: 20px;
    }

    &:hover {
      border: 1px solid #ccc;

      span {
        color: #68a19c;
        font-size: 25px;
      }
    }
  }
}
</style>