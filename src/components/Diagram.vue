<script setup>
import { ref, onMounted, toRefs } from 'vue'
import { dia, shapes, elementTools } from '@clientio/rappid/rappid.js';

const props = defineProps({
  msg: String
});

const { msg } = toRefs(props);

const canvas = ref(null)

onMounted(() => {

  const paper = new dia.Paper({
    el: canvas.value
  });

  const element = new shapes.standard.BorderedImage({
    size: { width: 100, height: 100 },
    position: { x: 100, y: 100 },
    attrs: {
      label: {
        fontFamily: 'Avenir, Helvetica, Arial, sans-serif',
        text: msg.value
      },
      image: {
        xlinkHref: 'https://via.placeholder.com/100/0000FF'
      }
    }
  });

  paper.model.addCell(element);

  const toolsView = new dia.ToolsView({
    tools: [new elementTools.Remove()]
  });

  element.findView(paper).addTools(toolsView);
});
</script>

<template>
  <div class="diagram" ref="canvas"></div>
</template>

<style>
@import '@clientio/rappid/rappid.css';
</style>

<style scoped>
.diagram {
  border: 1px solid lightgray;
  margin: auto;
}
.diagram:deep(.joint-element > rect) {
  stroke: #39495C;
}
</style>
