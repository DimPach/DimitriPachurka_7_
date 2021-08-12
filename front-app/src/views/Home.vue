<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <navComponent/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <article v-for="item in forums" :key="item.id">
      <displayForum :id="item.id" :message="item.message" :userFirstname="item.userFirstname"/>
    </article>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import navComponent from '@/components/nav.vue'
import displayForum from '@/components/displayForum.vue'

export default {
  name: 'Home',
  data() {
    return {
      forums: [
        {
          id: 1, message: "Wesh", userFirstname: "John"
        },
        {
          id: 2, message: "Wesh le S", userFirstname: "Dick"
          },
        {
          id: 3, message: "Wesh", userFirstname: "Brad"
          }
      ]
    }
  },
  components: {
    HelloWorld,
    navComponent,
    displayForum
  }
}
</script>
