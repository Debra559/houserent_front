<template>
    <div class="out">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <h1 class="demo-ruleForm_font">合同表单信息填写</h1>
            <el-form-item label="姓名" prop="name">
                <el-input v-model="ruleForm.name" class="elInout"></el-input>
            </el-form-item>
            <el-form-item label="身份证号码" prop="id_card">
                <el-input v-model="ruleForm.id_card" class="elInout"></el-input>
            </el-form-item>
            <el-form-item label="租赁期" prop="region">
                <el-input v-model="selectedValue" :disabled="true" class="elInout">
                </el-input>
            </el-form-item>
            <el-form-item label="租赁时间" required>
                <el-col :span="11">
                    <el-form-item prop="date1" class="elDate">
                        <el-date-picker type="date" placeholder="开始日期" v-model="ruleForm.date1"></el-date-picker>
                    </el-form-item>
                </el-col>
                <p class="m">-</p>
                <el-col :span="11">
                    <el-form-item prop="date2" class="elDate">
                        <el-date-picker type="date" placeholder="结束日期" v-model="this.resultDate2"
                            :disabled="true"></el-date-picker>
                    </el-form-item>
                </el-col>
            </el-form-item>
            <el-form-item label="租金" prop="rent" class="elInout">
                <div class="t">
                    <el-input v-model="ruleForm.rent"></el-input>&nbsp;￥
                </div>
            </el-form-item>
            <el-form-item label="现居住地" prop="nowPlace" class="elInout">
                <el-input v-model="ruleForm.nowPlace"></el-input>
            </el-form-item>
            <el-form-item class="makeUp">
                <el-button type="primary" @click="submitForm('ruleForm')">创建合同</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>

export default {
    computed: {
        selectedValue() {
            // 从路由参数中获取传递的值
            return this.$route.params.selectedValue;
        }
    },
    data() {

        // 效验身份证号
        var checkId_card = (rule, value, cb) => {
            const regId_card = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
            if (regId_card.test(value)) {
                return cb()
            }
            cb(new Error('请输入合法的身份证号'))
        }

        var checkRent = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('请填写租金'));
            }
            if (!/^[0-9]+$/.test(value)) {
                return callback(new Error('只能填写数字'));
            }
            return callback();
        };

        return {
            resultDate2: '',
            ruleForm: {
                name: '',
                id_card: '',
                region: '',
                date1: '',
                date2: '',
                rent: '',
                nowPlace: '',
            },
            rules: {
                name: [
                    { required: true, message: '请输入姓名', trigger: 'blur' },
                    { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
                ],
                id_card: [
                    { required: true, message: '请输入身份证号', trigger: 'blur' },
                    { validator: checkId_card, trigger: 'blur' }
                ],
                region: [
                    { required: true, message: '请选择租赁期', trigger: 'blur' }
                ],
                date1: [
                    { type: 'date', required: true, message: '请选择开始日期', trigger: 'blur' }
                ],
                rent: [
                    { required: true, message: '请填写租金', trigger: 'blur' },
                    { validator: checkRent, trigger: 'blur' }
                ],
                nowPlace: [
                    { required: true, message: '请填写现居住地', trigger: 'blur' }
                ],
            },
        };
    },
    watch: {
        'ruleForm.date1'(newDate) {
            this.calculateEndDate(newDate);
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        calculateEndDate(startDate) {
            if (startDate instanceof Date) {
                const endDate = new Date(startDate);
                const leaseTerm = this.selectedLeaseTerm();
                endDate.setFullYear(startDate.getFullYear() + Math.floor(leaseTerm / 12)); 
                endDate.setMonth(startDate.getMonth() + leaseTerm % 12); 
                this.resultDate2 = this.formatDate(endDate);
            } else {
                console.error('Invalid start date format:', startDate);
            }
        },
        selectedLeaseTerm() {
            switch (this.selectedValue) {
                case '1个月':
                    return 1;
                case '6个月':
                    return 6;
                case '1年':
                    return 12;
                case '2年':
                    return 24;
                case '5年':
                    return 60;
                default:
                    return 12; // 默认返回1年
            }
        },
        formatDate(date) {
            // 返回和 ruleForm.date1 相同格式的日期字符串
            return date.toString();
        }
    }
}
</script>

<style lang="less" scoped>
.out {
    width: 100%;
    height: 612px;
    display: flex;
    justify-content: center;
    /* 水平居中 */
    align-items: center;
    /* 垂直居中 */
    background-color: rgb(245, 245, 245);
}

.demo-ruleForm {
    box-shadow: 0 8px 16px rgba(64, 158, 255, 0.7);
    background-color: white;
    width: 30%;

    .demo-ruleForm_font {
        display: block;
        margin: 20px auto;
        width: fit-content;
    }

    .elInout {
        width: 60%;
    }

    .elDate {
        width: 130px;
    }

    .makeUp {
        margin: 20px 10%;
    }

}

.t {
    display: flex;
}

.m {
    margin-left: -20px;
    margin-right: 10px;
}
</style>