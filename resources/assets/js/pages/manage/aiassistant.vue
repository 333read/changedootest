<template>
    <div class="page-aiassistant">
        <PageTitle :title="$L('AI助手')"/>
            <div class="aiassistant-wrapper" ref="aiassistantWrapper">
                    <div class="aiassistant-head">
                            <div class="aiassistant-nav" v-for="(item, key) in ailist"  :key="key">
                                <div class="common-nav-back portrait" @click="goForward({name: 'manage-application'},true)" ><i class="taskfont">&#xe676;</i></div>
                                <h1>{{$L('AI助手')}}</h1>
                                <div class="aiassistant-setting" @click="aisetForm(item)">
                                    <Icon type="ios-settings-outline" />
                                </div>
                                <div style="margin-left: 20px;">
                                    <el-select v-model="newselect" class="bot-select" @change="onOptionChange" >    
                                            <el-option label="ChatGPT" value="ChatGPT" ></el-option>
                                            <el-option label="Gemini" value="gemini"></el-option>
                                            <el-option label="Claude" value="claude"></el-option>
                                            <el-option label="Custom" value="custom"></el-option>
                                    </el-select>
                                </div>
                            </div>
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
                                            {{ message.text }}
                                            <span v-if="message.uuid"> (UUID: {{ message.uuid }})</span>
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

                            <div class="chat-input-container">
                                <Button @click="openModelSelection" style="margin: 3px;">新建会话</Button>
                                        <Modal
                                            title="创建新会话"
                                            v-model="newchat"
                                            :visible.sync="modelDialogVisible"
                                            :closable="false">
                                            <Select v-model="newselect" size="large" style="width:300px">
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
                                    
                                    <li>
                                    <EPopover
                                        ref="emoji"
                                        v-if="!emojiBottom"
                                        v-model="showEmoji"
                                        :visibleArrow="false"
                                        placement="top"
                                        popperClass="chat-input-emoji-popover">
                                        <ETooltip slot="reference" ref="emojiTip" :disabled="$isEEUiApp || windowTouch || showEmoji" placement="top" :enterable="false" :content="$L('表情')">
                                            <i class="taskfont">&#xe7ad;</i>
                                        </ETooltip>
                                        <ChatEmoji v-if="showEmoji" @on-select="onSelectEmoji" :searchKey="emojiQuickKey"/>
                                    </EPopover>
                                    <ETooltip v-else ref="emojiTip" :disabled="$isEEUiApp || windowTouch || showEmoji" placement="top" :enterable="false" :content="$L('表情')">
                                        <i class="taskfont" @click="showEmoji=!showEmoji">&#xe7ad;</i>
                                    </ETooltip>
                                </li>

                                <!-- @ # -->
                                <li>
                                    <ETooltip placement="top" :disabled="$isEEUiApp || windowTouch" :enterable="false" :content="$L('选择成员')">
                                        <i class="taskfont" @click="onToolbar('user')">&#xe78f;</i>
                                    </ETooltip>
                                </li>
                                <li>
                                    <ETooltip placement="top" :disabled="$isEEUiApp || windowTouch" :enterable="false" :content="$L('选择任务')">
                                        <i class="taskfont" @click="onToolbar('task')">&#xe7d6;</i>
                                    </ETooltip>
                                </li>
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

                            <el-drawer
                                            title="历史会话"
                                            :visible.sync="drawerVisible"
                                            direction="rtl"
                                            :close-on-click-modal="false"
                                            >
                                            <div class="history-list">
                                                <div
                                                v-for="(session, index) in chatHistory"
                                                :key="index"
                                                class="history-item"
                                                @click="loadChatSession(session)"
                                                >
                                                <img :src="session.avatar" alt="Bot Avatar" class="avatar history-avatar" />
                                                    <div class="history-info">
                                                    <div class="history-title">{{ session.title }}</div>
                                                    <div class="last-message">{{ session.lastMessage }}</div>
                                                    <div class="last-time">{{ session.lastTime }}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </el-drawer>
                        </div>
                    </div>
            </div>
        </div>
</template>

<script>
    import axios from "axios";
    import ChatEmoji from "./components/ChatInput/emoji";
    export default {
        name: 'ChatInput',
        comments:{ChatEmoji},
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
                users:[], // by hss20240903
                messages: [], // by hss20240911
                userInput: "",  // by hss20240911
                newchat: false,
                modelDialogVisible: false, 
                newselect:'',
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
                ailist: [
                    {
                        value: 'chatgpt',
                        label: 'ChatGPT',
                        avatar: '/images/avatar/default_openai.png'
                    }
                ],
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

                showMenu: false,
                showMore: false,
                showEmoji: false,

                emojiQuickShow: false,
                emojiQuickKey: '',
                emojiQuickItems: [],
            }
        },

        mounted() {
            // 初始化时创建一个默认会话记录
            const initialMessages = [
            { text: "你好！欢迎使用AI机器人！", isBot: true, avatar:this.botAvatar }
            ];
            this.messages = initialMessages;
            this.chatHistory.push({ 
            title: "初始会话",
            messages: initialMessages,
            lastMessage: initialMessages[0].text,
            lastTime: new Date().toLocaleString(),
            avatar: this.botAvatar
        
            });
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
        },
        methods:{
                //20240920
                async sendMessage() {
                    if (!this.userInput.trim()) return;

                    // 添加用户消息
                    this.messages.push({ 
                        text: this.userInput, 
                        isBot: false,
                        avatar: 'http://localhost:8090/avatar/adm%2A%2A%2A%40dootask.com.png'
                    });

                    this.isLoading = true;

                    try {
                        const response = await axios.post('http://103.63.139.165:3001/api/v1/workspace/dootask/stream-chat', 
                        { message: this.userInput }, 
                        { 
                        headers: { 
                            'Authorization': 'Bearer DSXGZFH-PAHMFHT-MH3S15H-QQR6BFG',
                            'Content-Type': 'application/json',
                        }
                        });

                        const concatenatedResponse = this.processResponse(response.data);
                        this.messages.push({
                        text: concatenatedResponse,
                        isBot: true,
                        avatar: 'this.botAvatar',
                        });

                        // 更新会话历史记录
                        this.updateChatHistory(concatenatedResponse);

                    } catch (error) {
                        console.error("Error sending message:", error);
                        this.messages.push({
                        text: "Sorry, something went wrong.",
                        isBot: true,
                        avatar: 'this.botAvatar',
                        });
                    } finally {
                        this.isLoading = false;
                        this.userInput = "";
                    }
                    },
                    processResponse(responseData) {
                    const dataStrings = responseData.split('data: ').filter(str => str.trim() !== '');
                    const textResponses = dataStrings.map(dataString => {
                        try {
                        const parsedData = JSON.parse(dataString.trim());
                        return parsedData.textResponse ? parsedData.textResponse.trim() : null;
                        } catch (e) {
                        console.error('解析 data 数据失败:', e);
                        return null;
                        }
                    });
                    return textResponses.filter(Boolean).join('').trim();
                    },
                    
                    openModelSelection() {
                    this.newchat = true; // 打开模型选择对话框
                    },
                    startNewChat() {
                    if (!this.newselect) return; // 确保选中了模型

                    // 保存当前会话记录
                    if (this.messages.length > 0) {
                        this.chatHistory.push({ 
                        title: `会话 ${this.chatHistory.length + 1}`,
                        messages: [...this.messages],
                        lastMessage: this.messages[this.messages.length - 1].text,
                        lastTime: new Date().toLocaleString(),
                        avatar: this.botAvatar
                        });
                    }

                    // 清空当前消息
                    this.messages = [];
                    this.userInput = "";

                    
                    // 重新添加初始会话记录
                    const initialMessages = [
                        { text: `你好！我是 ${this.newselect} ，欢迎使用！`, isBot: true, avatar: this.botAvatar }
                    ];
                    this.messages = initialMessages;
                    
                    // 关闭对话框
                    this.newchat = false;
                    },
                    //新选择----------------------------------------------------------
                    onOptionChange() {
                    if (!this.newselect) return; // 确保选中了模型

                    // 保存当前会话记录
                    if (this.messages.length > 0) {
                        this.chatHistory.push({ 
                        title: `会话 ${this.chatHistory.length + 1}`,
                        messages: [...this.messages],
                        lastMessage: this.messages[this.messages.length - 1].text,
                        lastTime: new Date().toLocaleString(),
                        avatar: this.botAvatar
                        });
                    }

                    // 清空当前消息
                    this.messages = [];
                    this.userInput = "";

                    // 重新添加初始会话记录
                    const initialMessages = [
                        { text: `你好！我是 ${this.newselect} ，欢迎使用！`, isBot: true, avatar: this.botAvatar }
                    ];
                    this.messages = initialMessages;
                    
                    // 关闭对话框
                    this.newchat = false;
                    },
                    // -------------------------------------------------------------------------
                    updateChatHistory(lastResponse) {
                    // 更新最近一条消息及时间
                    if (this.chatHistory.length > 0) {
                        const currentSession = this.chatHistory[this.chatHistory.length - 1];
                        currentSession.lastMessage = lastResponse;
                        currentSession.lastTime = new Date().toLocaleString();
                    }
                    },

                    loadChatSession(session) {
                    this.messages = session.messages; // 加载选定的历史会话
                    this.userInput = ""; // 清空输入框
                    this.drawerVisible = false; // 关闭抽屉
                    },
                    toggleDrawer() {
                    this.drawerVisible = !this.drawerVisible; // 切换抽屉的可见性
                    },



            //setting弹窗
            aisetForm(item){
                this.goForward({name: 'manage-aisetting'});
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
        // 表情
        showMore(val) {
            if (val) {
                this.showMenu = false;
                // this.showMore = false;
                this.showEmoji = false;
                this.emojiQuickShow = false;
            }
        },

        showEmoji(val) {
            if (this.emojiBottom) {
                if (val) {
                    this.quill.enable(false)
                } else if (!this.disabled) {
                    this.quill.enable(true)
                }
            }
            if (val) {
                let text = this.value
                    .replace(/&nbsp;/g," ")
                    .replace(/<[^>]+>/g, "")
                if (text
                    && text.indexOf(" ") === -1
                    && text.length >= 1
                    && text.length <= 8) {
                    this.emojiQuickKey = text;
                } else {
                    this.emojiQuickKey = "";
                }
                //
                this.showMenu = false;
                this.showMore = false;
                // this.showEmoji = false;
                this.emojiQuickShow = false;
                if (this.quill) {
                    const range = this.quill.selection.savedRange;
                    this.rangeIndex = range ? range.index : 0
                }
            } else if (this.rangeIndex > 0) {
                this.quill.setSelection(this.rangeIndex)
            }
        },
        emojiQuickShow(val) {
            if (val) {
                this.showMenu = false;
                this.showMore = false;
                this.showEmoji = false;
                // this.emojiQuickShow = false;
            }
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
        onSelectEmoji(item) {
            if (!this.quill) {
                return;
            }
            if (item.type === 'emoji') {
                this.quill.insertText(this.rangeIndex, item.text);
                this.rangeIndex += item.text.length
                if (this.windowLandscape) {
                    this.showEmoji = false;
                }
            } else if (item.type === 'emoticon') {
                this.$emit('on-send', `<img class="emoticon" data-asset="${item.asset}" data-name="${item.name}" src="${item.src}"/>`)
                if (item.asset === "emosearch") {
                    this.$emit('input', "")
                }
                if (this.windowLandscape) {
                    this.showEmoji = false;
                }
            }
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


<style scoped>

.chatBox {
  width: 100%;
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  height: calc(80vh - 10px); /* 设置合适的高度 */
  position: relative; /* 添加相对定位 */
}

.message-content {
  display: flex;
  align-items: flex-end; /* 垂直对齐 */
  margin-bottom: 15px; /* 间距 */
}
.avatar {
  width: 40px; /* 头像宽度 */
  height: 40px; /* 头像高度 */
  border-radius: 50%; /* 圆形头像 */
  margin-right: 10px; /* 头像和消息内容之间的间距 */
  margin-left: 10px; /* 头像和消息内容之间的间距 */
}
.bot-message {
  justify-content: flex-start; /* 头像和消息在左侧 */
}

.user-message {
  justify-content: flex-end; /* 头像和消息在右侧 */
}

.bot-avatar {
  order: 0; /* 头像在消息内容之前 */
}

.user-avatar {
  order: 2; /* 头像在消息内容之后 */
}


.text-content {
  max-width: 70%; /* 最大宽度 */
  padding: 10px;
  border-radius: 15px;
  word-wrap: break-word; /* 自动换行 */
  text-align: left; /* 机器人消息左对齐 */
}

.bot-message .text-content {
  background-color:#f4f5f7; /* 机器人消息背景色 */
  color:#303133
}

.user-message .text-content {
  background-color: #84c66a; /* 用户消息背景色 */
  color: #fff; /* 用户消息文字颜色 */
}

/* .chat-input-container{
    position: absolute;
} */


.chat-input-container li{
    width: 30px;
    height: 30px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    display: flex;
}
.chat-input-container .taskfont{
    font-size: 22px;
    line-height: 30px;
    display: inline-block;
}


.input-container {
  display: flex;
  align-items: center;
  padding: 5px 18px 22px 0 ;
  border-radius: 10px;
  background-color: #f4f5f7;
  width: 100%;
}

.user-input {
  flex: 1;
  margin-right: 10px;      /* 输入框与按钮之间的间距 */
        .el-input__inner {
            background-color: #f4f5f7;
            border: none;
        }
}



.send-button {
  padding: 1px 6px;
  margin-left: 15px;
  border: none;
  background-color: #84c66a;
  color: #fff;
  cursor: pointer;
  font-size: 22px;
  border-radius: 50%;
}

.send-button:hover {
  background-color: #d8e3ef;
}
</style>
