<script>
export default {
  name: "TipologiesListCard",
  data() {
    return {
      
    };
  },
  components: {

  },
  methods: {
    tipologyObj: {
        require: true,
        type: Object
    }    
  },
};
</script>

<template>
  <!-- card of single tipology -->
  <li class="col-3 p-1 p-lg-2">
    <div id="tipology-card">
        <div class="box-img">
          <img :src="tipologyObjObj.image" :alt="`Image of ${tipologyObjObj.name}`">
        </div>
        <h4>{{ tipologyObjObj.name }}</h4>
    </div>
  </li>
</template>

<style lang="scss" scoped>
    #tipology-card{
        border: 1px solid rgb(230, 217, 217);
        padding: 15px 12px;
        border-radius: 7px;
        height: 125px;
        max-height: 125px;
        
        .box-img {
            height: 100px;
            width: 100%;
            border: 1px solid rgb(239, 231, 231);

            img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            }
        }
  
    }
</style>