<template>
  <div class="container">
    <div class="row m-2">
      <div
        v-for="(anime, index) in animes"
        :key="index"
        class="list-container col-12 col-md-6 col-lg-3 p-2"
        @click="handleSelectAnime(index)"
      >
        <div class="list-item">
          <img class="cover" :src="anime.cover_link" />
          <div class="description p-2">
            <div class="title_jp">{{ anime.name_jp }}</div>
            <div class="title_en">{{ anime.name_en }}</div>
            <div class="title_th">{{ anime.name_th }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import animesjson from "~/resources/anime.json";

const animes = ref(animesjson);

const handleSelectAnime = (id: string) => {
  useRouter().push(id);
};
</script>

<style lang="scss" scoped>
.list-container {
  cursor: pointer;

  .list-item {
    border: #4d5154 solid 1px;
    border-radius: 10px;
    overflow: hidden;

    .cover {
      width: 100%;
      height: 350px;
      object-fit: contain;
      background-color: black;
    }

    .description {
      .title_jp {
        font-size: 18px;
        font-weight: bold;
      }

      .title_en {
        font-size: 16px;
      }

      .title_th {
        font-size: 16px;
      }
    }
  }
}
</style>
