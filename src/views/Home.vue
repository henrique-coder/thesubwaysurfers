<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function play() {
  router.push('/play')
}
</script>

<template>
  <div class="home">
    <img src="/game_background.jpg" alt="" class="bg" fetchpriority="high" loading="eager" decoding="async" />
    <div class="overlay" />
    <main class="content">
      <img src="/game_text.svg" alt="Subway Surfers" class="logo" loading="eager" />
      <button class="play-btn" @click="play">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        Play Now
      </button>
    </main>
  </div>
</template>

<style scoped>
.home {
  position: fixed;
  inset: 0;
}

.bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.5);
}

.content {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  text-align: center;
  padding: 2rem;
  padding-bottom: 15vh;
}

.logo {
  width: min(400px, 85vw);
  filter: drop-shadow(0 4px 24px rgba(0,0,0,0.5));
}

.play-btn {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1.1rem 3rem;
  background: #22c55e;
  border-radius: 60px;
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  box-shadow: 0 6px 30px rgba(34,197,94,0.45);
  transition: transform 0.15s, box-shadow 0.15s;
}

.play-btn:hover {
  transform: scale(1.06);
  box-shadow: 0 8px 40px rgba(34,197,94,0.55);
}

.play-btn:active {
  transform: scale(0.97);
}

@media (max-width: 480px) {
  .play-btn {
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
  }
}
</style>
