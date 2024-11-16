<template>
  <div
    v-if="showPopup"
    class="apex-popup"
  >
    <div
      :class="[ani, animation ? 'ani' : '', !custom ? 'apex-custom' : '', opacity ? 'opacity_none' : '']"
      class="apex-popup__mask"
      :style="{'background-color':maskColor}"
      @click="close(true)"
      @touchmove.prevent
    ></div>
    <div
      :class="[type, ani, animation ? 'ani' : '', !custom ? 'apex-custom' : '']"
      class="apex-popup__wrapper"
      @click="close(true)"
    >
      <div
        :style="{ 'background-color': bgColor ,'border-radius': borderRadius}"
        class="apex-popup__wrapper-box"
        :class="{
          padding_zero: isPadding,
          coverAll: type === 'center' && isCoverAll,
          autoheight: isAutoHeight,
          autowidth: isAutoWidth
        }"
        @click.stop="clear"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, watch, getCurrentInstance, onMounted, onUnmounted} from 'vue';
const {proxy}=getCurrentInstance();
const props = defineProps({
  isAutoWidth: {
    type: Boolean,
    default: false
  },
  isAutoHeight: {
    type: Boolean,
    default: false
  },
  opacity: {
    type: Boolean,
    default: false
  },
  zIndex: {
    type: String,
    default: 'center'
  },
  isCoverAll: {
    type: Boolean,
    default: false
  },
  isPadding: {
    type: Boolean,
    default: false
  },
  bgColor: {
    type: String,
    default: 'rgba(255, 255, 255, 1)',
  },
  borderRadius: {
    type: String,
    default: '10px',
  },
  maskColor: {
    type: String,
    default: 'rgba(0, 0, 0, .1)',
  },
  // 开启动画
  animation: {
    type: Boolean,
    default: true
  },
  // 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层
  type: {
    type: String,
    default: 'center'
  },
  // 是否开启自定义
  custom: {
    type: Boolean,
    default: false
  },
  // maskClick
  maskClick: {
    type: Boolean,
    default: true
  },
  show: {
    type: Boolean,
    default: true
  }
});

const ani = ref('');
const showPopup = ref(false);

watch(
    () => props.show,
    (newValue) => {
      if (newValue) {
        open();
      } else {
        close();
      }
    }
);
function clear() {}

function open() {
  emit('change', { show: true });
  showPopup.value = true;
  document.body.style.overflowY = 'hidden'
  proxy.$nextTick(() => {
    setTimeout(() => {
      ani.value = 'apex-' + props.type;
    }, 30);
  });
}

function close(type) {
  if (!props.maskClick && type) return;
  emit('change', { show: false });
  ani.value = '';
  proxy.$nextTick(() => {
    setTimeout(() => {
      showPopup.value = false;
      document.body.style.overflowY = 'auto'
    }, 300);
  });
}

const emit = defineEmits(['change']);
onMounted(()=>{
})
onUnmounted(() => {
  // 恢复 body 滚动
})
</script>
<style scoped>
.apex-popup {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  overflow: hidden;
}

.apex-popup__mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 998;
  opacity: 0;
  transition: all 0.3s;
}

.apex-popup__mask.apex-top,
.apex-popup__mask.apex-bottom,
.apex-popup__mask.apex-center {
  opacity: 1;
}

.apex-popup__mask.apex-top.opacity_none,
.apex-popup__mask.apex-bottom.opacity_none,
.apex-popup__mask.apex-center.opacity_none {
  opacity: 0;
}

.apex-popup__wrapper {
  position: absolute;
  z-index: 999;
  box-sizing: border-box;
  transition: all 0.3s;
}

.apex-popup__wrapper.top {
  top: 0;
  left: 0;
  width: 100%;
  transform: translateY(-100%);
}

.apex-popup__wrapper.bottom {
  bottom: 0;
  left: 0;
  width: 100%;
  transform: translateY(100%);
}

.apex-popup__wrapper.center {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(1.2);
  opacity: 0;
}

.apex-popup__wrapper-box {
  position: relative;
  box-sizing: border-box;
}

.apex-popup__wrapper.apex-custom .apex-popup__wrapper-box {
  padding: 30upx;
}

.apex-popup__wrapper.apex-custom .apex-popup__wrapper-box.padding_zero {
  padding: 0;
}

.apex-popup__wrapper.apex-custom.center .apex-popup__wrapper-box {
  position: relative;
  width: 85%;
  height: 85%;
}

.apex-popup__wrapper.apex-custom.center .apex-popup__wrapper-box.autoheight {
  height: auto;
}

.apex-popup__wrapper.apex-custom.center .apex-popup__wrapper-box.autowidth {
  width: auto;
}

.apex-popup__wrapper.apex-custom.center .apex-popup__wrapper-box.coverAll {
  max-width: 100%;
  width: 100%;
  max-height: 100%;
  height: 100%;
}

.apex-popup__wrapper.apex-custom.top .apex-popup__wrapper-box,
.apex-popup__wrapper.apex-custom.bottom .apex-popup__wrapper-box {
  width: 100%;
  max-height: 500px;
  overflow-y: scroll;
}

.apex-popup__wrapper.apex-top,
.apex-popup__wrapper.apex-bottom {
  transform: translateY(0);
}

.apex-popup__wrapper.apex-center {
  transform: scale(1);
  opacity: 1;
}
</style>
