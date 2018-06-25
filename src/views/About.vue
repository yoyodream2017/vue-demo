<template>
  <div class="about">
    <h1>This is an about page</h1>
    <is-loading></is-loading>
    <div>
      <div>firstName: {{userInfo.firstName}}</div>
      <div>LastName: {{userInfo.lastName}}</div>
      <div>gender: {{userInfo.gender}}</div>
    </div>
    <button v-bind:disabled="isButtonDisabled">Button</button>&nbsp;
    <button :disabled="isButtonDisabled">Button</button>&nbsp;
    <a v-on:click="clickEvent">Hello</a>&nbsp;
    <a @click="clickEvent">Hello</a>
    <div>
      <span v-for="(user, index) in userList" :key="user.id">
        {{user.name}}--{{user.age}}
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'about',
  data () {
    return {
      isButtonDisabled: false,
      userList: [
        { id: 1, name: 'a', age: 18 },
        { id: 2, name: 'b', age: 19 },
      ]
    }
  },
  methods: {
    ...mapActions([
      'fetchUser'
    ]),
    clickEvent: function () {
      console.log('Hello')
    }
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
<style scoped lang="scss">
  a {
    text-decoration: underline;
    color: blue;

    &:hover {
      cursor: pointer;
      color: red;
    }
  }
</style>
