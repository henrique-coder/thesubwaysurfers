<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const GAME_URL = 'https://files.ufreegame.net/1024/subway-surfers-berlin/'

const iframeRef = ref(null)
const isLoading = ref(true)
const showBar = ref(true)
const isFullscreen = ref(false)

let hideTimer = null

function onLoad() {
  isLoading.value = false
  setTimeout(() => iframeRef.value?.focus(), 300)
}

function resetTimer() {
  showBar.value = true
  clearTimeout(hideTimer)
  hideTimer = setTimeout(() => { showBar.value = false }, 2500)
}

async function toggleFs() {
  try {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen()
      isFullscreen.value = true
    } else {
      await document.exitFullscreen()
      isFullscreen.value = false
    }
  } catch {}
}

function goBack() {
  router.push('/')
}

onMounted(() => {
  document.addEventListener('mousemove', resetTimer)
  document.addEventListener('touchstart', resetTimer)
  resetTimer()
})

onUnmounted(() => {
  document.removeEventListener('mousemove', resetTimer)
  document.removeEventListener('touchstart', resetTimer)
  clearTimeout(hideTimer)
  if (document.fullscreenElement) document.exitFullscreen().catch(() => {})
})
</script>

<template>
  <div class="game">
    <div class="bar" :class="{ hide: !showBar }">
      <button class="back" @click="goBack">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        Back
      </button>
      <span class="title">Berlin</span>
      <button class="fs" @click="toggleFs">
        <svg v-if="!isFullscreen" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3"/></svg>
        <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3v3a2 2 0 0 1-2 2H3M21 8h-3a2 2 0 0 1-2-2V3M3 16h3a2 2 0 0 1 2 2v3M16 21v-3a2 2 0 0 1 2-2h3"/></svg>
      </button>
    </div>
    <div v-if="isLoading" class="loader"><div class="spin"/></div>
    <iframe
      ref="iframeRef"
      :src="GAME_URL"
      @load="onLoad"
      class="frame"
      sandbox="allow-scripts allow-same-origin allow-pointer-lock"
      allowfullscreen
      tabindex="0"
    />
  </div>
</template>

<style scoped>
.game {
  position: fixed;
  inset: 0;
  background: #000;
}

.bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4rem 0.6rem;
  background: linear-gradient(180deg, rgba(0,0,0,0.7), transparent);
  transition: opacity 0.2s, transform 0.2s;
}

.bar.hide {
  opacity: 0;
  transform: translateY(-100%);
  pointer-events: none;
}

.back, .fs {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.35rem 0.7rem;
  background: rgba(255,255,255,0.1);
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
  color: #fff;
  transition: background 0.15s;
}

.back:hover, .fs:hover {
  background: rgba(255,255,255,0.18);
}

.fs {
  padding: 0.4rem;
}

.title {
  font-size: 0.8rem;
  font-weight: 600;
  color: #fff;
}

.loader {
  position: absolute;
  inset: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0a0a0a;
}

.spin {
  width: 28px;
  height: 28px;
  border: 2px solid rgba(255,255,255,0.15);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }

.frame {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
