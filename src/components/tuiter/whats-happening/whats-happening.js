import React, {useState} from "react";
import "./whats-happening.css";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({
            type: 'create-tuit',
            tuit: whatsHappening
        });
    }
    return (<div className="d-flex flex-row">
            <img
                className="rounded-circle wd-logo-image m-3"
                src="/tuiter/images/avatar2.png"
                alt="Image"
            />
            <div className="d-flex flex-column w-100 mb-3">
                <textarea placeholder="What's happening?" className=" wd-whats-happening-box" value={whatsHappening}
                          onChange={(event) => setWhatsHappening(event.target.value)}>
                 </textarea>
                <hr/>
                <div className="d-flex flex-row justify-content-between">
                    <span>
                    <a href="#">
                      <i className="far fa-image me-3"></i>
                    </a>
                    <a href="#">
                      <i className="far fa-analytics me-3"></i>
                    </a>
                    <a href="#">
                      <i className="far fa-smile me-3"></i>
                    </a>
                    <a href="#">
                      <i className="far fa-calendar me-3"></i>
                    </a>
                  </span>
                    <button className="btn btn-primary btn-block rounded-pill" onClick={tuitClickHandler}>
                        Tuit
                    </button>
                </div>

            </div>

        </div>


    );
}
export default WhatsHappening;