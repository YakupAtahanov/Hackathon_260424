import React from 'react'
import CodeSnippet from '../codeSnippet/CodeSnippet';
import name from "../../assets/profile.png"
import aip from "../../assets/ai.png"
import comp from "../../assets/researchComplete.png"
import help from "../../assets/help.png"
import arrow from "../../assets/Arrow 3.png"
import "./About.css"

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
const codeString2 = `from openai import OpenAI
client = OpenAI()

response = client.chat.completions.create(
  model="gpt-3.5-turbo",
  messages=[
    {"role": "system", "content": "You are a helpful
    assistant."},
    {"role": "user", "content": "Who won the world
    series in 2020"},
    {"role": "assistant", "content": "The Los Angeles
    Dodgers the World Series in 2020"},
    {"role": "user", "content": "Where was it played?"},
  ]
)`

const codeString3 = `def _splitdict(tk, v, cut_minus=True, conv=None):
    """Return a properly formatted dict built from Tcl list pairs.

    If cut_minus is True, the supposed '-' prefix will be removed
    from keys. If conv is specified, it is used to convert values.

    Tcl list is expected to contain an even number of elements.
    """
    t = tk.splitlist(v)
    if len(t) % 2:
        raise RuntimeError('Tcl list representing a dict is ‘
        ‘expected to contain an even number of elements')
    it = iter(t)
    dict = {}
    for key, value in zip(it, it):
        key = str(key)
        if cut_minus and key[0] == '-':
            key = key[1:]`

const About = () => {
    return (
        <section className='docs'>
            <div className='docs-code-snippet'>
                <div className='docs-usage'>
                    <h4>Usage</h4>
                    <p className='text'>The full API of this library can be found in <span className='first-block-span'>api.md.</span></p>
                    <CodeSnippet codeString={codeString} />
                </div>
                <div className='docs-usage usage-abs-right'>
                    <CodeSnippet codeString={codeString2} />
                </div>
                <div className='docs-usage usage-abs-down'>
                    <CodeSnippet codeString={codeString3} />
                </div>
            </div>

            <div className='docs-about'>
                <div className='water-text'>
                    <h2 className='water-text-title'>About</h2>
                    <span className='av-line'></span>
                </div>
                <div className='docs-info'>
                    <h2>Docster AI</h2>
                    <p>aims to help you learn about any framework by... simply getting the name of the framework!</p>
                    <span className='av-line'></span>
                </div>
                <div className='process'>
                    <h2>Process</h2>
                    <p>All we need to know from you is the name of the framework.
                        <br />
                        <br />
                        Our AI will be able to find information on the framework and teach, help and demonstrate you everything that you would need to know!
                    </p>
                </div>
                <div className='track'>
                    <div className='track-wrapper'>
                        <div className='track-item'>
                            <img className='track-icon' src={name}></img>
                            <p>Provide Name</p>
                        </div>
                        <img className='track-arrow' src={arrow}></img>
                        <div className='track-item'>
                            <img className='track-icon' src={aip}></img>
                            <p>AI Research</p>
                        </div>
                        <img className='track-arrow' src={arrow}></img>
                        <div className='track-item'>
                            <img className='track-icon' src={comp}></img>
                            <p>Research Complete</p>
                        </div>
                        <img className='track-arrow' src={arrow}></img>
                        <div className='track-item'>
                            <img className='track-icon' src={help}></img>
                            <p>Ready to Help</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About