<template>
  <div class="m-4">
    <el-cascader
      placeholder="请选择你想选择的区域"
      :options="options"
      size="large"
     
      filterable
      style="width:400px ;opacity:0.7;"
    />
  </div>
</template>

<script lang="ts" setup>
const props = {
  multiple: true,
}

const options = [
  {
    value: 'wuhan',
    label: '武汉',
    children: [
      {
        value: 'hongshan',
        label: '洪山区',
        children: [
          {
            value: 'guanggu',
            label: '光谷',
          },
          {
            value: 'yangchunhu',
            label: '杨春湖',
          },
          {
            value: 'nanhu_gardon',
            label: '南湖花园',
          },
          {
            value: 'zhuodaoquan',
            label: '卓刀泉',
          },
          {
            value: 'baishazhou',
            label: '白沙洲',
          },
          {
            value: 'guangbutun',
            label: '广埠屯',
          },
        ],
      },
      {
        value: 'jianghan',
        label: '江汉区',
        children: [
          {
            value: 'jianghanbuxingjie',
            label: '江汉步行街',
          },
          {
            value: 'hankouzhan',
            label: '汉口站',
          },
        ],
      },
    ],
  },
  {
    value: 'changsha',
    label: '长沙',
    children: [
      {
        value: 'wangcheng',
        label: '望城区',
        children: [
          {
            value: 'xingsheng',
            label: '兴盛',
          },
          {
            value: 'yangjialaowu',
            label: '杨家老屋',
          },
          {
            value: 'liujiawan',
            label: '刘家湾',
          },
          {
            value: 'wusahnsenlingongyuan',
            label: '乌山森林公园',
          },
          {
            value: 'shikengzi',
            label: '石坑子',
          },
        ],
      },
      {
        value: 'furong',
        label: '芙蓉区',
        children: [
          {
            value: 'dufujiangge',
            label: '杜甫江阁',
          },
          {
            value: 'xiangjiang',
            label: '湘江',
          },
          {
            value: 'houjiatang',
            label: '侯家塘',
          },
          {
            value: 'huangtuling',
            label: '黄土岭',
          },
          {
            value: 'xintiancun',
            label: '新天村',
          },
          {
            value: 'zhangjiacun',
            label: '张家村',
          },
          {
            value: 'xianfengzhan',
            label: '先锋站',
          },
          {
            value: 'hunanmu',
            label: '湖南木',
          },
          {
            value: 'lijiawanzu',
            label: '李家湾组',
          },
          {
            value: 'huangyatangzu',
            label: '黄鸭塘组',
          },
          {
            value: 'fengchengliuzu',
            label: '丰城六组',
          },
          {
            value: 'changjiangshengtaidongwuyuan',
            label: '长江生态动物园',
          },
          {
            value: 'xuxingcun',
            label: '许兴村',
          },
          {
            value: 'xiangtangzu',
            label: '响塘组',
          },
        ],
      },
      {
        value: 'yuelu',
        label: '岳麓区',
        children: [
          {
            value: 'yuelushan',
            label: '岳麓山',
          },
          {
            value: 'taohualing',
            label: '桃花岭',
          },
          {
            value: 'zhaizilingsenlingongyuan',
            label: '寨子岭森林公园',
          },
          {
            value: 'dawangshan',
            label: '大王山',
          },
          {
            value: 'dashibasenlingongyuan',
            label: '大石坝森林公园',
          },
          {
            value: 'lianhuazhen',
            label: '莲花镇',
          },
        ],
      },


      // {
      //   value: 'notice',
      //   label: 'Notice',
      //   children: [
      //     {
      //       value: 'alert',
      //       label: 'Alert',
      //     },
      //     {
      //       value: 'loading',
      //       label: 'Loading',
      //     },
      //     {
      //       value: 'message',
      //       label: 'Message',
      //     },
      //     {
      //       value: 'message-box',
      //       label: 'MessageBox',
      //     },
      //     {
      //       value: 'notification',
      //       label: 'Notification',
      //     },
      //   ],
      // },


      // {
      //   value: 'navigation',
      //   label: 'Navigation',
      //   children: [
      //     {
      //       value: 'menu',
      //       label: 'Menu',
      //     },
      //     {
      //       value: 'tabs',
      //       label: 'Tabs',
      //     },
      //     {
      //       value: 'breadcrumb',
      //       label: 'Breadcrumb',
      //     },
      //     {
      //       value: 'dropdown',
      //       label: 'Dropdown',
      //     },
      //     {
      //       value: 'steps',
      //       label: 'Steps',
      //     },
      //   ],
      // },




      // {
      //   value: 'others',
      //   label: 'Others',
      //   children: [
      //     {
      //       value: 'dialog',
      //       label: 'Dialog',
      //     },
      //     {
      //       value: 'tooltip',
      //       label: 'Tooltip',
      //     },
      //     {
      //       value: 'popover',
      //       label: 'Popover',
      //     },
      //     {
      //       value: 'card',
      //       label: 'Card',
      //     },
      //     {
      //       value: 'carousel',
      //       label: 'Carousel',
      //     },
      //     {
      //       value: 'collapse',
      //       label: 'Collapse',
      //     },
      //   ],
      // },
    ],
  },


  {
    value: 'nanchang',
    label: '南昌',
    children: [
      {
        value: 'donghu',
        label: '东湖区',
      },
      {
        value: 'xihu',
        label: '西湖区',
      },
      {
        value: 'qingshanhu',
        label: '青山湖区',
      },
    ],
  },
]
</script>

