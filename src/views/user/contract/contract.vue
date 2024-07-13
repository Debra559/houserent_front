<template>
  <div class="content">
    <div class="up">
      <h1 class="h1">房屋租赁合同</h1>
    </div>
    <div class="inner">
      <p>出租方（以下简称甲方）：<span style="color: red">{{ ruleForm.name }}</span> </p>
      <p>承租方（以下简称乙方）：<span style="color: red">本公司</span> </p>
      <p>根据《中华人民共和国合同法》及有关规定，为明确甲、乙双方的权利义务关系，经双方协商一致，签订本合同。</p>
      <p>第一条 甲方将坐落在 <span style="color: red">{{ homeInfo.address }}</span> 的房屋，建筑面积 <span style="color: red">{{
        homeInfo.area }}</span> 平方米，出租给乙方使用。装修及设备情况：</p>
      <p>第二条 租赁期限</p>
      <p>租赁期共 <span style="color: red">{{ selectedValue }}</span> ，甲方从 <span style="color: red">{{ this.startTime
          }}</span> 起将此房屋交付乙方使用，至 <span style="color: red">{{ this.endTime }}</span> 止。 </p>
      <p>乙方如利用承租房屋进行非法活动，损害公共利益的。甲方可以终止合同，收回房屋。</p>
      <p>合同期满后，如甲方仍继续出租房屋，乙方在同等条件下拥有优先承租权。租赁合同因期满而终止时，如乙方确实无法找到新的房屋，可与甲方协商酌情延长租赁期限。</p>
      <p>第三条 租金、交纳期限和交纳方式</p>
      <p>甲乙双方议定月租金 <span style="color: red">{{ ruleForm.rent }}</span>
        元，计人民币（大写） <span style="color: red">{{ changeMoney(ruleForm.rent) }}</span>
        元；押金：<span style="color: red">{{ sumDeposit(selectedValue, ruleForm) }}</span> 元，计人民币（大写） <span
          style="color: red">{{ changeMoney(sumDeposit(selectedValue, ruleForm)) }}</span> 元。由乙方在 <span
          style="color: red">{{ giveMoneyTime(this.startTime) }}</span> 交纳给甲方。 </p>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.ruleForm)
    this.changeTime()
  },
  props: {
    ruleForm: {
      type: Object,
      required: true,
    },
    homeInfo: {
      type: Object,
      required: true,
    },
    selectedValue: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      startTime: '',
      endTime: '',
      deposit: '',
    };
  },
  methods: {
    // 改变时间格式的函数
    changeTime() {
      // 处理 date1
      let date1Obj = new Date(this.ruleForm.date1);
      let year1 = date1Obj.getFullYear();
      let month1 = date1Obj.getMonth() + 1; // 月份是从 0 开始计数的，需要加 1
      let day1 = date1Obj.getDate();
      this.startTime = `${year1}年${month1}月${day1}日`;

      // 处理 date2
      let date2Obj = new Date(this.ruleForm.date2);
      let year2 = date2Obj.getFullYear();
      let month2 = date2Obj.toLocaleString('default', { month: 'short' }); // 获取月份的简称
      let day2 = date2Obj.getDate();
      this.endTime = `${year2}年${month2}${day2}日`;
    },
    // 得到钱数大写的函数
    changeMoney(money) {
      if (isNaN(money)) {
        return '请输入有效的数字金额';
      }

      let numArr = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
      let unitArr = ['', '拾', '佰', '仟'];
      let bigUnitArr = ['', '万', '亿'];

      let moneyStr = money.toString();
      let len = moneyStr.length;

      let resultArr = [];

      for (let i = 0; i < len; i++) {
        let num = parseInt(moneyStr.charAt(i));
        let unit = len - i - 1;
        let bigUnit = Math.floor(unit / 4);
        unit %= 4;

        if (num === 0) {
          if (resultArr.length === 0 || resultArr[resultArr.length - 1] !== '零') {
            resultArr.push('零');
          }
        } else {
          resultArr.push(numArr[num] + unitArr[unit]);
        }

        if (unit === 0 && bigUnit > 0 && resultArr[resultArr.length - 1] !== bigUnitArr[bigUnit]) {
          resultArr.push(bigUnitArr[bigUnit]);
        }
      }

      return resultArr.join('');
    },
    // 计算总押金的函数(月的话押1付3，年的话押1付1)
    sumDeposit(selectedValue, ruleForm) {
      let lastChar = selectedValue.charAt(selectedValue.length - 1);

      if (lastChar === '月') {
        return ruleForm.rent * 3;
      } else if (lastChar === '年') {
        return ruleForm.rent;
      } else {
        return null;
      }
    },
    // 计算交钱日期的函数(提前一周交钱)
    giveMoneyTime(startTimeString) {
      let startDate = new Date(startTimeString.replace(/年|月/g, '-').replace(/日/, ''));

      startDate.setDate(startDate.getDate() - 7);

      let year = startDate.getFullYear();
      let month = startDate.getMonth() + 1;
      let day = startDate.getDate();

      let formattedDate = `${year}年${month}月${day}日`;

      return formattedDate;
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  .up {
    text-align: center;
  }

  .inner {
    font-family: 'SimSun', '宋体', 'NSimSun', 'Songti SC', serif;
    font-size: 18px
  }
}
</style>