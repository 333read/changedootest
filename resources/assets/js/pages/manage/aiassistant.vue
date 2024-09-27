<template>
    <div class="page-aiassistant">
        <PageTitle :title="$L('AI助手')"/>
            <div class="aiassistant-wrapper" ref="aiassistantWrapper">
                    <div class="aiassistant-head">
                            <div class="aiassistant-nav">
                                <div class="common-nav-back portrait" @click="goForward({name: 'manage-application'},true)" >
                                    <i class="taskfont">&#xe676;</i>
                                </div>
                                <h1>{{$L('AI助手')}}</h1>
                                <div class="aiassistant-setting" @click="aisetForm(item,newselect)">
                                    <Icon type="ios-settings-outline" />
                                </div>

                                <div class="nav-select">
                                    <el-select v-model="newselect" class="bot-select" @change="onOptionChange" >    
                                            <el-option label="ChatGPT" value="ChatGPT" ></el-option>
                                            <el-option label="Gemini" value="gemini"></el-option>
                                            <el-option label="Claude" value="claude"></el-option>
                                            <el-option label="Custom" value="custom"></el-option>
                                    </el-select>
                                </div>
                            </div>
                            <!-- 历史会话图标 -->
                            <div class="aiassistant-historychat" >
                                <Icon @click="toggleDrawer" type="ios-clock-outline" />
                            </div> 
                    </div>
                    <div class="aiassistant-content">
                        <div>
                            <div class="chatBox" ref="chatBox">
                                <div v-for="(message, index) in messages" :key="index" class="message">
                                    <!-- 机器人消息 -->
                                        <div v-if="message.isBot" class="message-content bot-message">
                                            <img v-if="message.avatar" :src="botAvatar" alt="Bot Avatar" class="avatar bot-avatar"/>
                                            <div class="text-content">
                                                <span v-html="sanitizedBotMessage(message.text)"></span>
                                            </div>
                                        </div>
                                        <!-- 用户消息 -->
                                        <div v-else class="message-content user-message">
                                            <div class="text-content">
                                            {{ message.text }}
                                                
                                            </div>
                                            <img v-if="message.avatar" :src="message.avatar" alt="User Avatar" class="avatar user-avatar"/>
                                        </div>
                                </div>
                            </div>

                            </div>

                            <DrawerOverlay
                                v-model="drawerVisible" 
                                placement="right" 
                                :size="650"
                                            >
                                        <div class="ivu-modal-wrap-aiass">
                                                <div class="ivu-modal-wrap-aiass-title">
                                                    {{ $L('历史会话记录') }}
                                                </div>
                                                <div class="ivu-modal-wrap-aiass-body">
                                                    <div class="history-list">
                                                            <div
                                                                v-for="(session, index) in chatHistory"
                                                                :key="index"
                                                                class="history-item"
                                                                @click="loadChatSession(session)"
                                                                >
                                                                <img :src="session.avatar" alt="Bot Avatar" class="history-avatar" />
                                                                    <div class="history-info">
                                                                        <div class="history-title">{{ session.title }}</div>
                                                                        <div class="history-title">{{ session.lastSelect}}</div>
                                                                        <div class="last-message">{{ session.last_message }}</div>
                                                                        <div class="last-time">{{ session.lastTime }}</div>
                                                                    </div>
                                                            </div>
                                                    </div>
                                                </div>
                                        </div>
                                </DrawerOverlay>
                        </div>
                    </div>
                    <div class="chat-input-container">
                                <Button type="primary" @click="openModelSelection" class="new-chat-button">新建会话</Button>
                                        <Modal
                                            title="创建新会话"
                                            v-model="newchat"
                                            :visible.sync="modelDialogVisible"
                                            :closable="false">
                                            <Select v-model="newselect" size="large" class="new-chat-select">
                                                <Option v-for="item in aichatList" :value="item.value" :key="item.value">
                                                    {{ item.label }}
                                                </Option>
                                            </Select>
                                            <div slot="footer" class="adaption">
                                                <Button type="default" @click="newchat=false">{{$L('取消')}}</Button>
                                                <Button type="primary"  @click="startNewChat">{{$L('确定')}}</Button>
                                            </div>
                                        </Modal>
                                <div class="input-container">
                                    <el-input
                                        v-model="userInput"
                                        placeholder="输入消息..."
                                        class="user-input"
                                        @keyup.enter.native="sendMessage"
                                    ></el-input>

                                <!-- 录音图标 -->
                                <li>
                                    <ETooltip placement="top" :disabled="$isEEUiApp || windowTouch" :enterable="false" :content="$L('点击录音')">
                                        <i v-if="sendClass !== 'recorder'" class="taskfont">&#xe609;</i>
                                        
                                    </ETooltip>
                                </li>
                                <!-- 图片文件 -->
                                <li>
                                    <EPopover
                                        ref="more"
                                        v-model="showMore"
                                        :visibleArrow="false"
                                        placement="top"
                                        popperClass="chat-input-more-popover">
                                        <ETooltip slot="reference" ref="moreTip" :disabled="$isEEUiApp || windowTouch || showMore" placement="top" :enterable="false" :content="$L('展开')">
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
    import DOMPurify from "dompurify";
    import renderMarkdown from "./aisetting/utils/markdown";
    import { mapState } from 'vuex';
    import DrawerOverlay from '../../components/DrawerOverlay'
    export default {
        components:{
            DrawerOverlay,
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
            newselect:{
                type: String,
                default:'Custom'
            }
        },
        data(){
            return {
                userInput: "",// 20240926
                socket: null, // WebSocket instance
                slug: "workspace-for-user-1", // Example slug
                session_id: 0, // Example session ID
                users:[], // by hss20240903
                messages: [], // by hss20240911
                userInput: "",  // by hss20240911
                newchat: false,
                modelDialogVisible: false, 
                newselect:'',
                showMore: false,
                chatHistory: [], // 存储历史会话记录
                drawerVisible: false,
                botAvatar:'/images/avatar/default_anything.png',
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
                aiformVisible:false,
                password: '',
                pwdObj: { pwdType: 'password'},
                valuemol: '',

            }
        },


        //0922
        created() {
            // 获取路由参数
            const { newselect } = this.$route.params;
            if (newselect) {
                this.newselect = newselect; // 设置初始值
            }
        },


        mounted() {

            this.socket = new WebSocket('ws://localhost:3333/ws');

            this.socket.onmessage = (event) => {
                const response = JSON.parse(event.data); //将回答内容转换为json格式
                
                    console.log(response)
                    const textResponse = typeof response.textResponse === 'string' ? response.textResponse : '';
                    console.log(textResponse);
                    this.messages.push({
                        text: textResponse,
                        isBot: true,
                        avatar: 'http://localhost:8090/images/avatar/default_anything.png',
                    });
                    
                };

            this.socket.onerror = (error) => {
            console.error("WebSocket error:", error);
            };

            // 初始化时创建一个默认会话记录
            const initialMessages = [
            { text: "你好！欢迎使用AI机器人！", isBot: true, avatar:this.botAvatar }
            ];
            this.messages = initialMessages;
            
        },

        computed: {
            pasteTitle() {
            const {pasteItem} = this;
            let hasImage = pasteItem.find(({type}) => type == 'image')
            let hasFile = pasteItem.find(({type}) => type != 'image')
            if (hasImage && hasFile) {
                return '发送文件/图片'
            } else if (hasImage) {
                return '发送图片'
            }
            return '发送文件'
        },
            msgTags({dialogData}) {
            const array = [
                {type: '', label: '消息'},
            ];
            if (dialogData.has_tag) {
                array.push({type: 'tag', label: '标注'})
            }
            if (dialogData.has_todo) {
                array.push({type: 'todo', label: '事项'})
            }
            if (dialogData.has_image) {
                array.push({type: 'image', label: '图片'})
            }
            if (dialogData.has_file) {
                array.push({type: 'file', label: '文件'})
            }
            if (dialogData.has_link) {
                array.push({type: 'link', label: '链接'})
            }
            if (dialogData.group_type === 'project') {
                array.push({type: 'project', label: '打开项目'})
            }
            if (dialogData.group_type === 'task') {
                array.push({type: 'task', label: '打开任务'})
            }
            if (dialogData.group_type === 'okr') {
                array.push({type: 'okr', label: '打开OKR'})
            }
            return array
        },
        ...mapState([
            'userInfo',
        ])
        },
        methods:{
                //20240924
                sanitizedBotMessage(text) {
                    return DOMPurify.sanitize(renderMarkdown(text));
                },
                //20240920
                sendMessage() {
                    if (!this.userInput.trim()) return;

                    // 添加用户消息
                    this.messages.push({ 
                        text: this.userInput, 
                        isBot: false,
                        avatar: this.userInfo.userimg,
                    });
                    console.log(this.userInfo.userid);
                    // 滚动到最新消息
                    this.$nextTick(() => {
                            const chatBox = this.$refs.chatBox;
                            chatBox.scrollTop = chatBox.scrollHeight;
                        });


                    //chat响应
                     // Construct the request body
                        const requestBody = {
                            action: "chat",
                            data: {
                                message: this.userInput,
                                mode: "chat",
                                slug: this.slug,
                                user_id: this.userInfo.userid,
                            },
                        };

                        // Send message via WebSocket
                        this.socket.send(JSON.stringify(requestBody));

                        // Clear user input
                        this.userInput = "";
                    
                },


                    
                    //打开新建模型的选择modal
                    openModelSelection() {
                        this.newchat = true; // 打开模型选择对话框
                    },

                    //在modal中选择模型后，关闭新建模型的选择modal
                    startNewChat() {
                            const previousSessionId = this.session_id; // 使用 this.sessionId

                            if (this.newselect) {
                                this.session_id++; // 确保选中了模型时自动加一
                            }

                            this.socket.send(JSON.stringify({
                            action: "insert-message",
                            data: {
                                user_id: this.userInfo.userid,
                                session_id: this.session_id,
                                model: this.newselect,
                                avatar: this.botAvatar,
                                last_message: this.messages[this.messages.length - 1].text,
                                lastTime: new Date().toLocaleString(),
                            },
                        }));
                        this.newchat = false; // 关闭模型选择对话框

                        //   // Fetch history from the server
                            this.socket.send(JSON.stringify({
                                action: "get-history",
                                data: {
                                    user_id: this.userInfo.userid,
                                    model: this.newselect,
                                    session_id: session_id,
                                    last_message:last_message,
                                    lastTime:update_time
                                }
                            }));

                        // 清空当前消息
                        this.messages = [];
                        this.userInput = "";

                        // by hss202409222
                        // 根据选择的模型设置机器人头像
                        const selectedBot = this.aichatList.find(item => item.value === this.newselect);
                        this.botAvatar = selectedBot ? selectedBot.avatar : this.botAvatar; // 赋值相应的头像

                        //0922
                        // 重新添加初始会话记录
                        const initialMessages = [
                            { text: `你好！我是 ${this.newselect} ，欢迎使用！`, isBot: true, avatar: this.botAvatar }
                        ];
                        this.messages = initialMessages;
                        
                        // 关闭对话框
                        this.newchat = false;
                    },

                    //下拉框的模型选择
                    onOptionChange() {

                    this.lastSelect = this.newselect; // 保存上一次选择的模型
                    if (!this.newselect) return; // 确保选中了模型

                    this.socket.send(JSON.stringify({
                        action: "insert-message",
                        data: {
                            user_id: this.userInfo.userid,
                            session_id: this.session_id,
                            model: this.newselect,
                            avatar: this.botAvatar,
                            last_message: this.messages[this.messages.length - 1].text,
                            lastTime: new Date().toLocaleString(),
                        },
                    }));

                    // 获取历史内容
                    this.socket.send(JSON.stringify({ 
                        action: "get-history",
                        data: {
                            model: this.newselect,
                            last_message: this.messages[this.messages.length - 1].text,
                            lastTime: new Date().toLocaleString(),
                        }
                    }));


                        // 清空当前消息
                        this.messages = [];
                        this.userInput = "";

                        // by hss202409222
                        // 根据选择的模型设置机器人头像
                        const selectedBot = this.aichatList.find(item => item.value === this.newselect);
                        this.botAvatar = selectedBot ? selectedBot.avatar : this.botAvatar; // 赋值相应的头像
                        
                        //0922
                        // 重新添加初始会话记录
                        const initialMessages = [
                            { text: `你好！我是 ${this.newselect} ，欢迎使用！`, isBot: true, avatar: this.botAvatar }
                        ];
                        this.messages = initialMessages;
                        
                        // 关闭对话框
                        this.newchat = false;
                    },
                    
                    toggleDrawer() {
                        this.drawerVisible = true; // 切换抽屉的可见性
                    },

            //setting弹窗
            aisetForm(){
                this.goForward({
                    name: 'manage-aisetting',
                    params: { newselect: this.newselect } // 传递选择的模型
                    
                });
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
                        reader.onload = ({target}) => {
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
