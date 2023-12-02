<template>
  <div class="home">
    <div class="flex items-center p-4">
      <button class="bg-sky-500 p-4 text-white rounded" @click="throwErrorFunc">
        Throw Error
      </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
  methods: {
    throwErrorFunc() {
      throw new Error(`Sentry Error ${new Date()}`);
    },
  },
};
</script>
