import { on } from 'element-sea/src/utils/dom';
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
                <h2 style="padding: 10px;">LLM提供商</h2>
                <div class="aiassistant-llm-list">
                    <div class="llm-details" v-if="selectedLLM">
                        <img :src="currentChat.img" class="llm-icon" />
                        <div>
                            <el-select v-model="selectedLLM" prop="selectedLLM"  class="llm-select" @change="updateLLM" >
                                <el-option
                                    v-for="item in aichatList"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                    style="height: 80px;"
                                    >
                                    <div >
                                        <div style="display: flex">
                                            <img :src="item.img" class="llm-icon" />
                                            <div>
                                                <div>{{ item.label }}</div>
                                                <div>{{ item.desc }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </el-option>
                            </el-select>
                            <div>{{ currentChat.desc }}</div>
                        </div>
                    </div>

                    <el-form v-if="selectedLLM === 'openai'" :model="openAISettings">
                        <Row style="margin: 30px 0px;">
                            <Col flex="200px">
                                <el-form-item label="API Key">
                                    <Input v-model="openAISettings.apiKey" style="width: 250px;" type="password" size="large" />
                                </el-form-item>
                            </Col>
                            <Col flex="100px"></Col>
                            <Col flex="200px">
                                <el-form-item label="Chat Model Selection">
                                    <el-select v-model="openAISettings.model" style="width: 300px;">
                                        <el-option label="gpt-3.5-turbo" value="gpt-3.5-turbo"></el-option>
                                        <el-option label="gpt-4" value="gpt-4"></el-option>
                                    </el-select>
                                </el-form-item>
                            </Col>
                        </Row>    
                    </el-form>

                    <el-form v-if="selectedLLM === 'ollama'" :model="ollamaSettings">

                        <Row style="margin: 30px 0px;">
                            <Col flex="200px">
                                <el-form-item label="Ollama Modal">
                                    <el-select v-model="ollamaSettings.model" style="width: 280px;">
                                        <el-option label="glm4:9b" value="glm4:9b"></el-option>
                                        <el-option label="mxbai-embed-large:latest" value="mxbai-embed-large:latest"></el-option>
                                        <el-option label="mxbai-embed-text:latest" value="mxbai-embed-text:latest"></el-option>
                                    </el-select>
                                    <p style="line-height: 1.5em; margin-top: 10px;">Choose the Ollama model you want to use for your conversations.</p>
                                </el-form-item>
                            </Col>
                            <Col flex="100px"></Col>
                            <Col flex="200px">
                                <el-form-item label="Max Token">
                                    <InputNumber v-model="ollamaSettings.maxToken" size="large" style="width: 250px;" />
                                    <p style="line-height: 1.5em; margin-top: 10px;">Maximum number of tokens for context and response.</p>
                                </el-form-item>
                            </Col>
                            <Col flex="100px"></Col>
                            
                        </Row>
                        <Row>
                            <div style="margin-top: 30px;">
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
                                                <Input v-model="ollamaSettings.baseUrl" size="large" style="width: 288px;"  />
                                            </el-form-item>
                                        </Col>
                                        <Col flex="50px"></Col>
                                        <Col flex="200px">
                                            <el-form-item label="Ollama Keep Alive">  
                                                <el-select v-model="ollamaSettings.Alive" style="width: 300px;">
                                                    <el-option label="Forever" value="Forever"></el-option>
                                                    <el-option label="1 hour" value="1 hour"></el-option>
                                                    <el-option label="5 minutes" value="5 minutes"></el-option>
                                                </el-select>
                                                <p style="line-height: 1.5em; margin-top: 10px;">Choose the Ollama model you want to use for your conversations.</p>
                                            </el-form-item>
                                        </Col>
                                        <Col flex="50px"></Col>
                                        <Col flex="200px">
                                            <el-form-item label="Performance Mode">  
                                                <el-select v-model="ollamaSettings.Mode"  prop="selollPM" style="width: 300px;">
                                                    <el-option label="Base(Default)" value="Base(Default)"></el-option>
                                                    <el-option label="maximum" value="maximum"></el-option>
                                                </el-select>
                                                <p style="line-height: 1.5em; margin-top: 10px;">Choose the performance mode for the Ollama model.</p>
                                            </el-form-item>
                                        </Col>
                                    </Row>
                                    </span>
                                </div>
                            </div>                
                        </Row>
                    </el-form>                                                                       
                </div>
            </div>

        </div>
    </div>
</template>    
<script>
import { Row } from 'view-design-hi';

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
            type: String
        }
        },
    
    data() {
        return {
            selectedLLM: '',
            openAISettings: {
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
                        label: 'ChatGPT',
                        desc:'The fastest LLM inferencing available for real-time AI applications.',
                        img: '/images/avatar/default_openai.png'
                    },
                    {
                        value: "gemini",
                        label: "Gemini",
                        desc:'The fastest LLM inferencing available for real-time AI applications.',
                        img: '/images/avatar/default_gemini.png'
                    },
                    {
                        value: "claude",
                        label: "Claude",
                        desc:'The fastest LLM inferencing available for real-time AI applications.',
                        img: '/images/avatar/default_claude.png'
                    },
                    {
                        value: "custom",
                        label: "Custom",
                        desc:'The fastest LLM inferencing available for real-time AI applications.',
                        img: '/images/avatar/default_anything.png'
                    },
                    {
                        value: "ollama",
                        label: "Ollama",
                        desc:'Run LLMs locallly on your machine.',
                        img: '/images/avatar/default_llo.png'
                    },
                ],
                isExpanded: false, // 控制下拉菜单的显示与隐藏
            }
        },
        computed: {
        currentChat() {
            return this.aichatList.find(item => item.value === this.selectedLLM) || {};
        }
    },
        methods:{
            aimodalselect(item){
                console.log("aimodalselect", item)
                this.newchat = false,
                chatlabel = item.label,
                this.chatscr = item.img,
                this.chatdesc = item.desc 
            },
            toggle(){
                this.isExpanded = !this.isExpanded; // 切换下拉菜单的显示与隐藏
            },
                

            updateLLM() {
            // 当选择变化时更新其他相关数据（如果需要）
            console.log("选择的LLM:", this.currentChat);
        }
        },
}
</script>
<style>
.inline-block {
  display: inline-block;
  transition: all 0.3s ease;
}
.llm-icon{
    width: 50px;
    height: 50px;
    margin-right: 10px;
    margin-top: 10px;
    border-radius: 50px;
}
.llm-select{
    width: 200px;
    margin-bottom: 5px;
}

.llm-details {
    width: 800px;
    display: flex;
    align-items: center;
    border: 2px solid #e6e6e6;
    padding: 15px;
}
</style>