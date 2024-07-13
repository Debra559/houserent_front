<template>
    <div>
        选中的值是: {{ selectedValue }}
    </div>
</template>

<script>
export default {
  computed: {
    selectedValue() {
      // 从路由参数中获取传递的值
      return this.$route.params.selectedValue;
    }
  }
}
</script>