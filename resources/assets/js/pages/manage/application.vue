<template>
    <div class="page-apply">

        <PageTitle :title="$L('应用')" />

        <div class="apply-wrapper">
            <div class="apply-head">
                <div class="apply-nav">
                    <h1>{{ $L('应用') }}</h1>
                </div>
            </div>
            <div class="apply-content">
                <template v-for="t in applyListTypes">
                    <div v-if="isExistAdminList"  class="apply-row-title">
                        {{ t == 'base' ? $L('常用') : $L('管理员') }}
                    </div>
                    <Row :gutter="16">
                        <Col v-for="(item, key) in applyList" :key="key"
                            v-if="((t=='base' && !item.type) || item.type == t) && item.show !== false"
                            :xs="{ span: 6 }"
                            :sm="{ span: 6 }"
                            :lg="{ span: 6 }"
                            :xl="{ span: 6 }"
                            :xxl="{ span: 3 }"
                        >
                            <div class="apply-col">
                                <div @click="applyClick(item)">
                                    <div class="logo">
                                        <div class="apply-icon no-dark-content" :class="getLogoClass(item.value)"></div>
                                        <div @click.stop="applyClick(item, 'badge')" class="apply-box-top-report">
                                            <Badge v-if="showBadge(item,'approve')" :overflow-count="999" :count="approveUnreadNumber" />
                                            <Badge v-if="showBadge(item,'report')" :overflow-count="999" :count="reportUnreadNumber" />
                                        </div>
                                    </div>
                                    <p>{{ $L(item.label) }}</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </template>
            </div>
        </div>

        <!--工作报告-->
        <DrawerOverlay v-model="workReportShow" placement="right" :size="1200">
            <Report v-if="workReportShow" v-model="workReportTabs" @on-read="$store.dispatch('getReportUnread', 1000)" />
        </DrawerOverlay>

        <!--AI 机器人-->
        <DrawerOverlay v-model="aibotShow" placement="right" :size="650">
            <div class="ivu-modal-wrap-apply">
                <div class="ivu-modal-wrap-apply-title">
                    {{ $L('AI 机器人') }}
                    <p @click="aibotType = aibotType == 1 ? 2 : 1" v-if="userIsAdmin">
                        {{ aibotType == 1 ? $L('机器人设置') : $L('返回') }}
                    </p>
                </div>
                <div class="ivu-modal-wrap-apply-body">
                    <ul class="ivu-modal-wrap-ul" v-if="aibotType == 1">
                        <!--  by hss 20240912 -->
                        <li v-for="(item, key) in aibotList"  :key="key">
                            <div class="apply-licontent">
                                <img class="apply-icon" :src="item.src">
                                <div class="apply-text">
                                    <h4>{{ item.label }}</h4>
                                    <p class="desc" @click="openDetail(item.desc)">{{ item.desc }}</p>
                                </div>
                                <!-- 消息图标 -->
                                <div class="btn" @click="onGoToChat(item.value)">
                                    <Icon class="ivu-icon  ivu-icon-ios-chatbubbles" size="24" color="#84c56a"/>
                                </div>
                                <!-- 设置图标 -->
                                <div class="btn" @click="aisetForm(item)">
                                    <Icon class="ivu-icon ivu-icon-md-settings" size="24" color="#2b85e4"/>
                                </div>
                                <div class="load" v-if="aibotDialogSearchLoad == item.value">
                                <Loading />
                                </div>
                            </div>
                            
                        </li>
                    
                        <!-- //20240823------------------------------- -->
                        <li v-for="(item, key) in aibotList0"  :key="key">
                            <div class="apply-licontent">
                                <img class="apply-icon" :src="item.src">
                                <div class="apply-text" >
                                    <h4>{{ item.label }}</h4>
                                    <p  class="desc" @click="openDetail(item.desc)">{{ item.desc }}</p>
                                </div>
                                <div class="btn" @click="onGoToChat(item.value)">
                                    <Icon class="ivu-icon ivu-icon-ios-chatbubbles" size="24" color="#84c56a"/>
                                    
                                </div>
                                <div class="btn" @click="aisetForm(item)">
                                    <Icon class="ivu-icon ivu-icon-md-settings" size="24" color="#2b85e4"/>
                                </div>
                                <div class="load" v-if="aibotDialogSearchLoad == item.value">
                                <Loading />
                                </div>
                            </div>
                        </li>
                        <!-- ----------------------------------------- -->
                    </ul>
                    
                    <Tabs v-else v-model="aibotTabAction">
                        <TabPane label="ChatGPT" name="opanai">
                            <div class="aibot-warp">
                                <SystemAibot type="ChatGPT" v-if="aibotTabAction == 'opanai'" />
                            </div>
                        </TabPane>
                        <TabPane label="Gemini" name="gemini">
                            <div class="aibot-warp">
                                <SystemAibot type="Gemini" v-if="aibotTabAction == 'gemini'" />
                            </div>
                        </TabPane>
                        <TabPane label="Claude" name="claude">
                            <div class="aibot-warp">
                                <SystemAibot type="Claude" v-if="aibotTabAction == 'claude'" />
                            </div>
                        </TabPane>
                        <TabPane :label="$L('文心一言')" name="wenxin">
                            <div class="aibot-warp">
                                <SystemAibot type="Wenxin" v-if="aibotTabAction == 'wenxin'" />
                            </div>
                        </TabPane>
                        <TabPane :label="$L('通义千问')" name="qianwen">
                            <div class="aibot-warp">
                                <SystemAibot type="Qianwen" v-if="aibotTabAction == 'qianwen'" />
                            </div>
                        </TabPane>
                        <TabPane :label="$L('智谱清言')" name="zhipu">
                            <div class="aibot-warp">
                                <SystemAibot type="Zhipu" v-if="aibotTabAction == 'zhipu'" />
                            </div>
                        </TabPane>
                        <!-- add20240820------------------------- -->
                      <TabPane :label="Custom" name="custom">
                            <div class="aibot-warp">
                                <SystemAibot type="Custom" v-if="aibotTabAction == 'custom'"/>
                            </div>
                        </TabPane>
                        <!-- ---------------------- -->
                    </Tabs>
                </div>
            </div>
        </DrawerOverlay>
    
         <!-- 定义对话弹窗内容20240912 -->
         <el-dialog
            :visible.sync="aiformVisible"
                @close="closeDialog" 
                >
                    <div class="aiform-content"> 
                    <!--需要弹出的内容部分-->
                        <div class="aiform-title">
                            <i class="el-icon-set-up"></i>
                            <div class="htext" >{{ itemLabel }}</div>
                        </div>
                        <el-form>
                            <el-form-item label="API Key" prop="name" class="username" >
                                <el-input v-model="password" :type="pwdObj.pwdType" ></el-input>
                                <div  class="item-desc">访问openAI网站查看：
                                    <div v-if="itemLabel == 'ChatGPT'">
                                        <a href="https://platform.openai.com/account/api-keys" target="_blank">
                                            https://platform.openai.com/account/api-keys
                                        </a>
                                    </div>
                                    <div v-else-if="itemLabel == 'Gemini'" >
                                        <a href="https://ai.google.dev/tutorials/setup?hl=zh-cn" target="_blank">
                                            https://ai.google.dev/tutorials/setup?hl=zh-cn
                                        </a>
                                    </div>
                                    <div v-else-if="itemLabel == 'Claude'" >
                                        <a href="https://claude.ai" target="_blank">
                                            https://claude.ai
                                        </a> 
                                    </div>
                                    <div v-else-if="itemLabel == 'Wenxin'" >
                                        
                                        <a href="https://ai.baidu.com/ai-doc/REFERENCE/Ck3dwjgn3#3-%E8%8E%B7%E5%8F%96%E5%AF%86%E9%92%A5" target="_blank">
                                            https://ai.baidu.com/ai-doc/REFERENCE/Ck3dwjgn3
                                        </a>
                                    </div>
                                    <div v-else-if="itemLabel == 'Qianwen'">
                                        <a  href="https://help.aliyun.com/document_detail/611472.html" target="_blank">
                                            https://help.aliyun.com/document_detail/611472.html
                                        </a>
                                    </div>
                                    <div v-else-if="itemLabel == 'Zhipu'" >
                                        <a href="https://open.bigmodel.cn/dev/howuse/model" target="_blank">
                                            https://open.bigmodel.cn/dev/howuse/model
                                        </a>
                                    </div>
                                    <div v-else-if="itemLabel == 'Custom'" >
                                        <a href="https://open.bigmodel.cn/dev/howuse/model" target="_blank">
                                            https://open.bigmodel.cn/dev/howuse/model
                                        </a>
                                    </div>
                                </div>
                            </el-form-item>

                            <el-form-item label="模型" prop="mol">
                                <div v-if="itemLabel == 'ChatGPT'" >
                                    <el-select v-model="valuemol"  placeholder="请选择">
                                        <el-option label="gpt-3.5-turbo" value="gpt-3.5-turbo"></el-option>
                                        <el-option label="gpt-4" value="gpt-4"></el-option>
                                    </el-select>
                                    <div>查看说明：
                                        <a href="https://platform.openai.com/docs/models" target="_blank">
                                            https://platform.openai.com/docs/models
                                        </a>
                                    </div>
                                </div>
                                <div v-if="itemLabel == 'Gemini'" >
                                    <el-select v-model="valuemolg"  placeholder="请选择">
                                        <el-option label="gemini-1.0-pro" value="gemini-1.0-pro"></el-option>
                                    </el-select>
                                    <div>查看说明：
                                        <a href="https://ai.google.dev/models?hl=zh-cn" target="_blank">
                                            https://ai.google.dev/models?hl=zh-cn
                                        </a>
                                    </div>
                                </div>
                                <div v-if="itemLabel == 'Claude'" >
                                    <el-select v-model="valuemolc"  placeholder="请选择">
                                        <el-option label="Claude 3 Haiku" value="Claude 3 Haiku"></el-option>
                                    </el-select>
                                    <div>查看说明：
                                        <a href="https://claude.ai" target="_blank">
                                            https://claude.ai
                                        </a>
                                    </div>
                                </div>
                                <div v-if="itemLabel == 'Wenxin'" >
                                    <el-select v-model="valuemolw"  placeholder="请选择">
                                        <el-option label="ERNIE-Bot 4.0" value="completions_pro"></el-option>
                                        <el-option label="ERNIE-Bot" value="completions"></el-option>
                                        <el-option label="ERNIE-Bot-turbo" value="eb-instant"></el-option>
                                        <el-option label="Llama-2-7b-chat" value="llama_2_7b"></el-option>
                                        <el-option label="Llama-2-13B-Chat" value="llama_2_13b"></el-option>
                                    </el-select>
                                    <div>查看说明：
                                        <a href="https://cloud.baidu.com/doc/WENXINWORKSHOP/s/vliu6vq7u" target="_blank">
                                            https://cloud.baidu.com/doc/WENXINWORKSHOP/s/vliu6vq7u
                                        </a>
                                    </div>
                                </div>
                                <div v-if="itemLabel == 'Qianwen'" >
                                    <el-select v-model="valuemolq"  placeholder="请选择" >
                                        <el-option label="qwen-v1" value="qwen-v1"></el-option>
                                        <el-option label="qwen-plus-v1" value="qwen-plus-v1"></el-option>
                                    </el-select>
                                    <div>查看说明：
                                        <a href="https://help.aliyun.com/document_detail/2399481.html" target="_blank">
                                            https://help.aliyun.com/document_detail/2399481.html
                                        </a>
                                    </div>
                                </div>
                                <div v-if="itemLabel == 'Zhipu'" >
                                    <el-select v-model="valuemolu"  placeholder="请选择">
                                        <el-option label="glm-4" value="glm-4"></el-option>
                                        <el-option label="glm-4v" value="glm-4v"></el-option>
                                        <el-option label="glm-3-turbo" value="glm-3-turbo"></el-option>
                                    </el-select>
                                    <div>查看说明：
                                        <a href="https://open.bigmodel.cn/dev/howuse/model" target="_blank">
                                            https://open.bigmodel.cn/dev/howuse/model
                                        </a>
                                    </div>
                                </div>
                                <div v-if="itemLabel == 'Custom'" >
                                    <el-select v-model="valuemolm"  placeholder="请选择">
                                        <el-option label="ChatGLM4-9B" value="ChatGLM4-9B"></el-option>
                                    </el-select>
                                    <div>查看说明：
                                        <a href="https://open.bigmodel.cn/dev/howuse/model" target="_blank">
                                            https://open.bigmodel.cn/dev/howuse/model
                                        </a>
                                    </div>
                                </div>
                                
                            </el-form-item>
                            
                            <el-form-item label="使用代理" prop="proxy" class="useproxy">
                                <el-input  v-model="valueproxy"></el-input>
                                <div>例如：http://proxy.com 或 socks5://proxy.com</div>
                            </el-form-item>
                        </el-form>


                        <div class="aiform-footer">
                            <Button type="default" @click="aiformVisible = false">
                                <i class="el-icon-circle-close"></i>
                            取消</Button>
                            <Button type="primary"  @click="onGoToChat('custom')" class="ivu-btn-primary" >
                                <i class="el-icon-receiving"></i>
                            保存</Button>
                        </div>
                </div>
        </el-dialog> 

        <!--签到-->
        <DrawerOverlay v-model="signInShow" placement="right" :size="700">
            <div class="ivu-modal-wrap-apply">
                <div class="ivu-modal-wrap-apply-title">
                    {{ $L('签到管理') }}
                    <p @click="signInType = signInType == 1 ? 2 : 1" v-if="userIsAdmin">
                        {{ signInType == 1 ? $L('签到设置') : $L('返回') }}
                    </p>
                </div>
                <div class="ivu-modal-wrap-apply-body">
                    <Checkin v-if="signInType == 1" />
                    <SystemCheckin v-else />
                </div>
            </div>
        </DrawerOverlay>

        <!-- 会议  -->
        <DrawerOverlay v-model="meetingShow" placement="right" :size="600">
            <div class="ivu-modal-wrap-apply">
                <div class="ivu-modal-wrap-apply-title">
                    {{ $L('会议') }}
                    <p @click="meetingType = meetingType == 1 ? 2 : 1">
                        {{ meetingType == 1 ? $L('会议设置') : $L('返回') }}
                    </p>
                </div>
                <div class="ivu-modal-wrap-apply-body">
                    <ul class="ivu-modal-wrap-ul" v-if="meetingType == 1">
                        <li>
                            <div class="apply-icon no-dark-content meeting"></div>
                            <h4>{{ $L('新会议') }}</h4>
                            <p class="desc" @click="openDetail(meetingDescs.add)"> {{ meetingDescs.add }} </p>
                            <p class="btn" @click="onMeeting('createMeeting')">{{ $L('新建会议') }}</p>
                        </li>
                        <li>
                            <div class="apply-icon no-dark-content meeting-join"></div>
                            <h4>{{ $L('加入会议') }}</h4>
                            <p class="desc" @click="openDetail(meetingDescs.join)">{{ meetingDescs.join }}</p>
                            <p class="btn" @click="onMeeting('joinMeeting')">{{ $L('加入会议') }}</p>
                        </li>
                    </ul>
                    <SystemMeeting v-else />
                </div>
            </div>
        </DrawerOverlay>

        <!--LDAP-->
        <DrawerOverlay v-model="ldapShow" placement="right" :size="700">
            <div class="ivu-modal-wrap-apply">
                <div class="ivu-modal-wrap-apply-title">
                    {{ $L('LDAP 设置') }}
                </div>
                <div class="ivu-modal-wrap-apply-body">
                    <SystemThirdAccess />
                </div>
            </div>
        </DrawerOverlay>

        <!--邮件-->
        <DrawerOverlay v-model="mailShow" placement="right" :size="700">
            <div class="ivu-modal-wrap-apply">
                <div class="ivu-modal-wrap-apply-title">
                    {{ $L('邮件通知') }}
                </div>
                <div class="ivu-modal-wrap-apply-body">
                    <SystemEmailSetting />
                </div>
            </div>
        </DrawerOverlay>

        <!--app推送-->
        <DrawerOverlay v-model="appPushShow" placement="right" :size="700">
            <div class="ivu-modal-wrap-apply">
                <div class="ivu-modal-wrap-apply-title">
                    {{ $L('APP 推送') }}
                </div>
                <div class="ivu-modal-wrap-apply-body">
                    <SystemAppPush />
                </div>
            </div>
        </DrawerOverlay>

        <!-- 扫码登录 -->
        <Modal
            v-model="scanLoginShow"
            :title="$L('扫码登录')"
            :mask-closable="false">
            <div class="mobile-scan-login-box">
                <div class="mobile-scan-login-title">{{$L(`你好，扫码确认登录`)}}</div>
                <div class="mobile-scan-login-subtitle">「{{$L('为确保帐号安全，请确认是本人操作')}}」</div>
            </div>
            <div slot="footer" class="adaption">
                <Button type="default" @click="scanLoginShow=false">{{$L('取消登录')}}</Button>
                <Button type="primary" :loading="scanLoginLoad" @click="scanLoginSubmit">{{$L('确认登录')}}</Button>
            </div>
        </Modal>

        <!-- 发起群投票、接龙 -->
        <UserSelect
            ref="wordChainAndVoteRef"
            v-model="sendData"
            :multiple-max="1"
            :title="sendType == 'vote' ? $L('选择群组发起投票') : $L('选择群组发起接龙')"
            :before-submit="goWordChainAndVote"
            :show-select-all="false"
            :only-group="true"
            show-dialog
            module/>

    </div>
</template>

<script>
import {mapState} from "vuex";
import DrawerOverlay from "../../components/DrawerOverlay";
import UserSelect from "../../components/UserSelect";
import Report from "../manage/components/Report";
import SystemAibot from "./setting/components/SystemAibot";
import SystemCheckin from "./setting/components/SystemCheckin";
import Checkin from "./setting/checkin";
import SystemMeeting from "./setting/components/SystemMeeting";
import SystemThirdAccess from "./setting/components/SystemThirdAccess";
import SystemEmailSetting from "./setting/components/SystemEmailSetting";
import SystemAppPush from "./setting/components/SystemAppPush";
import { Store } from "le5le-store";
import { Button } from "view-design-hi";


export default {
    components: {
        UserSelect,
        DrawerOverlay,
        Report,
        SystemAibot,
        SystemCheckin,
        Checkin,
        SystemMeeting,
        SystemThirdAccess,
        SystemEmailSetting,
        SystemAppPush
    },
    data() {
        return {
         //默认false 弹框隐藏状态    
        aiformVisible:false,
        password: '',
        pwdObj: { pwdType: 'password'},
        valuemol: '',
        valuemolg: '',
        valuemolc: '',
        valuemolw: '',
        valuemolq: '',
        valuemolu: '',
        valuemolm: '',
        valueproxy: '',
        
          //-------------------------------
            applyList: [],
            applyListTypes: ['base', 'admin'],
            //
            workReportShow: false,
            workReportTabs: "my",
            //
            aibotList: [
                {
                    value: "openai",
                    label: "ChatGPT",
                    src: $A.mainUrl('images/avatar/default_openai.png'),
                    desc: this.$L('我是一个人工智能助手，为用户提供问题解答和指导。我没有具体的身份，只是一个程序。您有什么问题可以问我哦？')
                },
                {
                    value: "gemini",
                    label: "Gemini",
                    src: $A.mainUrl('images/avatar/default_gemini.png'),
                    desc: `${this.$L('我是由Google开发的生成式人工智能聊天机器人。')}${this.$L('它基于同名的Gemini系列大型语言模型。')}${this.$L('是应对OpenAI公司开发的ChatGPT聊天机器人的崛起而开发的。')}`
                },
                {
                    value: "claude",
                    label: "Claude",
                    src: $A.mainUrl('images/avatar/default_claude.png'),
                    desc: this.$L('我是Claude,一个由Anthropic公司创造出来的AI助手机器人。我的工作是帮助人类,与人对话并给出解答。')
                },
                {
                    value: "wenxin",
                    label: "Wenxin",
                    src: $A.mainUrl('avatar/%E6%96%87%E5%BF%83.png'),
                    desc: this.$L('我是文心一言，英文名是ERNIE Bot。我能够与人对话互动，回答问题，协助创作，高效便捷地帮助人们获取信息、知识和灵感。')
                },
                {
                    value: "qianwen",
                    label: "Qianwen",
                    src: $A.mainUrl('avatar/%E9%80%9A%E4%B9%89%E5%8D%83%E9%97%AE.png'),
                    desc: this.$L('我是达摩院自主研发的超大规模语言模型，能够回答问题、创作文字，还能表达观点、撰写代码。')
                },
                {
                    value: "zhipu",
                    label: "Zhipu",
                    src: $A.mainUrl('images/avatar/default_zhipu.png'),
                    desc: `${this.$L('我是智谱清言，是智谱 AI 公司于2023训练的语言模型。')}${this.$L('我的任务是针对用户的问题和要求提供适当的答复和支持。')}`
                },
                
                
            ],
            //add20240823
            aibotList0:[
                {
                    value: "custom",
                    label: "Custom",
                    src: $A.mainUrl('images/avatar/default_anything.png'),
                    desc: `${this.$L('我是自定义角色，是由用户自行设定的角色模型。')}${this.$L('我的任务是回答用户的问题，并提供适当的答复和支持。')}`
                },
            ],
            //-------------------
            aibotTabAction: "opanai",
            aibotShow: false,
            aibotType: 1,
            aibotDialogSearchLoad: "",
            //
            signInShow: false,
            signInType: 1,
            //
            meetingShow: false,
            meetingType: 1,
            meetingDescs: {
                add: this.$L('创建一个全新的会议视频会议，与会者可以在实时中进行面对面的视听交流。') + this.$L('通过视频会议平台，参与者可以分享屏幕、共享文档，并与其他与会人员进行讨论和协。'),
                join: this.$L('加入视频会议，参与已经创建的会议，在会议过程中与其他参会人员进行远程实时视听交流和协作。'),
            },
            //
            ldapShow: false,
            //
            mailType: 1,
            mailShow: false,
            //
            appPushType: 1,
            appPushShow: false,
            //
            scanLoginShow: false,
            scanLoginLoad: false,
            scanLoginCode: '',
            //
            sendData: [],
            sendType: '',
        }
    },
    activated() {
        this.initList()
    },
    computed: {
        ...mapState([
            'userInfo',
            'userIsAdmin',
            'reportUnreadNumber',
            'approveUnreadNumber',
            'cacheDialogs',
            'windowOrientation',
        ]),
        isExistAdminList() {
            return this.applyList.map(h => h.type).indexOf('admin') !== -1;
        }
    },
    watch: {
        windowOrientation() {
            this.initList()
        }
    },
    methods: {
    //20240823------------------------------
         //点击按钮时,触发弹出效果
    aisetForm(item){
        console.log("aisetForm", item)
        this.itemLabel = item.label
        this.aiformVisible = true
    },

    //事件操作 (表格、表单 同理 需要执行的事件 在此处)
    closeDialog() {
        this.$refs.form.pause()
    },
    
    //----------------------------------------
        initList() {
            let applyList = [
                { value: "approve", label: "审批中心", sort: 3 },
                { value: "report", label: "工作报告", sort: 5 },
                { value: "okr", label: "OKR 管理", sort: 4 },
                { value: "robot", label: "AI 机器人", sort: 6 },
                { value: "signin", label: "签到打卡", sort: 7 },
                { value: "meeting", label: "在线会议", sort: 8 },
                { value: "word-chain", label: "群接龙", sort: 9 },
                { value: "vote", label: "群投票", sort: 10 },
                { value: "aiassistant", label: "AI助手", sort: 11 },
            ];
            // wap模式
            if (this.windowOrientation == 'landscape') {
                // 横屏模式
                applyList.push({ value: "scan", label: "扫一扫", show: $A.isEEUiApp, sort: 13 })
            } else {
                // 竖屏模式
                applyList.push(...[
                    { value: "calendar", label: "日历", sort: 1 },
                    { value: "file", label: "文件", sort: 2 },
                    { value: "addProject", label: "创建项目", sort: 11 },
                    { value: "addTask", label: "添加任务", sort: 12 },
                    { value: "scan", label: "扫一扫", show: $A.isEEUiApp, sort: 13 },
                    { value: "setting", label: "设置", sort: 14 }

                ])
            }
            // 管理员
            let adminApplyList = [];
            if (!this.userIsAdmin) {
                if (this.userInfo.department_owner) {
                    adminApplyList.push({ value: "okrAnalyze", label: "OKR 结果", sort: 15 })
                }
            } else {
                adminApplyList.push(...[
                    { value: "okrAnalyze", label: "OKR 结果", sort: 15 },
                    { value: "ldap", label: "LDAP", sort: 16 },
                    { value: "mail", label: "邮件通知", sort: 17 },
                    { value: "appPush", label: "APP 推送", sort: 18 },
                    { value: "complaint", label: "举报管理", sort: 19 },
                    { value: "allUser", label: "团队管理", sort: 20 },
                    { value: "authUser", label: "授权管理", sort: 21 },
                ])
            }
            adminApplyList = adminApplyList.map((h) => {
                h.type = 'admin';
                return h;
            });
            //
            this.applyList = [...applyList, ...adminApplyList].sort((a, b) => {
                if (a.sort < b.sort) {
                    return -1;
                } else if (a.sort > b.sort) {
                    return 1;
                } else {
                    return 0;
                }
            });
        },
        getLogoClass(name) {
            name = name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
            return name
        },
        showBadge(item,type) {
            let num = 0;
            switch (type) {
                case 'approve':
                    num = this.approveUnreadNumber;
                    break;
                case 'report':
                    num = this.reportUnreadNumber;
                    break;
            }
            return item.value == type && num > 0
        },
        // 点击应用
        applyClick(item, area = '') {
            switch (item.value) {
                case 'approve':
                case 'calendar':
                case 'file':
                case 'setting':
                    this.goForward({ name: 'manage-' + item.value });
                    break;
                case 'okr':
                case 'okrAnalyze':
                    this.goForward({
                        path: '/manage/apps/okr/' + (item.value == 'okr' ? 'list' : 'analysis'),
                    });
                    break;
                case 'report':
                    this.workReportTabs = area == 'badge' ? 'receive' : 'my';
                    this.workReportShow = true;
                    break;
                case 'robot':
                    this.aibotType = 1;
                    this.aibotTabAction = "opanai";
                    this.aibotShow = true;
                    break;
                case 'signin':
                    this.signInType = 1;
                    this.signInShow = true;
                    break;
                case 'meeting':
                    this.meetingType = 1;
                    this.meetingShow = true;
                    break;
                case 'ldap':
                    this.ldapShow = true;
                    break;
                case 'mail':
                    this.mailType = 1;
                    this.mailShow = true;
                    break;
                case 'appPush':
                    this.appPushType = 1;
                    this.appPushShow = true;
                    break;
                case 'scan':
                    $A.eeuiAppScan(this.scanResult);
                    return;
                case 'word-chain':
                case 'vote':
                    this.sendData = [];
                    this.sendType = item.value;
                    this.$refs.wordChainAndVoteRef.onSelection()
                    return;
                case 'aiassistant':
                    this.goForward({ name: 'manage-aisetting'});
                        break;
            }
            this.$emit("on-click", item.value)
        },
        



        

        // 开始聊天
        onGoToChat(type) {
            this.aiformVisible = false;
            // this.formVisible = false;
            // 初始化对话ID
            let dialogId = 0;
            // 根据type生成email
            let email = `ai-${type}@bot.system`;
            // 遍历缓存对话列表，找到与email匹配的对话
            this.cacheDialogs.map(h => {
                if (h.email == email) {
                    dialogId = h.id;
                }
            })
            // 如果找到了匹配的对话
            if (dialogId) {
                // 如果窗口方向横向
                if (this.windowOrientation == 'landscape') {
                    // 跳转到管理消息页面
                    this.goForward({ name: 'manage-messenger', params: { dialog_id: dialogId } });
                } else {
                    // 打开对话
                    this.$store.dispatch("openDialog", dialogId)

                }
                // 隐藏AI机器人
                this.aibotShow = false;
            } else {
                // 设置AI机器人对话搜索加载状态
                this.aibotDialogSearchLoad = type;
                // 调用接口，根据email搜索对话
                this.$store.dispatch("call", {
                    url: 'dialog/search',
                    data: { key: email },
                }).then(({ data }) => {
                    // 如果没有找到对话
                    if (data?.length < 1) {
                        // 弹出错误提示
                        $A.messageError('机器人暂未开启');
                        // 清空AI机器人对话搜索加载状态
                        this.aibotDialogSearchLoad = '';
                        return;
                    }
                    // 打开对话
                    this.$store.dispatch("openDialogUserid", data[0]?.dialog_user.userid).then(_ => {
                        // 如果窗口方向横向
                        if (this.windowOrientation == 'landscape') {
                            // 跳转到管理消息页面
                            this.goForward({ name: 'manage-messenger' })
                        }
                        // 隐藏AI机器人
                        this.aibotShow = false;
                    }).catch(({ msg }) => {
                        // 弹出错误提示
                        $A.modalError(msg)
                    }).finally(_ => {
                        // 清空AI机器人对话搜索加载状态
                        this.aibotDialogSearchLoad = '';
                    });
                }).catch(_ => {
                    // 清空AI机器人对话搜索加载状态
                    this.aibotDialogSearchLoad = '';
                });
            }
        },
        // 会议
        onMeeting(name) {
            switch (name) {
                case 'createMeeting':
                    Store.set('addMeeting', {
                        type: 'create',
                        userids: [this.userId],
                    });
                    break;
                case 'joinMeeting':
                    Store.set('addMeeting', {
                        type: 'join',
                    });
                    break;
            }
            this.meetingShow = false;
        },
        // 扫一扫
        scanResult(text) {
            const arr = (text + "").match(/^https*:\/\/(.*?)\/login\?qrcode=(.*?)$/)
            if (arr) {
                // 扫码登录
                if ($A.getDomain(text) != $A.getDomain($A.mainUrl())) {
                    let content = this.$L('请确认扫码的服务器与当前服务器一致')
                    content += `<br/>${this.$L('二维码服务器')}: ${$A.getDomain(text)}`
                    content += `<br/>${this.$L('当前服务器')}: ${$A.getDomain($A.mainUrl())}`
                    $A.modalWarning({
                        language: false,
                        title: this.$L('扫码登录'),
                        content
                    })
                    return
                }
                this.scanLoginCode = arr[2];
                this.scanLoginShow = true;
                return
            }
            if (/^https*:\/\//i.test(text)) {
                // 打开链接
                this.$store.dispatch('openAppChildPage', {
                    pageType: 'app',
                    pageTitle: ' ',
                    url: 'web.js',
                    params: {
                        url: text,
                        browser: true,
                        showProgress: true,
                    },
                });
            }
        },
        // 扫描登录提交
        scanLoginSubmit() {
            if (this.scanLoginLoad === true) {
                return
            }
            this.scanLoginLoad = true
            //
            this.$store.dispatch("call", {
                url: "users/login/qrcode",
                data: {
                    type: "login",
                    code: this.scanLoginCode,
                }
            }).then(({msg}) => {
                this.scanLoginShow = false
                $A.messageSuccess(msg)
            }).catch(({msg}) => {
                $A.messageError(msg)
            }).finally(_ => {
                this.scanLoginLoad = false
            });
        },
        // 打开明细
        openDetail(desc){
            $A.modalInfo({
                content: desc,
                onOk: () => {
                    return new Promise((resolve, reject) => {
                        this.$store.dispatch("call", {
                            url: 'dialog/group/disband',
                            data: {
                                dialog_id: this.dialogId,
                            }
                        }).then(({msg}) => {
                            resolve(msg);
                            this.$store.dispatch("forgetDialog", this.dialogId);
                            this.goForward({name: 'manage-messenger'});
                        }).catch(({msg}) => {
                            reject(msg);
                        });
                    })
                },
            });
        },
        // 前往接龙与投票
        goWordChainAndVote() {
            const dialog_id = Number(this.sendData[0].replace('d:', ''))
            const type = this.sendType == 'word-chain' ? 'dialogDroupWordChain' : 'dialogGroupVote'
            if (this.windowPortrait) {
                this.$store.dispatch("openDialog", dialog_id).then(() => {
                    this.$store.state[type] = {
                        type: 'create',
                        dialog_id: dialog_id
                    }
                })
            } else {
                this.goForward({
                    name: 'manage-messenger',
                    params: {
                        open: this.sendType,
                        dialog_id: dialog_id
                    }
                })
            }
        }
    }
}
</script>

