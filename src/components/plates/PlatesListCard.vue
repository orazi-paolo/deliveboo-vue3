<script>
export default {
  name:"PlatesListCard",  
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
}
</script>

<template>
  <li>
    {{ plateObj.name }}
  </li>
</template>

<style lang="scss" scoped>
  
</style>