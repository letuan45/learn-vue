<script setup>
import Hero from "@/components/Hero.vue";
import HomeCard from "@/components/HomeCard.vue";
import JobList from "@/components/Jobs/JobList.vue";
</script>

<template>
  <Hero />
  <HomeCard />
  <JobList :limit="3" :isShowButton="true" />
</template>
