<template>
  <div class="container">
    <div class="row">
      <div v-for="(anime, index) in animes" class="col-12" :key="index">
        <img :src="anime.cover_link" />
        <div>{{ anime.name_jp }}</div>
        <div>{{ anime.name_en }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import animesjson from "~/resources/anime.json";

const animes = ref(animesjson);
</script>

<style lang="scss" scoped></style>
