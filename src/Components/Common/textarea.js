const [text, setText] = useState(
    `テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
    テキストテキストテキストテキストテキストテキスト
    テキストテキストテキストテキスト
    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト`
);

// Handle change in the textarea
const handleChange = (event) => {
    setText(event.target.value);
};


<div className='w-full'>
    <textarea
        rows="6"
        cols="50"
        value={text} // Set the value from state
        onChange={handleChange} // Handle changes
        className='w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]'
    />
</div>