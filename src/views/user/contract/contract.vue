<template>
  <div class="content" ref="content">
    <div class="up">
      <h1 class="h1">房屋租赁合同</h1>
    </div>
    <div class="inner">
      <p>&nbsp;&nbsp;出租方（以下简称甲方）：<span style="color: red">{{ ruleForm.name }}</span> </p>
      <p>&nbsp;&nbsp;承租方（以下简称乙方）：<span style="color: red">本公司</span> </p>
      <p>&nbsp;&nbsp;根据《中华人民共和国合同法》及有关规定，为明确甲、乙双方的权利义务关系，经双方协商一致，签订本合同。</p>
      <p>&nbsp;&nbsp;第一条 甲方将坐落在 <span style="color: red">{{ homeInfo.address }}</span> 的房屋，建筑面积 <span
          style="color: red">{{
            homeInfo.area }}</span> 平方米，出租给乙方使用。装修及设备情况：</p>
      <p>&nbsp;&nbsp;第二条 租赁期限</p>
      <p>&nbsp;&nbsp;租赁期共 <span style="color: red">{{ selectedValue }}</span> ，甲方从 <span style="color: red">{{
        this.startTime
          }}</span> 起将此房屋交付乙方使用，至 <span style="color: red">{{ this.endTime }}</span> 止。 </p>
      <p>&nbsp;&nbsp;乙方如利用承租房屋进行非法活动，损害公共利益的。甲方可以终止合同，收回房屋。</p>
      <p>&nbsp;&nbsp;合同期满后，如甲方仍继续出租房屋，乙方在同等条件下拥有优先承租权。租赁合同因期满而终止时，如乙方确实无法找到新的房屋，可与甲方协商酌情延长租赁期限。</p>
      <p>&nbsp;&nbsp;第三条 租金、交纳期限和交纳方式</p>
      <p>&nbsp;&nbsp;甲乙双方议定月租金 <span style="color: red">{{ ruleForm.rent }}</span>
        元，计人民币（大写） <span style="color: red">{{ changeMoney(ruleForm.rent) }}</span>
        元；押金：<span style="color: red">{{ sumDeposit(selectedValue, ruleForm) }}</span> 元，计人民币（大写） <span
          style="color: red">{{ changeMoney(sumDeposit(selectedValue, ruleForm)) }}</span> 元。由乙方在 <span
          style="color: red">{{ giveMoneyTime(this.startTime) }}</span> 交纳给甲方。 </p>
      <p>&nbsp;&nbsp;第四条 租赁期间的房屋修缮</p>
      <p>
        &nbsp;&nbsp;甲方对出租房屋及其设备应定期检查，及时修缮，做到不漏、不淹、三通（户内上水、下水、照明电）和门窗好，以保障乙方安全正常使用。乙方在租赁期间，如出现房屋水、电、暖设施异常，甲方因积极修缮，以防止乙方财产遭受损失，如因甲方不予修缮造成的损失由甲方承担，乙方应当积极配合。
      </p>
      <p>&nbsp;&nbsp;第五条 租赁双方的变更</p>
      <p>&nbsp;&nbsp;1．如甲方按法定手续程序将房产所有权转移给第三方时，在无约定的情况下，本合同对新的房产所有者继续有效；</p>
      <p>&nbsp;&nbsp;2．乙方需要与第三人互换用房时，应事先征得甲方同意，甲方应当支持乙方的合理要求。</p>
      <p>&nbsp;&nbsp;第六条 违约责任</p>
      <p>&nbsp;&nbsp;1．如甲方在合同期内，将房屋收回，违约责任由甲方自行承担，并赔偿乙方因此遭受的损失，甲方必须无条件退还乙方剩余房租，并赔偿三个月的房租作为对乙方的补偿。</p>
      <p>&nbsp;&nbsp;2．乙方未履行本合同约定的条款，将支付甲方三个月的房租作为补偿。</p>
      <p>&nbsp;&nbsp;第八条 免责条款</p>
      <p>&nbsp;&nbsp;1．房屋如因不可抗拒的原因导致损毁或造成乙方损失的，甲乙双方互不承担责任。</p>
      <p>&nbsp;&nbsp;2．因市政建设需要拆除或改造已租赁的房屋，使甲乙双方造成损失，互不承担责任。</p>
      <p>&nbsp;&nbsp;因上述原因而终止合同的，租金按实际使用时间计算，多退少补。</p>
      <p>&nbsp;&nbsp;第十条 争议解决的方式 </p>
      <p>&nbsp;&nbsp;本合同在履行中如发生争议，双方应协商解决；协商不成时，任何一方均可向房屋租赁管理机关申请调解，调解无效时，可向经济合同仲裁委员会申请仲裁，也可向人民法院起诉。</p>
      <p>&nbsp;&nbsp;第十一条 其他约定事宜</p>
      <p>&nbsp;&nbsp;第十二条 本合同未尽事宜，甲乙双方可共同协商。</p>
      <p>&nbsp;&nbsp;本合同一式2份，甲乙方各执1份。从签字之日起生效，到期自动作废。</p>
    </div>
    <div class="down">
      <div class="left">
        <p>甲方姓名：<span style="color: red">{{ ruleForm.name }}</span> </p>
        <p>身份证号：<span style="color: red">{{ ruleForm.id_card }}</span> </p>
        <p>现住址：<span style="color: red">{{ ruleForm.nowPlace }}</span></p>
        <p><span style="color: red">{{ this.nowTime }}</span></p>
      </div>
      <div class="right">
        <p>已方姓名：<span style="color: red">本公司</span> </p>
        <p>公司地址：<span style="color: red">华中农业大学</span></p>
        <p><span style="color: red">{{ this.nowTime }}</span></p>
      </div>
    </div>
    <div class="down_down">
      <el-button type="primary" @click="submitContract">
        我已阅读并同意上述合同
      </el-button>
      <el-button type="success" plain @click="goPrint">
        下载 打印
      </el-button>
    </div>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus'
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
export default {
  created() {
    console.log(this.ruleForm)
    this.changeTime()
    this.getNowTime()
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
      nowTime: '',
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
    },

    // 获取现在的时间
    getNowTime() {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');

      this.nowTime = `${year}年${month}月${day}日`;
    },

    // 提交合同
    submitContract() {
      this.Success()
    },

    // 下载合同

    async goPrint() {
      const content = this.$refs.content;
      const downDownSection = content.querySelector('.down_down');
      downDownSection.style.display = 'none';

      try {
        const canvas = await html2canvas(content, { scale: 2 });
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');

        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('合同.pdf');
      } catch (error) {
        console.error('Error generating PDF:', error);
      } finally {
        downDownSection.style.display = 'block';
      }
    },

    Success() {
      ElMessage({
        message: '提交合同成功!',
        type: 'success',
      })
    },
  }
}
</script>

<style lang="less" scoped>
.content {
  width: 70%;
  border: 2px solid black;
  padding: 10px;
  margin: 0 auto;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .up {
    text-align: center;
  }

  .inner {
    font-family: 'SimSun', '宋体', 'NSimSun', 'Songti SC', serif;
    font-size: 18px;
  }

  .down {
    font-family: 'SimSun', '宋体', 'NSimSun', 'Songti SC', serif;
    font-size: 18px;
    display: flex;
    justify-content: center;
    width: 100%;

    .right {
      margin-left: 30px;
    }


  }
}
</style>