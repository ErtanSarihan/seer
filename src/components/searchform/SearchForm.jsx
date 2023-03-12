import {useState} from "react";
import {MultiSelect} from 'primereact/multiselect';

const SearchForm = () => {

    const [selectedLists, setSelectedLists] = useState(null);
    const lists = [
        {key: 5, name: "("},
        {key: 12, name: "blank"},
        {key: 4, name: ")"},
    ]

    return (
        <div>
            <form>
                <input type="text" placeholder="Search Term"/>
                <input type="number" placeholder="Maximum Results"/>
                <input type="number" placeholder="Minimum Similarity %"/>
                <input type="text" placeholder="Search Type"/>
                <input type="text" placeholder="Operator Type"/>
                <input type="text" placeholder="Similarity Algorithm"/>
                <input type="text" placeholder="Lists To Search"/>
                <MultiSelect
                    value={selectedLists}
                    onChange={(e) => setSelectedLists(e.value)}
                    options={lists}
                    optionLabel="name"
                    placeholder="Select lists to search"
                    maxSelectedLabels={3}
                />
            </form>
        </div>
    )
}

export {SearchForm}