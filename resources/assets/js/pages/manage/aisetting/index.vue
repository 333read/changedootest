<template>
    <div class="page-aiassistant">
        <PageTitle :title="$L('AI助手设置')"/>
        <div class="aiassistant-wrapper" ref="aiassistantWrapper">
            <div class="aiassistant-head">
                <div class="aiassistant-nav">
                    <div class="common-nav-back" @click="goBack()"><i class="taskfont">&#xe676;</i></div>
                    <h1>{{$L('AI助手设置')}}</h1>
                </div>
            </div>
            <div class="aiassistant-setting-content">
                <div class="aiassistant-setting-header">
                    <h2>聊天AI提供商</h2>
                </div>

                <div class="aiassistant-llm-list">
                    <div class="llm-details" v-if="selectedLLM">
                        <div>
                            <el-select v-model="selectedLLM" prop="selectedLLM"  class="llm-select" @change="updateLLM"  filterable>
                                <template slot="prefix">
                                    <img :src="currentChat.img" class="prefix-llm-icon" />
                                    <!-- <p style="">{{ currentChat.desc }}</p> -->
                                </template>
                                <el-option
                                    v-for="item in aichatList"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                    class="llm-option"
                                    >
                                    <div >
                                        <div class="llm-content">
                                            <img :src="item.img" class="llm-icon" />
                                            <div>
                                                <div>{{ item.label }}</div>
                                                <div >{{ item.desc }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </el-option>
                            </el-select>
                            <!-- <div style="margin-left: 80px;">{{ currentChat.desc }}</div> -->
                        </div>
                    </div>

                    <el-form v-if="selectedLLM === 'openai'" :model="openAISettings">
                        <Row class="aiassistant-form-row">
                            <Col flex="200px">
                                <el-form-item label="Chat Model Selection">
                                    <el-select v-model="openAISettings.model" class="form-select">
                                        <el-option label="gpt-3.5-turbo" value="gpt-3.5-turbo"></el-option>
                                        <el-option label="gpt-4" value="gpt-4"></el-option>
                                    </el-select>
                                </el-form-item>
                            </Col>
                            <Col flex="100px"></Col>
                            <Col flex="200px">
                                <el-form-item label="API Key" v-if="isAdmin">
                                    <Input class="form-input" v-model="openAISettings.apiKey" type="password" size="large" />
                                </el-form-item>
                            </Col>
                        </Row>    
                    </el-form>
                    <el-form v-if="selectedLLM === 'gemini'" :model="geminiSettings">
                        <Row class="aiassistant-form-row" >
                            
                            <Col flex="200px">
                                <el-form-item label="Chat Model Selection">
                                    <el-select v-model="geminiSettings.model" class="form-select">
                                        <el-option label="gemini-pro" value="gemini-pro"></el-option>
                                        <el-option label="gemini-1.0-pro" value="gemini-1.0-pro"></el-option>
                                        <el-option label="gemini-1.5-pro-lastest" value="gemini-1.5-pro-lastest"></el-option>
                                        <el-option label="gemini-1.5-flash-lastest" value="gemini-1.5-flash-lastest"></el-option>
                                        <el-option label="gemini-1.5-pro-exp-0801" value="gemini-1.5-pro-exp-0801"></el-option>
                                    </el-select>
                                </el-form-item>
                            </Col>
                            <Col flex="100px"></Col>
                            <Col flex="200px">
                                <el-form-item label="API Key" v-if="isAdmin">
                                    <Input v-model="geminiSettings.apiKey"  class="form-input" type="password" size="large" />
                                </el-form-item>
                            </Col>
                            <Col flex="100px"></Col>
                            <Col flex="200px">
                                <el-form-item label="Safety Setting" v-if="isAdmin">
                                    <el-select v-model="geminiSettings.safeset" class="form-select">
                                        <el-option label="None" value="None"></el-option>
                                        <el-option label="Block few" value="Block few"></el-option>
                                        <el-option label="Block some(default)" value="Block some(default)"></el-option>
                                        <el-option label="Block most" value="Block most"></el-option>
                                    </el-select>
                                </el-form-item>
                            </Col>
                        </Row>    
                    </el-form>
                    <el-form v-if="selectedLLM === 'ollama'" :model="ollamaSettings">

                        <Row class="aiassistant-form-row">
                            <Col flex="200px">
                                <el-form-item label="Ollama Modal">
                                    <el-select v-model="ollamaSettings.model" class="form-select">
                                        <el-option label="glm4:9b" value="glm4:9b"></el-option>
                                        <el-option label="mxbai-embed-large:latest" value="mxbai-embed-large:latest"></el-option>
                                        <el-option label="mxbai-embed-text:latest" value="mxbai-embed-text:latest"></el-option>
                                    </el-select>
                                    <p class="form-desc">Choose the Ollama model you want to use for your conversations.</p>
                                </el-form-item>
                            </Col>
                            <Col flex="100px"></Col>
                            <Col flex="200px">
                                <el-form-item label="Max Token" >
                                    <InputNumber v-model="ollamaSettings.maxToken" size="large" class="form-input" />
                                    <p class="form-desc">Maximum number of tokens for context and response.</p>
                                </el-form-item>
                            </Col>
                            <Col flex="100px"></Col>
                            
                        </Row>
                        <Row>
                            <div class="showtoggle" v-if="isAdmin">
                                <div class="ToggleBtn" @click="toggle">
                                    {{ isExpanded ? 'Hide advanced settings' : 'Show advanced settings' }}
                                    <span v-if="isExpanded"><Icon type="ios-arrow-up" /></span>
                                    <span v-else><Icon type="ios-arrow-down" /></span>
                                </div>
                                <div :class="['inline-block', { 'expanded': isExpanded }]">
                                    <span v-if="isExpanded">
                                    <Row>
                                        <Col flex="300px">
                                            <el-form-item label="Ollama Base URL">
                                                <Input v-model="ollamaSettings.baseUrl" size="large" class="form-input"  />
                                            </el-form-item>
                                        </Col>
                                        <Col flex="10px"></Col>
                                        <Col flex="200px">
                                            <el-form-item label="Ollama Keep Alive">  
                                                <el-select v-model="ollamaSettings.Alive" class="form-select">
                                                    <el-option label="Forever" value="Forever"></el-option>
                                                    <el-option label="1 hour" value="1 hour"></el-option>
                                                    <el-option label="5 minutes" value="5 minutes"></el-option>
                                                </el-select>
                                                <p class="form-desc">Choose the Ollama model you want to use for your conversations.</p>
                                            </el-form-item>
                                        </Col>
                                        <Col flex="50px"></Col>
                                        <Col flex="200px">
                                            <el-form-item label="Performance Mode">  
                                                <el-select v-model="ollamaSettings.Mode"  prop="selollPM" class="form-select">
                                                    <el-option label="Base(Default)" value="Base(Default)"></el-option>
                                                    <el-option label="maximum" value="maximum"></el-option>
                                                </el-select>
                                                <p class="form-desc">Choose the performance mode for the Ollama model.</p>
                                            </el-form-item>
                                        </Col>
                                    </Row>
                                    </span>
                                </div>
                            </div>                
                        </Row>
                    </el-form>  
                    <el-form v-if="selectedLLM === 'claude'" :model="claudeSettings">
                        <Row class="aiassistant-form-row" >
                            <Col flex="200px">
                                <el-form-item label="API Key">
                                    <Input v-model="claudeSettings.apiKey"  class="form-input" type="password" size="large" />
                                </el-form-item>
                            </Col>
                            <Col flex="100px"></Col>
                            <Col flex="200px">
                                <el-form-item label="Chat Model Selection">
                                    <el-select v-model="claudeSettings.model" class="form-select">
                                        <el-option label="gpt-3.5-turbo" value="gpt-3.5-turbo"></el-option>
                                        <el-option label="gpt-4" value="gpt-4"></el-option>
                                    </el-select>
                                </el-form-item>
                            </Col>
                        </Row>    
                    </el-form>                                                                     
                </div>
            </div>
        </div>
        <div class="setting-footer" style="">
                <Button  class="footer-button" type="primary" @click="submitForm">{{$L('提交')}}</Button>
                <Button  class="footer-button" @click="resetForm" style="margin-left: 8px">{{$L('重置')}}</Button>
        </div>
    </div>
</template>    
<script>
import { Row } from 'view-design-hi';
import { mapState } from 'vuex';
import axios from 'axios';

export default {
    props:{
        chatlabel: {
            default: 'ChatGPT',
            type: String
        },
        chatscr: {
            default: '/images/avatar/default_openai.png',
            type: String
        },
        chatdesc: {
            default: 'The fastest LLM inferencing available for real-time AI applications.',
            type: String
        },
        selectedLLM:{
            default: 'openai',
            type: String,
            // required: true
        }
        },
    
    data() {
        return {
            newselect: '', // 初始化选择的模型
            // selectedLLM:'',
            localLLM: this.selectedLLM, // 本地使用选择的模型
            openAISettings: {
                apiKey: '123456',
                model: 'gpt-3.5-turbo',
            },
            geminiSettings: {
                apiKey: '123456',
                model: 'gemini-pro',
                safeset:'Block some(default)',
            },
            claudeSettings:{
                apiKey: '123456',
                model: 'gpt-3.5-turbo',
            },
            ollamaSettings: {
                model: 'glm4:9b',
                maxToken: 4096,
                baseUrl: 'http://llm.frp.coss.im:2334',
                Alive: 'Forever',
                Mode: 'Base(Default)',
                },

            newchat: false,
            newselect: '',
            valueselectopenai:'',
            valuepawopenai:'',
            valueselectoll:'',
            valueoll:'',
            valueollurl:'',
            selollalive:'',
            selollPM:'',
            aichatList: [
                    {
                        value: 'openai',
                        label: 'openai',
                        desc:'The fastest LLM inferencing available for real-time AI applications.',
                        img: '/images/avatar/modal_openai.png'
                    },
                    {
                        value: "gemini",
                        label: "gemini",
                        desc:'The fastest LLM inferencing available for real-time AI applications.',
                        img: '/images/avatar/modal_gemini.png'
                    },
                    {
                        value: "ollama",
                        label: "ollama",
                        desc:'Run LLMs locallly on your machine.',
                        img: '/images/avatar/modal_llo.png'
                    },
                ],
                isExpanded: false, // 控制下拉菜单的显示与隐藏
                slug: "workspace-for-user-1", // 工作区设置
                isAdmin: false,// 是否是管理员
            }
        },

        created() {
            // 获取路由参数
            const { newselect } = this.$route.params;
            if (newselect) {
                this.newselect = newselect; // 设置初始值
            }
            this.slug = "workspace-for-user-" + this.userInfo.userid; // 获取当前会话的 slug
        },
        mounted() {
                this.checkAdmin(); // 初始挂载检查是否是管理员
            },

        computed: {
            ...mapState(['userInfo']),
            currentChat() {
                return this.aichatList.find(item => item.value === this.selectedLLM) || {};
                }
            },

        // 监听子组件数据变化
        watch:{
            selectedLLM(newVal){
                this.localLLM = newVal;
            },
        },

        methods:{

            //用户可见性
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

            aimodalselect(item){
                console.log("aimodalselect", item)
                this.newchat = false,
                this.chatlabel = item.label,
                this.chatscr = item.img,
                this.chatdesc = item.desc 
            },
            toggle(){
                this.isExpanded = !this.isExpanded; // ollama切换下拉菜单的显示与隐藏
            },

            //当选择变化时更新其他相关数据
            updateLLM() {
                console.log("选择的LLM:", this.currentChat);
            },

            //确定提交表单时
            async submitForm() {
                const workspaceSlug = this.slug; // 替换为你的 workspace slug
                const url = `http://103.63.139.165:3001/api/v1/workspace/${workspaceSlug}/update`;
                
                let paymodal;

                switch (this.selectedLLM) {
                    case 'openai':
                        paymodal = {
                                chatProvider: 'openai',
                                chatModel: this.openAISettings.model,
                                apiKey: this.openAISettings.apiKey,
                            };
                            break;
                    case 'gemini':
                        paymodal = {
                                chatProvider: 'gemini',
                                chatModel: this.geminiSettings.model,
                                apiKey: this.geminiSettings.apiKey,
                                safeset: this.geminiSettings.safeset,
                            };
                        break;
                    case 'ollama':
                        paymodal = {
                                chatProvider: 'ollama',
                                chatModel: this.ollamaSettings.model,
                                maxToken: this.ollamaSettings.maxToken,
                                baseUrl: this.ollamaSettings.baseUrl,
                            };
                        break;
                    default:
                        return; // 如果没有选择有效的模型，则提前返回
                }

                try {
                    const response = await axios.post(url, paymodal, {
                        headers: {
                            'Accept': 'application/json',
                            'Authorization': 'Bearer VREQHX8-PTGMW06-P9T61XE-BWG31ZW',
                            'Content-Type': 'application/json',
                        },
                    });
                    console.log('Response:', response.data);
                    this.$message.success('设置成功');
                    // 处理成功
                } catch (error) {
                    console.error('提交表单时出错:', error);
                    // 处理错误
                }
            },

             // 重置表单字段的逻辑
            resetForm() {
                this.openAISettings = {};
                this.geminiSettings = {};
                this.ollamaSettings = {};
                this.claudeSettings = {};
                this.selectedLLM = ''; // 重置选择
            },

            // 通知父组件更新同步模型
            notifyParent() {
                this.$emit('update-llm', this.localLLM); // 通知父组件
            },
        },
}
</script>
<style>
.aiassistant-setting-content h2{
    padding: 10px;
}
.inline-block {
  display: inline-block;
  transition: all 0.3s ease;
}
.llm-content{
    display: flex;
}
.llm-icon{
    width: 50px;
    height: 50px;
    margin: 10px;
    border-radius: 50px;
}
.llm-select{
    width: 600px;
    margin-bottom: 5px;
}
.llm-option{
    height: 90px;
}
.aiassistant-form-row{
    margin: 30px 0;
}
.prefix-llm-icon{
    width: 50px;
    height: 50px;
    margin: 10px;
}
.form-input{
    width: 250px;
}
.el-input--prefix .el-input__inner{
    font-size: 20px;
    padding-left: 80px;
    height: 70px;
}
.form-select{
    width: 300px;
}
.form-desc{
    line-height: 1.5em;
    margin-top: 10px;
}
.showtoggle{
    margin-top: 80px;
}

.llm-details {
    width: 800px;
    display: flex;
    align-items: center;
    padding: 0px;
}
.setting-footer {
    display: flex;
    align-items: center;
    margin: 0 0 32px 0;
    flex-shrink: 0;
    position: static;
    padding: 16px 34px 0;
    border-top: 1px solid #F4F4F5;    
}
.footer-button{
    align-items: center;
    justify-content: center;
    height: 34px;
    line-height: 32px;
    min-width: 94px;
}
</style>