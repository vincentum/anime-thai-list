<template>
  <div v-if="anime" class="container">
    <div class="row m-2">
      <div class="list-container col-12 col-md-6 col-lg-3 p-2">
        <div class="list-item">
          <img class="cover" :src="anime.cover_link" />
          <div class="description p-2">
            <div class="title_jp">{{ anime.name_jp }}</div>
            <div class="title_en">{{ anime.name_en }}</div>
          </div>
          <div>
            <div>Season</div>
            <template v-if="anime.seasons">
              <div
                v-for="(season, seasonIndex) in anime.seasons"
                :key="seasonIndex"
              >
                <div>{{ season.name }}</div>
                <template v-if="season.sources">
                  <div>
                    <div
                      v-for="(source, sourceIndex) in season.sources"
                      :key="sourceIndex"
                    >
                      <div>{{ source.name }}</div>
                    </div>
                  </div>
                </template>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import animesjson from "~/resources/anime.json";

const route = useRoute();

const anime = ref(null);

if (animesjson[route.params.id]) {
  anime.value = animesjson[route.params.id];
}
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
    }
  }
}
</style>
