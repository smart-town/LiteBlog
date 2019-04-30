<template>
  <div>
    <div class="card" style="width:15rem">
      <div class="card-body">
        <div class="card-title">{{title}}</div>
        <div class="card-text">
            <label class="text-info">slottest:<slot></slot></label><br/>
          <label :class="{'text-info': textInfo,'text-warning': !textInfo}">Cherry</label>
        </div>
        <button class="btn btn-info" @click="test">ok</button>
        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title"],
  data: function() {
    return {
      textInfo: true
    };
  },
  methods: {
    test: function() {
      this.textInfo = !this.textInfo;
      this.$emit('myevent',{name:"hhg"})
    }
  }
};
</script>
<style>
</style>