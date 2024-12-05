<script>
import PlateShow from '../PlateShow.vue';
export default {
  name: "PlatesListCard",
  data() {
    return {
      modal: false,
    };
  },
  props: {
    plateObj: {
      type: Object,
      required: true,
    },
  },
  components: {
    PlateShow
  },
  methods: {
    toggleModal() {
      return this.modal = !this.modal
    }

  },
  computed: {
    isVisible() {
      return this.plateObj.visible === true;
    },
    showModal() {
      return this.modal
    }
  }
}
</script>

<template>
  <li class="col-12 col-lg-6 col-xl-4" id="plate-card">
    <div class="info-plate-card" @click="toggleModal()">
        <h4>{{ plateObj.name }}</h4>
        <!-- <p>{{ plateObj.description }}</p> -->
        <div class="price">{{ plateObj.price }}<span>&euro;</span></div>
      </div>
      <div class="box-img">
        <img :src="plateObj.image" :alt="`Image of ${plateObj.name}`">
      </div>
      <button class="btn-add-item" @click="toggleModal"><span>+</span></button>
      <PlateShow v-if="showModal" :plate="plateObj" @closeModal="toggleModal()" />
  </li>
</template>

<style lang="scss" scoped>
#plate-card {
  border: 1px solid rgb(230, 217, 217);
  padding: 15px 12px;
  border-radius: 5px;
  display: flex;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .info-plate-card {
    flex-grow: 1;
    cursor: pointer;

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
    flex-basis: 30%;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }


  .box-img,
  .btn-add-item {
    height: 90px;
    border: 1px solid rgb(230, 217, 217);
  }

  .btn-add-item {
    flex-basis: 40px;
    background-color: #fff;
    margin:0px 0px 0px 10px;

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