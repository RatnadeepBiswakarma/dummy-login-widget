<template>
  <div class="border rounded p-8 pt-4 max-w-[30rem] mx-auto mt-10">
    <h1 class="text-2xl text-center mb-4 border-b">My App</h1>
    <div class="text-right">
      <LogoutButton v-if="isLoggedIn" @click="handleLogout" />
      <!-- the plug & play login widget -->
      <LoginWidget v-else @login-succeeded="handleLoginSuccess" />
      <!--  -->
    </div>
    <main class="border-t mt-4 pt-4">
      <PublicContent />

      <PrivateContent v-if="isLoggedIn" class="mt-4 border-t pt-4" />
    </main>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import PublicContent from '@/views/PublicContent.vue'
import PrivateContent from '@/views/PrivateContent.vue'
import LoginWidget from '@/components/LoginWidget.vue'
import LogoutButton from '@/components/LogoutButton.vue'

export default {
  components: {
    LoginWidget,
    LogoutButton,
    PublicContent,
    PrivateContent,
  },
  computed: {
    ...mapState(['isLoggedIn']),
  },
  methods: {
    ...mapActions(['updateLoginStatus']),
    handleLoginSuccess(data) {
      console.log(data)
      /* validate this data from backend */
      // and then update client state with login status
      this.updateLoginStatus(true)
    },
    handleLogout() {
      // remove local data and update client state
      this.updateLoginStatus(false)
    },
  },
}
</script>

<style scoped>
/*  */
</style>
