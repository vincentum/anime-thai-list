<template>
  <div v-if="anime" class="container">
    <div class="row m-2">
      <div class="col-12 col-md-4">
        <el-image class="cover" fit="contain" :src="anime.cover_link" />
      </div>
      <div class="title-container col-8 p-2">
        <div class="title_jp">{{ anime.name_jp }}</div>
        <div class="title_en">{{ anime.name_en }}</div>
        <div class="title_th">{{ anime.name_th }}</div>
      </div>
      <div class="season col-12">
        <div class="title">Season</div>
        <template v-if="anime.seasons">
          <div
            v-for="(season, seasonIndex) in anime.seasons"
            :key="seasonIndex"
          >
            <li>{{ season.name }}</li>
            <template v-if="season.sources">
              <ul>
                <div
                  v-for="(source, sourceIndex) in season.sources"
                  :key="sourceIndex"
                >
                  <li>{{ source.name }}</li>
                  <div>Dub: {{ source.dub ? source.dub.join(", ") : "-" }}</div>
                  <div>Sub: {{ source.sub ? source.sub.join(", ") : "-" }}</div>
                </div>
              </ul>
            </template>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import animesjson from "~/resources/anime.json";
import { Anime } from "~/types/anime";

const route = useRoute();

const anime = ref<Anime | null>(null);
const id = route.params.id as string;
const animes: { [iid: string]: Anime } = animesjson;

if (animesjson && animes[id]) {
  anime.value = animes[id];
}
</script>

<style lang="scss" scoped>
.cover {
  width: 100%;
  height: 350px;
  background-color: black;
}

.title-container {
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

.season {
  .title {
    font-size: 18px;
    font-weight: bold;
  }
}
</style>
