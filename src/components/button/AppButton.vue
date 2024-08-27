<template>
  <button
    type="button"
    class="cursor-pointer padding-horizontal-1 padding-vertical-05 border-none border-radius-025 background-secondary color-secondary shadow transition-02"
    data-app-button
  >
    <slot></slot>
  </button>
</template>

<style>
button[data-app-button] {
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
}

.hover button[data-app-button]:hover,
button[data-app-button]:active {
  opacity: 0.7;
}

button[data-app-button]::after {
  content: '';
  height: 100%;
  width: 100%;
  pointer-events: none;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background-image: radial-gradient(circle at center, white 10%, transparent 10%);
  background-repeat: no-repeat;
  background-position: 50%;
  opacity: 0;
  transform: scale(10, 10);
  transition: all 0.4s ease-out;
}

button[data-app-button]:active::after {
  transform: scale(0, 0);
  opacity: 0.4;
  transition: 0s;
}
</style>
