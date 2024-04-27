import React from 'react'
import "./About.css"
import CodeSnippet from '../codeSnippet/CodeSnippet';

const codeString = `import os
from openai import OpenAI
client = OpenAI(
       # This is the default and can be omitted
       api_key=os.environ.get("OPENAI_API_KEY"),
)
chat_completion = client.data.completions.create(
       messages=[
              {
                "role": "Customer"
def welcome_message():
    print("Welcome" + chat_completion.messages.role)`

const About = () => {
  return (
    <section className='docs'>
      <div className='docs-usage'>
        <CodeSnippet codeString={codeString} />
      </div>
      <div className='docs-about'></div>
    </section>
  )
}

export default About