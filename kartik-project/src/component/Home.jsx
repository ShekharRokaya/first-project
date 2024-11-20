
import React from 'react'
import Banner from './Banner'
import About from './About'






const Home = () => {
   /*  const [text, setText] = useState("Hello world")
    const [alert, setAlert] = useState('null')
    const handleUppercase = () => {
        console.log("you clicked Uppercase button");
        setText(text.toUpperCase())
    }
    const handleLowercase = () => {
        console.log("lowercase")
        setText(text.toLowerCase())
    }
    const clearTextArea = () => {
        setText('')
    }
    const handleCopyText = () => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setText('')
                showAlert("success", "text is copied")
            })
    }
    const handleChange = (e) => {
        e.preventDefualt()
        setText(e.target.value)
    }
    const showAlert = (type, message) => {
        setAlert({
            type: type,
            message: message
        })
        setTimeout(() => {
            setAlert(null)
        }, 1000);
    } */
    return (
        <div>
           {/*  this is Home page

            {alert && (
                <div className={`alert alert-${alert.type} alert-dismissible fade show container`} role="alert">
                    {alert.message}
                    <button type="button" className="btn-close" aria-label="Close"></button>
                </div>)}
            <div className="mb-3 container">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" value={text} name={text} onChange={handleChange} placeholder={text}
                    id="exampleFormControlTextarea1" rows="3"> </textarea>
                <button className='btn btn-primary mt-3 mx-2' onClick={handleUppercase}>uppercase</button>
                <button className='btn btn-primary mt-3 mx-2' onClick={handleLowercase}>Lowercase</button>
                <button className='btn btn-primary mt-3 mx-2' onClick={clearTextArea}>clear</button>
                <button className='btn btn-primary mt-3 mx-2' onClick={handleCopyText}>copy</button>
            </div>
            <div className='container'>
                <h4>Analyze your text</h4>
                <p>{text.split(' ').length} words and {text.length} character</p>
                <p>{0.008 * text.split(' ').length}average time to read</p>
                <h4>preview text</h4>
                <p>{text.length > 0 ? text : "no preview to display"}</p>
            </div> */}
        <Banner/>
        <About/>
        </div>
    )
}


export default Home
