<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

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
  hideTimer = setTimeout(() => { showBar.value = false }, 3000)
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

function handleFullscreenChange() {
  isFullscreen.value = !!document.fullscreenElement
}

onMounted(() => {
  document.addEventListener('mousemove', resetTimer)
  document.addEventListener('touchstart', resetTimer)
  document.addEventListener('fullscreenchange', handleFullscreenChange)
  resetTimer()
})

onUnmounted(() => {
  document.removeEventListener('mousemove', resetTimer)
  document.removeEventListener('touchstart', resetTimer)
  document.removeEventListener('fullscreenchange', handleFullscreenChange)
  clearTimeout(hideTimer)
})
</script>

<template>
  <div class="app">
    <header class="bar" :class="{ hide: !showBar }">
      <div class="logo">
        <span class="logo-icon">▶</span>
        <span class="logo-text">Subway Surfers</span>
      </div>
      <div class="controls">
        <span class="badge">Berlin</span>
        <button class="btn" @click="toggleFs">
          <svg v-if="!isFullscreen" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3"/>
          </svg>
          <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M8 3v3a2 2 0 0 1-2 2H3M21 8h-3a2 2 0 0 1-2-2V3M3 16h3a2 2 0 0 1 2 2v3M16 21v-3a2 2 0 0 1 2-2h3"/>
          </svg>
        </button>
      </div>
    </header>

    <div v-if="isLoading" class="loader">
      <div class="loader-content">
        <div class="spinner"></div>
        <span>Loading game...</span>
      </div>
    </div>

    <iframe
      ref="iframeRef"
      :src="GAME_URL"
      @load="onLoad"
      class="game-frame"
      sandbox="allow-scripts allow-same-origin allow-pointer-lock"
      allowfullscreen
      tabindex="0"
    />
  </div>
</template>

<style scoped>
.app {
  position: fixed;
  inset: 0;
  background: #0d0d0d;
}

.bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 1rem;
  background: transparent;
  transition: opacity 0.25s, transform 0.25s;
}

.bar.hide {
  opacity: 0;
  transform: translateY(-100%);
  pointer-events: none;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  border-radius: 8px;
  font-size: 0.7rem;
  color: #fff;
}

.logo-text {
  font-size: 0.9rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.02em;
}

.controls {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.badge {
  padding: 0.3rem 0.7rem;
  background: rgba(99,102,241,0.15);
  border: 1px solid rgba(99,102,241,0.3);
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 600;
  color: #a5b4fc;
  letter-spacing: 0.02em;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 10px;
  color: #fff;
  transition: all 0.15s;
}

.btn:hover {
  background: rgba(255,255,255,0.1);
  border-color: rgba(255,255,255,0.2);
  transform: scale(1.05);
}

.btn:active {
  transform: scale(0.95);
}

.loader {
  position: absolute;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0d0d0d;
}

.loader-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(99,102,241,0.2);
  border-top-color: #6366f1;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.loader-content span {
  font-size: 0.85rem;
  font-weight: 500;
  color: rgba(255,255,255,0.6);
}

.game-frame {
  width: 100%;
  height: 100%;
  border: none;
}

@media (max-width: 480px) {
  .logo-text {
    display: none;
  }

  .bar {
    padding: 0.5rem 0.75rem;
  }
}
</style>
