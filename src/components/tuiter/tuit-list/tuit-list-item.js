import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats";


const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuit = () => {
        dispatch({
            type: "delete-tuit",
            id: tuit._id
        })
    }
    return (<>
        <div className="d-flex flex-row">
            <div className="mt-2">
                <img
                    className="rounded-circle wd-logo-image m-3"
                    src={tuit["logo-image"]}
                />
            </div>

            <div className="d-flex flex-column me-4 mt-2 wd-tuit">
                <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex flex-row">
                        <span className="fw-bold text-white">{tuit.postedBy.username}</span>
                        {tuit.verified && <i className="ms-1 me-1 fas fa-badge-check"></i>}
                        <span className="ms-1 text-muted">@{tuit.handle}</span>
                        <span className="ms-1 text-muted"> • </span>
                        <span className="ms-1 text-muted">{tuit.time} </span>
                    </div>

                    <i onClick={() => deleteTuit(tuit)}
                       className="fa fa-times me-1"></i>
                </div>
                <div>
                    <p className="text-white">
                        {tuit.tuit}
                    </p>
                    {tuit.attachments && tuit.attachments.video && (
                        <iframe src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
                                height="500px"
                                width="100%"
                                className="wd-frame-border"
                                title="YouTube video player"
                                frameBorder="0"
                        ></iframe>)}
                </div>
                <TuitStats tuit={tuit}/>

            </div>

        </div>
    </>);
};

export default TuitListItem;