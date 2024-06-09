/* Models config files */
import { Config } from './types/Config';

const config: Config = {
    chatGPTModel: "gpt-3.5-turbo", // learn more about GPT models https://platform.openai.com/docs/models
    models: {
        ChatGPT: {
            prefix: '!chatgpt', // Prefix for the ChatGPT model
            enable: true // Whether the ChatGPT model is enabled or not
        },
        DALLE: {
            prefix: 'Generate', 'generate', // Prefix for the DALLE model
            enable: true // Whether the DALLE model is enabled or not
        },
        StableDiffusion: {
            prefix: '!stable', // Prefix for the StableDiffusion model
            enable: true // Whether the StableDiffusion model is enabled or not
        },
        GeminiVision: {
            prefix: '!gemini-vision', // Prefix for the GeminiVision model
            enable: true // Whether the GeminiVision model is enabled or not
        },
        Gemini: {
            prefix: '!gemini', 'Sophia', 'sophia', 'Hi Sophia', 'hi sophia', 'Hello Sophia', 'hello sophia', 
        '.Sophia', '.sophia', 'Hey Sophia', 'hey sophia', 'Hi, Sophia', 'hi, sophia', 
        'Hello, Sophia', 'hello, sophia', 'Hey, Sophia', 'hey, sophia', 'Greetings Sophia', 
        'greetings sophia', 'Good morning Sophia', 'good morning sophia', 'Good evening Sophia', 
        'good evening sophia', 'Hi there Sophia', 'hi there sophia', 'Hello there Sophia', 
        'hello there sophia', 'Hey there Sophia', 'hey there sophia', 'Yo Sophia', 'yo sophia',
        'Hiya Sophia', 'hiya sophia', 'Sup Sophia', 'sup sophia', 'What’s up Sophia', 
        'what’s up sophia', 'Heya Sophia', 'heya sophia', 'Good day Sophia', 'good day sophia' // Prefix for the Gemini model
            enable: true // Whether the Gemini model is enabled or not
        },
        Custom: [
            {
                /** Custom Model */
                modelName: 'whatsapp-ai-bot', // Name of the custom model
                prefix: '!bot', // Prefix for the custom model
                enable: true, // Whether the custom model is enabled or not
                /**
                    * context: "file-path (.txt, .text, .md)",
                    * context: "text url",
                    * context: "text"
                  */
                context: './static/whatsapp-ai-bot.md', // Context for the custom model
            }
        ]
    },
    enablePrefix: {
        /** if enable, reply to those messages start with prefix  */
        enable: true, // Whether prefix messages are enabled or not
        /** default model to use if message not starts with prefix and enable is false  */
        defaultModel: 'Gemini' // Default model to use if no prefix is present in the message
    }
};

export default config;
