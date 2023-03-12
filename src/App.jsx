import 'split-pane-react/esm/themes/default.css'
import Sidebar from "./components/sidebar";
import SearchResults from "./components/searchresults";
import Splitter, {SplitDirection} from '@devbookhq/splitter';
import ModalForm from "./components/modalform";
import {useState} from "react";


function App() {

    const [showModalForm, setShowModalForm] = useState(false);

    const hideModalForm = () => {
        setShowModalForm(false);
    }

    return (
        <div className="d-flex flex-row vh-100">
            <Sidebar modalOnClick={() => {
                setShowModalForm(!showModalForm);
            }}/>
            <ModalForm showModalForm={showModalForm} hideModalForm={hideModalForm}/>
            <Splitter
                direction={SplitDirection.Vertical}
                minHeights={[300, 200]}
                gutterClassName="results-gutter"
            >
                <div style={{height: '100%', overflow: "auto"}}>
                    <SearchResults/>
                </div>
                <div>
                    Detailed Screen
                </div>
            </Splitter>
        </div>
    )

}

export default App
