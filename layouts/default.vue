<template>
  <div class="container">
    <TheNavbar/>
    <nuxt/>
  </div>
</template>

<script>
  import TheNavbar from '@/components/TheNavbar'
  String.prototype.capitalize = function(lower) {
      return (lower ? this.toLowerCase() : this).replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
  }
  export default {
    components: {
      TheNavbar
    },
    computed:{

    },
    transition(to, from) {
      if (!from) {
        return 'slide-left'
      }
      return 'slide-right'
    },
  }
</script>

<style>
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
