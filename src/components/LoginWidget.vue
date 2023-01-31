<template>
  <div>
    <button
      class="text-blue-500 font-medium hover:text-blue-700 border rounded-full px-4 hover:bg-blue-100"
      @click="handleLogin"
    >
      {{ loginError ? 'Login again' : 'Login with Nurturev Account' }}
    </button>
    <!-- display a message if the login session has expired -->
    <p v-if="loginError" class="text-center text-red-600 text-sm">
      {{ loginError }}
    </p>
  </div>
</template>

<script>
import { getRandomIntInclusive } from '@/utils/misc.js'

export default {
  data() {
    return {
      loginError: '',
    }
  },
  methods: {
    handleLogin() {
      // reset previous states
      this.loginError = ''
      /**
       * The actual login implementation code goes here once the login
       *  is successful emit event to parent component with data
       */
      const probability = this.getDummySuccessProbability()
      console.log('dummy probability is: ', probability)

      if (probability) {
        const successData = { name: 'Deep B', email: 'deep@mail.com' }
        console.log('successfully logged in...', successData)

        // inform parent component about login success
        this.$emit('login-succeeded', successData)
      } else {
        this.loginError = 'Session has expired!'
      }
    },
    getDummySuccessProbability() {
      /**
       * dummy method to return random 0 or 1 to simulate
       * a backend response probability
       */
      return getRandomIntInclusive(0, 1)
    },
  },
}
</script>

<style scoped>
/* local styles goes here */
</style>
