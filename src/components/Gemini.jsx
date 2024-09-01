import React, { useState } from 'react';

  const genAI = new GoogleGenerativeAI('');
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const Gemini = () => {
    const [search, setSearch] = useState('');

    const handleChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const [loading, setLoading] = useState(false);

    // Generative AI Call to fetch dishes
    async function aiRun() {
        setLoading(true);
        setLoading(false);
    }

    const [aiResponse, setResponse] = useState('');

    // Generative AI Call to fetch dishes

    async function aiRun() {
        const prompt = `Give the articulate form of ${search} Incident`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        setResponse(text);
    }

    // button event trigger to consume gemini Api

    const handleClick = () => {
        aiRun();
    }


    return (
        <>
            <div>
                <h1>Generative AI Restaurant App!</h1>
                {/* <p>Built with ❤️ using ReactJS + Redux + Google Gemini</p> */}

                <div style={{ display: 'flex' }}>
                    <input placeholder='Search ' onChange={(e) => handleChangeSearch(e)} />
                    <button style={{ marginLeft: '20px' }} onClick={() => handleClick()}>Search</button>
                </div>

                {
                    loading == true && search != '' ?
                        <p style={{ margin: '30px 0' }}>Loading ...</p>
                        :
                        <div style={{ margin: '30px 0' }}>
                            <p>{aiResponse}</p>
                        </div>
                }
            </div>
        </>
    );
};

export default Gemini;