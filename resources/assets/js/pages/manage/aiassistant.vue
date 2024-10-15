<template>
    <div class="page-aiassistant">
        <PageTitle :title="$L('AI助手')" />
        <div class="aiassistant-wrapper" ref="aiassistantWrapper">
            <div class="aiassistant-head">
                <div class="aiassistant-nav">
                    <div class="common-nav-back portrait" @click="goForward({ name: 'manage-application' }, true)">
                        <i class="taskfont">&#xe676;</i>
                    </div>
                    <h1>{{ $L('AI助手') }}</h1>
                    <div class="aiassistant-setting" @click="aisetForm(item, newselect)">
                        <Icon type="ios-settings-outline" />
                    </div>

                    <!-- 下拉框的模型选择 -->
                    <div class="nav-select">
                        <el-select v-model="selectsetting" class="bot-select" @change="onOptionChange">
                            <el-option label="openai" value="openai"></el-option>
                            <el-option label="gemini" value="gemini"></el-option>
                            <el-option label="ollama" value="ollama"></el-option>
                        </el-select>
                        <!-- <ChildComponent :selected-llm="selectsetting" @update-llm="updateSelectSetting" /> -->
                    </div>
                </div>
                <!-- 历史会话图标 -->
                <div class="aiassistant-historychat">
                    <Icon @click="toggleDrawer" type="ios-clock-outline" />
                </div>
            </div>

            <div class="aiassistant-content">
                <div>
                    <div class="chatBox" ref="chatBox">
                        <!-- 遍历所有消息 -->
                        <div v-for="(message, index) in messages" :key="index" class="message">
                            <!-- 机器人消息 -->
                            <div v-if="message.isBot" class="message-content bot-message">
                                <img v-if="message.avatar" :src="message.avatar" alt="Bot Avatar"
                                    class="avatar bot-avatar" />
                                <div class="text-content">
                                    <span v-html="sanitizedBotMessage(message.text)"></span>
                                </div>
                            </div>
                            <!-- 用户消息 -->
                            <div v-else class="message-content user-message">
                                <div class="text-content">
                                    {{ message.text }}
                                </div>
                                <img v-if="message.avatar" :src="message.avatar" alt="User Avatar"
                                    class="avatar user-avatar" />
                            </div>
                        </div>
                        <!-- 动画加载 -->
                        <div v-if="isLoading" class="loading-spinner">wait a minute please...</div>
                    </div>

                </div>

                <DrawerOverlay v-model="drawerVisible" placement="right" :size="650">
                    <div  class="ivu-modal-wrap-aiass">
                        <div class="ivu-modal-wrap-aiass-title">
                            {{ $L('历史会话记录') }}
                        </div>
                        <div ref="drawerBody" class="ivu-modal-wrap-aiass-body">
                            <div class="history-list">
                                <!--  右键删除操作showContextMenu($event, conversation) 切换会话操作loadConversation(conversation)-->
                                <div v-for="conversation in historyConversations" :key="conversation.thread_slug"
                                    @contextmenu.prevent="handleRightClick($event, conversation)"
                                    @click="loadConversation(conversation)" class="history-item">
                                    <img v-if="conversation.avatar" :src="conversation.avatar" alt="Bot Avatar"
                                        class="history-avatar" />
                                    <div class="history-info">
                                        <div class="history-title">{{ conversation.modelName }}</div>
                                        <div class="last-message">{{ conversation.lastMessage }}</div>
                                        <div class="last-time">{{ conversation.updatedAt }}</div>
                                    </div>
                                </div>
                            </div>
                            <!-- 右键菜单 -->
                            <div 
                                v-if="contextMenuVisible" 
                                :style="contextMenuStyles"
                                class="click-menu"
                            >
                                <div @click="deleteConversation">删除会话</div>
                            </div>
                        </div>
                    </div>
                </DrawerOverlay>
            </div>
        </div>
        <div class="chat-input-container">
            <Button type="primary" @click="openModelSelection" class="new-chat-button">新建会话</Button>
            <Modal title="创建新会话" v-model="newchat" :visible.sync="modelDialogVisible" :closable="false">
                <Select v-model="newselect" size="large" class="new-chat-select">
                    <Option v-for="item in aichatList" :value="item.value" :key="item.value">
                        {{ item.label }}
                    </Option>
                </Select>
                <div slot="footer" class="adaption">
                    <Button type="default" @click="newchat = false">{{ $L('取消') }}</Button>
                    <Button type="primary" @click="startNewChat">{{ $L('确定') }}</Button>
                </div>
            </Modal>
            <div class="input-container">
                <el-input v-model="userInput" placeholder="输入消息..." class="user-input"
                    @keyup.enter.native="sendMessage"></el-input>

                <!-- 录音图标 -->
                <li>
                    <ETooltip placement="top" :disabled="$isEEUiApp || windowTouch" :enterable="false"
                        :content="$L('点击录音')">
                        <i v-if="sendClass !== 'recorder'" class="taskfont">&#xe609;</i>

                    </ETooltip>
                </li>
                <!-- 图片文件 -->
                <li>
                    <EPopover ref="more" v-model="showMore" :visibleArrow="false" placement="top"
                        popperClass="chat-input-more-popover">
                        <ETooltip slot="reference" ref="moreTip" :disabled="$isEEUiApp || windowTouch || showMore"
                            placement="top" :enterable="false" :content="$L('展开')">
                            <i class="taskfont">&#xe790;</i>
                        </ETooltip>

                        <div class="chat-input-popover-item" @click="onToolbar('image')">
                            <i class="taskfont">&#xe7bc;</i>
                            发送图片
                        </div>
                        <div class="chat-input-popover-item" @click="onToolbar('file')">
                            <i class="taskfont">&#xe7c0;</i>
                            上传文件
                        </div>
                        <div class="chat-input-popover-item" @click="onToolbar('full')">
                            <i class="taskfont">&#xe6a7;</i>
                            全屏输入
                        </div>
                    </EPopover>
                </li>

                <li>
                    <button class="send-button" @click="sendMessage">
                        <i class="el-icon-s-promotion" />
                    </button>
                </li>

            </div>
        </div>
    </div>
</template>

<script>
import ChildComponent from './aisetting/index'
import DOMPurify from "dompurify";
import renderMarkdown from "./aisetting/utils/markdown";
import { mapState } from 'vuex';
import DrawerOverlay from '../../components/DrawerOverlay'
import axios from "axios";
import { data } from "jquery";
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import { DropdownMenu } from 'view-design-hi';
// let hasRefreshed = false; // 状态标记

export default {
    components: {
        DrawerOverlay,
        ChildComponent,
    },

    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        emojiBottom: {
            type: Boolean,
            default: false
        },
        options: {
            type: Object,
            default: () => ({})
        },
    },
    data() {
        return {
            users: [], // by hss20240903
            messages: [], // by hss20240911
            userInput: "",  // by hss20240911
            newchat: false,
            modelDialogVisible: false,
            newselect: '',
            selectsetting: 'openai',
            showMore: false,
            drawerVisible: false,
            botAvatar: '/images/avatar/default_anything.png',
            aichatList: [
                {
                    value: 'ChatGPT',
                    label: 'ChatGPT',
                    avatar: '/images/avatar/default_openai.png'
                },
                {
                    value: "gemini",
                    label: "Gemini",
                    avatar: '/images/avatar/default_gemini.png'
                },
                {
                    value: "claude",
                    label: "Claude",
                    avatar: '/images/avatar/default_claude.png'
                },
                {
                    value: "custom",
                    label: "Custom",
                    avatar: '/images/avatar/default_anything.png'

                },
            ],
            aiformVisible: false,
            password: '',
            pwdObj: { pwdType: 'password' },
            valuemol: '',
            thread_slug: '',
            userInput: "",// 20240926
            slug: "workspace-for-user-1", // Example slug for the workspace
            historyConversations: [], // 存储历史会话记录
            contextMenuVisible: false, // 控制菜单是否显示
            contextMenuX: 0, // 菜单 X 坐标
            contextMenuY: 0, // 菜单 Y 坐标
            selectedConversation: null, // 选中的会话
            isLoading: false, // 加载动画

            contextMenuStyles: {},
            shouldReload: false, // 用于控制是否需要刷新


        }
    },

    //0922
    created() {
        // 获取路由参数
        const { newselect } = this.$route.params;
        if (newselect) {
            this.newselect = newselect; // 设置初始值
        }
        this.slug = "workspace-for-user-" + this.userInfo.userid; // 获取当前会话的 slug
    },

    mounted() {
        // 初始化会话出现前加载动画
        this.isLoading = true;
        // 初始化若已存在历史会话，则自动加载，否则新建
        const hasPermission = this.checkPermission();

        if (!hasPermission) {
            alert('您没有权限进行此操作'); // 提示用户没有权限
            this.isLoading = false; // 加载结束
            return; // 退出函数
        }
        this.initSession();
        this.isLoading = false; // 加载结束

        // 删除操作，右键菜单处理（点击其他地方关闭菜单）
        document.addEventListener('click', this.closeContextMenu);

    },


    async beforeRouteEnter(to, from, next) {
            console.log("路由进入")
            // 在进入路由前触发
                next(vm => {
                    vm.fetchData(); // 调用 fetchData 方法
                // vm 是当前组件实例
                // if (vm.shouldReload) {
                //     vm.shouldReload = false; // 重置标志
                //     window.location.reload(); // 刷新页面
                // } else {
                // }
            });
    },
    beforeRouteLeave(to, from, next) {
        // 在路由离开时移除监听器
        console.log("在路由离开时移除监听器")
        document.removeEventListener('click', this.closeContextMenu); // 清理事件监听器
        next();
    },

    computed: {
        pasteTitle() {
            const { pasteItem } = this;
            let hasImage = pasteItem.find(({ type }) => type == 'image')
            let hasFile = pasteItem.find(({ type }) => type != 'image')
            if (hasImage && hasFile) {
                return '发送文件/图片'
            } else if (hasImage) {
                return '发送图片'
            }
            return '发送文件'
        },
        ...mapState([
            'userInfo',
        ])
    },

    methods: {
        // 用户切换时获取数据
        fetchData(){
            this.isLoading = true;
            this.messages = [];//初始化信息为空
            this.historyConversations = []//初始化历史记录为空
            this.slug = "workspace-for-user-" + this.userInfo.userid; // 获取当前会话的 slug

            // 初始检查 userid
            this.checkUserId();

            // 设置为需要刷新
            this.shouldReload = true;

            // 初始化会话
            this.initSession();

            this.isLoading = false;
            // 删除操作，右键菜单处理（点击其他地方关闭菜单）
            document.addEventListener('click', this.closeContextMenu);
        },

        // //刷新对话
        checkUserId() {
            if (this.userInfo && this.userInfo.userid) {
                this.slug = "workspace-for-user-" + this.userInfo.userid;
            } else {
                console.error("用户 ID 不存在");
            }
        },


        //初始化会话
        initSession() {
        const response = axios.post(`http://192.168.31.140:5555/get-sessionid`,
            { user_id: this.userInfo.userid },
            {
                headers: {
                    'Authorization': 'Bearer VREQHX8-PTGMW06-P9T61XE-BWG31ZW',
                    'Content-Type': 'application/json',
                }
            }).then(response => {
                console.log('Response:', response);
                if (response.data && response.data.session_id) {
                    var item = response.data;
                    var temp = {
                        "thread_slug": item.session_id,
                        "avatar": item.avatar,
                        "modelName": item.model,
                        "lastMessage": item.last_messages,
                        "updatedAt": item.update_time
                    }
                    this.loadConversation(temp, true)

                } else if (!response.data) {
                    console.log('哪去了', response.data)
                    //把初始化（创建工作区->新建会话）统一封装
                    this.newinit();                    
                    
                }
            });
        },

        //初始化(创建工作区->加载会话)新建封装
        async newinit(){
            const hasworkspace = await this.createWorkspace();
            if (hasworkspace) {
                this.newselect = 'Custom'; // 设置为 Custom 模型
                this.startNewChat(); // 自动触发新建会话
            }
        },

        //创建工作区接口
        async createWorkspace() {
            const url = `http://192.168.31.140:5555/create`;
            try {
                const createresponse = await axios.post(url,
                    { user_id: this.userInfo.userid },
                    { headers: { 'Content-Type': 'application/json', } });
                console.log('创建工作区成功', createresponse.data)
                return createresponse.data; // 返回工作区slug

            } catch (error) {
                console.error('工作区创建失效', error.response || error);
                alert('工作区创建失败，请稍后再试');
                return false; // 返回 false 表示工作区创建失败
            }
        },


        //权限判断
        async checkPermission() {
            const url = `http://192.168.31.140:5555/get-user`;
            try {
                const response = await axios.post(url,
                    { user_id: this.userInfo.userid },
                    { headers: { 'Content-Type': 'application/json', }, });
                return response.data.is_create;
                // if (authResponse.data.is_create)
            } catch (error) {
                console.error('权限检查时出错:', error);
                alert('权限检查失败，请稍后再试');
                return false; // 返回 false 表示权限检查失败
            }
        },

        //下拉框的模型选择，对应setting的模型选择   
        async onOptionChange() {
            const hasPermission = await this.checkPermission();
            if (hasPermission) {
                let paymodal;
                switch (this.selectsetting) {
                    case 'openai':
                        paymodal = {
                            chatProvider: 'openai',
                            chatModel: 'gpt-4o',
                        };
                        break;
                    case 'gemini':
                        paymodal = {
                            chatProvider: 'gemini',
                            chatModel: 'gemini-1.0-pro',
                        };
                        break;
                    case 'ollama':
                        paymodal = {
                            chatProvider: 'ollama',
                            chatModel: 'glm4:9b',
                        };
                        break;
                    default:
                        return;
                }
                const updateUrl = `http://103.63.139.165:3001/api/v1/workspace/${this.slug}/update`;
                try {
                    const response = await axios.post(updateUrl, paymodal, {
                        headers: {
                            'Accept': 'application/json',
                            'Authorization': 'Bearer VREQHX8-PTGMW06-P9T61XE-BWG31ZW',
                            'Content-Type': 'application/json',
                        },
                    });
                    console.log('Response:', response.data);
                } catch (error) {
                    console.error('Error updating model:', error);
                }
            } else {
                // 没有权限，弹出提示
                alert('您没有权限进行此操作');
            }
        },

        //权限判断，当前用户是否为管理员
        async checkAdmin() {
            try {
                console.log('检查id',this.userInfo.userid)
                const response = await fetch('http://192.168.31.140:5555/is-admin', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ user_id: this.userInfo.userid })
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                this.isAdmin = data.is_admin; // 假设接口返回包含 isAdmin 字段
        
            } catch (error) {
                console.error('Error checking admin status:', error);
            }
        },

        //增加权限判断，只有管理员才可以进行模型设置
        async aisetForm() {
            try {
                console.log('检查id',this.userInfo.userid)
                const response = await fetch('http://192.168.31.140:5555/is-admin', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ user_id: this.userInfo.userid })
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                this.isAdmin = data.is_admin; // 假设接口返回包含 isAdmin 字段
                if (this.isAdmin) {
                    // 有权限，进行跳转
                    this.goForward({
                        name: 'manage-aisetting',
                    });
                } else {
                    // 没有权限，弹出提示
                    alert('您没有权限进入配置哦😯');
                }
        
            } catch (error) {
                console.error('Error checking admin status:', error);
            }
            
        },

        //机器人回复消息存在代码内容进行解析
        sanitizedBotMessage(text) {
            return DOMPurify.sanitize(renderMarkdown(text));
        },
        //发送消息方法
        async sendMessage() {
            if (!this.userInput.trim()) return;
            //清空发送后的消息
            const userMessage = this.userInput;
            this.userInput = "";
            // 添加用户消息
            this.messages.push({
                text: userMessage,
                isBot: false,
                avatar: this.userInfo.userimg,
                user_id: this.userInfo.userid,
            });
            // 滚动到最新消息
            this.$nextTick(() => {
                const chatBox = this.$refs.chatBox;
                chatBox.scrollTop = chatBox.scrollHeight;
            });
            //加载状态
            this.isLoading = true;

            //权限处理
            try {
                const authResponse = await axios.post('http://192.168.31.140:5555/get-user',
                    { user_id: this.userInfo.userid },
                    { headers: { 'Content-Type': 'application/json', } });
                if (authResponse.data.is_create) { // 假设返回的权限字段为hasPermission
                    console.log('获取', this.thread_slug)
                    //chat请求(临时的开启服务器解决跨域)

                    const response = await axios.post(`http://103.63.139.165:3001/api/v1/workspace/${this.slug}/thread/${this.thread_slug}/chat`,
                        {
                            message: userMessage,
                            mode: "chat"  // 添加聊天模式 查询query 聊天chat
                        },
                        {
                            headers: {
                                'Authorization': 'Bearer DSXGZFH-PAHMFHT-MH3S15H-QQR6BFG',
                                'Content-Type': 'application/json',
                            }
                        });

                    // 机器人输出的消息
                    const concatenatedResponse = response.data.textResponse;
                    this.messages.push({
                        text: concatenatedResponse,
                        isBot: true,
                        avatar: this.botAvatar,
                        session_id: this.sessionId, // 保存sessionId
                        user_id: this.userInfo.userid,
                    });
                    console.log('查看是否带admin标识', this.userInfo);

                } else if (authResponse.data.is_create === false) {
                    console.log('无权限')
                    this.messages.push({
                        text: "抱歉，此用户无聊天权限。",
                        isBot: true,
                        avatar: this.botAvatar,
                    });
                }
            } catch (error) {
                console.error("Error sending message:", error);
                this.messages.push({
                    text: "Sorry, something went wrong.",
                    isBot: true,
                    avatar: this.botAvatar,
                });
            } finally {
                this.isLoading = false; // 加载结束
                this.$nextTick(() => {
                    const chatBox = this.$refs.chatBox;
                    chatBox.scrollTop = chatBox.scrollHeight;
                });
            }
        },


        //更新最后一条信息保存到数据库
        async updateLastMessage(threadSlug, lastMessage = '') {
            try {
                await axios.post('http://192.168.31.140:5555/update-last', {
                    workspaceSlug: this.slug,
                    threadSlug: threadSlug,
                    lastMessage: lastMessage // 可选的最后一条消息
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                console.log('更新最后一条消息成功');
            } catch (error) {
                console.error('保存最后一条消息失败:', error);
                if (error.response) {
                    console.error('响应状态码:', error.response.status);
                    console.error('响应数据:', error.response.data);
                }
            }
        },

        //新建时打开模型选择
        openModelSelection() {
            this.newchat = true; // 打开模型选择对话框
        },
        //新建选模型后聊天确定时
        async startNewChat() {
            if (!this.newselect) return; // 确保选中了模型

            console.log('查看当前工作区', this.slug);
            // 确保获取当前会话的 thread_slug
            const currentThreadSlug = this.thread_slug; // 使用可选链防止错误
            if (!currentThreadSlug) {
                console.error("当前会话的 thread_slug 未找到");
            } else {
                console.log('当前会话的 thread_slug:', currentThreadSlug);
            }

            // 清空当前消息
            const lastMessage = this.messages[this.messages.length - 1]; // 获取最后一条消息
            this.messages = [];
            this.userInput = "";

            // 根据选择的模型设置机器人头像
            const selectedBot = this.aichatList.find(item => item.value === this.newselect);
            this.botAvatar = selectedBot ? selectedBot.avatar : this.botAvatar; // 赋值相应的头像

            if (lastMessage) {
                console.log(currentThreadSlug)
                await this.updateLastMessage(currentThreadSlug); // 更新最后一条消息
            }
            // 调用新建会话接口
            try {
                const response = await axios.post('http://192.168.31.140:5555/new',
                    {
                        slug: this.slug, // 使用指定的 slug
                        model: this.newselect, // 使用选中的模型
                        avatar: this.botAvatar // 使用模型头像
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                );
                // 处理响应（可根据需要进行调整）
                if (response.status === 200) {
                    console.log('新建会话成功:', response.data);
                    //更新最后一条
                    if (response.data.thread_slug)
                        this.thread_slug = response.data.thread_slug
                } else {
                    console.error('新建会话失败:', response.data);
                }
            } catch (error) {
                console.error("Error starting new chat:", error);
            }

            // 重新添加初始会话记录
            const initialMessages = [
                { text: `你好！我是 ${this.newselect} ，欢迎使用！`, isBot: true, avatar: this.botAvatar }
            ];
            this.messages = initialMessages;
            // 关闭对话框
            this.newchat = false;
        },

        //点击展示历史会话列表
        toggleDrawer() {
            this.drawerVisible = true; // 切换抽屉的可见性
            this.fetchHistoryConversations(); //展示历史会话记录方法
        },
        async fetchHistoryConversations() {
            try {
                const userId = this.userInfo.userid;

                const response = await axios({
                    method: 'POST',
                    url: 'http://192.168.31.140:5555/get-list',
                    data: {
                        user_id: userId
                    },
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                console.log('API 响应:', response.data); // 打印完整的响应数据
                // 检查返回的数据格式并处理
                if (Array.isArray(response.data)) {
                    this.historyConversations = []
                    response.data.forEach(item => {
                        // 经过if过滤掉当前会话
                        if (this.thread_slug != item.session_id) {
                            var temp = {
                                "thread_slug": item.session_id || '',
                                "avatar": item.avatar || '',
                                "modelName": item.model || '未知模型',
                                "lastMessage": item.last_messages || '（你没有跟我聊天噢）',
                                "updatedAt": item.update_time || '未知时间'

                            }
                            this.historyConversations.push(temp)
                        }
                    })

                    console.log('============所有历史会话==============');
                    console.log(this.historyConversations);
                    console.log('====================================');
                } else {
                    console.error('返回的数据格式不正确', response.data);
                }
            } catch (error) {
                console.error('获取历史会话失败', error);
                // 用户友好的提示
                this.$message.error('获取历史会话失败，请稍后重试。');
            }
        },
        //切换历史会话
        async loadConversation(conversation, isInit = false) {
            try {
                // 判断当前会话是否是历史会话
                console.log('切换会话:', conversation);
                this.thread_slug = conversation.thread_slug; // 更新当前会话的 thread_slug
                const workspaceSlug = this.slug; // 替换为实际的 workspaceSlug
                const token = 'CM34YVB-3HJM2RS-PRGK1D2-ECZD4R6'; // 替换为实际的 token

                const response = await axios.get(`http://103.63.139.165:3001/api/v1/workspace/${workspaceSlug}/thread/${this.thread_slug}/chats`, {
                    headers: {
                        'accept': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });

                console.log('对话记录:', response.data); // 打印完整的响应数据

                // 处理返回的历史消息
                const history = response.data.history;
                this.messages = history.map(message => ({
                    text: message.content, // 消息内容
                    isBot: message.role === 'assistant', // 判断消息角色
                    avatar: message.role === 'assistant' ? conversation.avatar : this.userInfo.userimg // 根据角色选择头像
                }));
                this.botAvatar = conversation.avatar; // 更新机器人头像
                console.log('历史消息:', this.messages);
                // 滚动到最新消息
                this.$nextTick(() => {
                    const chatBox = this.$refs.chatBox;
                    chatBox.scrollTop = chatBox.scrollHeight;
                });
            } catch (error) {
                console.error('获取对话记录失败:', error);
                this.$message.error('获取对话记录失败，请稍后重试。');
            }
            // 更新最后一条消息
            if (!isInit) {

                const lastMessage = this.messages[this.messages.length - 1]; // 获取最后一条消息
                await this.updateLastMessage(this.thread_slug, lastMessage ? lastMessage.text : '（暂无更新记录）'); // 更新最后一条消息

                this.drawerVisible = false;
                this.fetchHistoryConversations(); //展示历史会话记录方法`
            }
        },


        //历史列表右键菜单（删除展示）
        handleRightClick(event, conversation) {
            this.selectedConversation = conversation; // 设置当前选中的会话
            console.log('查看删除id:', this.selectedConversation.thread_slug);
            this.contextMenuVisible = true; // 显示右键菜单
            
            const drawerBody = this.$refs.drawerBody;
            console.log('坐标',this.$refs.drawerBody)

            this.$nextTick(() => {
                const drawerBody = this.$refs.drawerBody;
                const drawerBounding = drawerBody.getBoundingClientRect();
                this.contextMenuStyles = {
                    left: `${event.clientX - drawerBounding.left}px`,
                    top: `${event.clientY - drawerBounding.top}px`
                };
            });

        },


        //右键菜单点击删除操作
        async deleteConversation() {
            if (!this.selectedConversation) return; // 确保有选中的会话，没有的话reture退出当前函数
            const payload = { workspaceSlug: this.slug, threadSlug: this.selectedConversation.thread_slug };

            try {
                const response = await axios({
                    method: 'DELETE',
                    url: 'http://192.168.31.140:5555/delete-session',
                    data: payload, // 传递要删除的会话 ID
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

                if (response.status === 200) {
                    this.fetchHistoryConversations(); // 刷新历史会话列表
                    this.$message.success('会话删除成功'); // 显示成功提示
                } else {
                    this.$message.error('删除会话失败，请稍后重试。'); // 显示失败提示
                }
            } catch (error) {
                console.error('删除会话失败', error);
                this.$message.error('删除会话失败，请稍后重试。');
            } finally {
                this.contextMenuVisible = false; // 隐藏右键菜单
                this.selectedConversation = null; // 清空选中的会话
            }
        },

        //关闭右键删除菜单
        closeContextMenu() {
            this.contextMenuVisible = false;
            this.selectedConversation = null; // 清空选中的会话
        },

        //底部输入工具栏
        onToolbar(action) {
            this.hidePopover();
            switch (action) {
                case 'user':
                    this.openMenu("@");
                    break;

                case 'task':
                    this.openMenu("#");
                    break;

                case 'meeting':
                    Store.set('addMeeting', {
                        type: 'create',
                        dialog_id: this.dialogId,
                        userids: [this.userId],
                    });
                    break;
                case 'full':
                    this.onFullInput()
                    break;

                case 'image':
                case 'file':
                case 'call':
                case 'anon':
                    this.$emit('on-more', action)
                    break;
            }
        },
        onSend(type = 'auto') {
            this.emojiTimer && clearTimeout(this.emojiTimer)
            this.emojiQuickShow = false;
            //
            setTimeout(_ => {
                if (this.filterInvalidLine(this.value) === '') {
                    return
                }
                this.hidePopover('send')
                this.rangeIndex = 0
                this.clearSearchKey()
                //
                if (type === 'auto') {
                    type = isMarkdownFormat(this.value) ? 'md' : ''
                }
                if (type === 'normal') {
                    type = ''
                }
                if (type) {
                    this.$emit('on-send', null, type)
                } else {
                    this.$emit('on-send')
                }
            }, this.changeLoad > 0 ? 100 : 0)
        },
        hidePopover(action) {
            this.showMenu = false;
            this.showMore = false;
            if (action === 'send') {
                return
            }
            this.showEmoji = false;
            this.emojiQuickShow = false;
        },
        sendClass() {
            if (this.filterInvalidLine(this.value)) {
                return 'sender';
            }
            if (this.recordReady) {
                return 'recorder'
            }
            return ''
        },
        /**
        * 发送文件
        * @param row
        */
        sendFileMsg(row) {
            const files = $A.isArray(row) ? row : [row];
            if (files.length > 0) {
                this.pasteFile = [];
                this.pasteItem = [];
                files.some(file => {
                    const item = {
                        type: $A.getMiddle(file.type, null, '/'),
                        name: file.name,
                        size: file.size,
                        result: null
                    }
                    if (item.type === 'image') {
                        const reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = ({ target }) => {
                            item.result = target.result
                            this.pasteFile.push(file)
                            this.pasteItem.push(item)
                            this.pasteShow = true
                        }
                    } else {
                        this.pasteFile.push(file)
                        this.pasteItem.push(item)
                        this.pasteShow = true
                    }
                });
            }
        },

    }
}
</script>


