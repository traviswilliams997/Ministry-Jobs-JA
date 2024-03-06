import OpenAI from 'openai'
import dotenv from 'dotenv'

dotenv.config()

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const runPrompt = async () => {
  console.log('Running')

  const prompt = 'Tell me a joke about a cat eating pasta'

  const completion = await openai.completions.create({
    model: 'gpt-3.5-turbo-instruct',
    prompt: prompt,
    max_tokens: 30,
  })

  console.log(completion)
}

// runPrompt()
