<template>
  <div class="about">
    <h1>This is an about page</h1>
    <is-loading></is-loading>
    <div>
      <div>firstName: {{userInfo.firstName}}</div>
      <div>LastName: {{userInfo.lastName}}</div>
      <div>gender: {{userInfo.gender}}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'about',
  methods: {
    ...mapActions([
      'fetchUser'
    ])
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  mounted () {
    this.fetchUser().then((res) => {
      this.$status(res)
    })
  }
}
</script>
