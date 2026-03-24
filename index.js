// 1. Carrega as variáveis de ambiente do arquivo .env
require('dotenv').config();

// 2. Importa a biblioteca do Google Gemini
const { GoogleGenerativeAI } = require("@google/generative-ai");

// 3. Verifica se a chave foi carregada corretamente
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
    console.error("❌ ERRO: Chave da API não encontrada no arquivo .env!");
    process.exit(1);
}

// 4. Configura a conexão com a IA
const genAI = new GoogleGenerativeAI(apiKey);

async function executarAgente() {
    try {
        console.log("🧪 [LABORATÓRIO]: Aquecendo os tubos de ensaio e conectando ao cérebro eletrônico...");

        // 5. Instancia o modelo (usando gemini-1.5-flash que é estável e rápido)
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        /**
         * 6. ENGENHARIA DE PROMPT (Critérios de Aceite 1 e 2)
         * Conceito: O que é uma API
         * Persona: Cientista Maluco
         */
        const prompt = "Você é um cientista maluco e eufórico, cheio de tiques e termos científicos inventados. Explique o que é uma API (Application Programming Interface) para um assistente de laboratório iniciante. Seja engraçado e use muitas exclamações!";

        // 7. Envia o prompt para a IA
        const result = await model.generateContent(prompt);
        const resposta = result.response.text();

        // Exibição do resultado
        console.log("\n🧪 [CIENTISTA MALUCO DIZ]:");
        console.log("--------------------------------------------------");
        console.log(resposta);
        console.log("--------------------------------------------------");
        console.log("\n✨ Experimento finalizado com sucesso! MUWAHAHAHA!");

    } catch (erro) {
        console.error("💥 EXPLOSÃO NO LABORATÓRIO (Erro):", erro.message);
    }
}

// Executa o agente
executarAgente();