import DataTable from 'react-data-table-component';
import styled from 'styled-components';
import React, {useState, useMemo} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons/faTrash";

const MockResults = JSON.parse('{\n' + '    "searchResults": [\n' + '        {\n' + '            "documentId": "273338",\n' + '            "matchName": "John Doe",\n' + '            "query": "john doe",\n' + '            "type": "A",\n' + '            "score": 1.39,\n' + '            "similarityPercentage": 100.00,\n' + '            "index": 1\n' + '        },\n' + '        {\n' + '            "documentId": "2224035",\n' + '            "matchName": "John DOE",\n' + '            "query": "john doe",\n' + '            "type": "N",\n' + '            "score": 1.39,\n' + '            "similarityPercentage": 100.00,\n' + '            "index": -1\n' + '        },\n' + '        {\n' + '            "documentId": "1608180",\n' + '            "matchName": "John DOVE",\n' + '            "query": "john doe",\n' + '            "type": "N",\n' + '            "score": 0.99,\n' + '            "similarityPercentage": 98.89,\n' + '            "index": -1\n' + '        },\n' + '        {\n' + '            "documentId": "543618",\n' + '            "matchName": "Johny JADER",\n' + '            "query": "john doe",\n' + '            "type": "N",\n' + '            "score": 0.37,\n' + '            "similarityPercentage": 89.63,\n' + '            "index": -1\n' + '        },\n' + '        {\n' + '            "documentId": "297298",\n' + '            "matchName": "John Dor MAJOK",\n' + '            "query": "john doe",\n' + '            "type": "N",\n' + '            "score": 0.84,\n' + '            "similarityPercentage": 89.58,\n' + '            "index": -1\n' + '        },\n' + '        {\n' + '            "documentId": "1981969",\n' + '            "matchName": "John Doe Sunglasses",\n' + '            "query": "john doe",\n' + '            "type": "A",\n' + '            "score": 1.11,\n' + '            "similarityPercentage": 88.83,\n' + '            "index": 0\n' + '        },\n' + '        {\n' + '            "documentId": "3141255",\n' + '            "matchName": "Johny Boy",\n' + '            "query": "john doe",\n' + '            "type": "A",\n' + '            "score": 0.37,\n' + '            "similarityPercentage": 88.33,\n' + '            "index": 0\n' + '        },\n' + '        {\n' + '            "documentId": "1049948",\n' + '            "matchName": "John DOS SANTOS",\n' + '            "query": "john doe",\n' + '            "type": "N",\n' + '            "score": 0.39,\n' + '            "similarityPercentage": 88.30,\n' + '            "index": -1\n' + '        },\n' + '        {\n' + '            "documentId": "2565235",\n' + '            "matchName": "Johny CORDERO",\n' + '            "query": "john doe",\n' + '            "type": "N",\n' + '            "score": 0.37,\n' + '            "similarityPercentage": 88.24,\n' + '            "index": -1\n' + '        },\n' + '        {\n' + '            "documentId": "3162790",\n' + '            "matchName": "Johny JOSEPH",\n' + '            "query": "john doe",\n' + '            "type": "N",\n' + '            "score": 0.37,\n' + '            "similarityPercentage": 87.96,\n' + '            "index": -1\n' + '        },\n' + '        {\n' + '            "documentId": "701486",\n' + '            "matchName": "Johny JOSEPH",\n' + '            "query": "john doe",\n' + '            "type": "N",\n' + '            "score": 0.37,\n' + '            "similarityPercentage": 87.96,\n' + '            "index": -1\n' + '        },\n' + '        {\n' + '            "documentId": "1495719",\n' + '            "matchName": "Johny HILDEN",\n' + '            "query": "john doe",\n' + '            "type": "N",\n' + '            "score": 0.37,\n' + '            "similarityPercentage": 87.96,\n' + '            "index": -1\n' + '        },\n' + '        {\n' + '            "documentId": "1110646",\n' + '            "matchName": "Johna LINDSEY",\n' + '            "query": "john doe",\n' + '            "type": "N",\n' + '            "score": 0.56,\n' + '            "similarityPercentage": 86.46,\n' + '            "index": -1\n' + '        },\n' + '        {\n' + '            "documentId": "1773074",\n' + '            "matchName": "JOHNS,A J",\n' + '            "query": "john doe",\n' + '            "type": "A",\n' + '            "score": 0.58,\n' + '            "similarityPercentage": 86.00,\n' + '            "index": 0\n' + '        },\n' + '        {\n' + '            "documentId": "721460",\n' + '            "matchName": "JOHNS,B J",\n' + '            "query": "john doe",\n' + '            "type": "A",\n' + '            "score": 0.58,\n' + '            "similarityPercentage": 86.00,\n' + '            "index": 0\n' + '        },\n' + '        {\n' + '            "documentId": "2200503",\n' + '            "matchName": "Joon HEO",\n' + '            "query": "john doe",\n' + '            "type": "N",\n' + '            "score": 0.30,\n' + '            "similarityPercentage": 85.71,\n' + '            "index": -1\n' + '        },\n' + '        {\n' + '            "documentId": "870996",\n' + '            "matchName": "John Andrew DOVE",\n' + '            "query": "john doe",\n' + '            "type": "N",\n' + '            "score": 0.80,\n' + '            "similarityPercentage": 85.68,\n' + '            "index": -1\n' + '        },\n' + '        {\n' + '            "documentId": "428219",\n' + '            "matchName": "Jackson E DOE",\n' + '            "query": "john doe",\n' + '            "type": "N",\n' + '            "score": 0.55,\n' + '            "similarityPercentage": 85.19,\n' + '            "index": -1\n' + '        },\n' + '        {\n' + '            "documentId": "1254540",\n' + '            "matchName": "Joon Ho KIM",\n' + '            "query": "john doe",\n' + '            "type": "N",\n' + '            "score": 0.30,\n' + '            "similarityPercentage": 85.08,\n' + '            "index": -1\n' + '        },\n' + '        {\n' + '            "documentId": "1586098",\n' + '            "matchName": "Joon Ho KIM",\n' + '            "query": "john doe",\n' + '            "type": "N",\n' + '            "score": 0.30,\n' + '            "similarityPercentage": 85.08,\n' + '            "index": -1\n' + '        },\n' + '        {\n' + '            "documentId": "255167",\n' + '            "matchName": "Johny LABIE",\n' + '            "query": "john doe",\n' + '            "type": "N",\n' + '            "score": 0.37,\n' + '            "similarityPercentage": 85.06,\n' + '            "index": -1\n' + '        },\n' + '        {\n' + '            "documentId": "1352388",\n' + '            "matchName": "Johny OCAKO",\n' + '            "query": "john doe",\n' + '            "type": "N",\n' + '            "score": 0.37,\n' + '            "similarityPercentage": 85.06,\n' + '            "index": -1\n' + '        },\n' + '        {\n' + '            "documentId": "275925",\n' + '            "matchName": "Johny DE RAEVE",\n' + '            "query": "john doe",\n' + '            "type": "N",\n' + '            "score": 0.37,\n' + '            "similarityPercentage": 85.06,\n' + '            "index": -1\n' + '        },\n' + '        {\n' + '            "documentId": "1226941",\n' + '            "matchName": "KIM,Joon-dong",\n' + '            "query": "john doe",\n' + '            "type": "S",\n' + '            "score": 0.30,\n' + '            "similarityPercentage": 84.44,\n' + '            "index": 0\n' + '        },\n' + '        {\n' + '            "documentId": "2967553",\n' + '            "matchName": "- JOHAN",\n' + '            "query": "john doe",\n' + '            "type": "N",\n' + '            "score": 0.39,\n' + '            "similarityPercentage": 83.67,\n' + '            "index": -1\n' + '        },\n' + '        {\n' + '            "documentId": "273775",\n' + '            "matchName": "Johny CAPPON",\n' + '            "query": "john doe",\n' + '            "type": "N",\n' + '            "score": 0.37,\n' + '            "similarityPercentage": 83.33,\n' + '            "index": -1\n' + '        },\n' + '        {\n' + '            "documentId": "2014300",\n' + '            "matchName": "Johny NGUYEN",\n' + '            "query": "john doe",\n' + '            "type": "N",\n' + '            "score": 0.37,\n' + '            "similarityPercentage": 83.33,\n' + '            "index": -1\n' + '        },\n' + '        {\n' + '            "documentId": "2697219",\n' + '            "matchName": "Johny CASTRO",\n' + '            "query": "john doe",\n' + '            "type": "N",\n' + '            "score": 0.37,\n' + '            "similarityPercentage": 83.33,\n' + '            "index": -1\n' + '        },\n' + '        {\n' + '            "documentId": "1511247",\n' + '            "matchName": "JOHNS,Elaine May",\n' + '            "query": "john doe",\n' + '            "type": "A",\n' + '            "score": 0.36,\n' + '            "similarityPercentage": 83.33,\n' + '            "index": 0\n' + '        },\n' + '        {\n' + '            "documentId": "2857133",\n' + '            "matchName": "May JON",\n' + '            "query": "john doe",\n' + '            "type": "N",\n' + '            "score": 0.34,\n' + '            "similarityPercentage": 83.33,\n' + '            "index": -1\n' + '        },\n' + '        {\n' + '            "documentId": "1577664",\n' + '            "matchName": "Jeong Doh JEON",\n' + '            "query": "john doe",\n' + '            "type": "N",\n' + '            "score": 0.30,\n' + '            "similarityPercentage": 82.87,\n' + '            "index": -1\n' + '        },\n' + '        {\n' + '            "documentId": "2025304",\n' + '            "matchName": "Johny SUDHARMONO",\n' + '            "query": "john doe",\n' + '            "type": "N",\n' + '            "score": 0.37,\n' + '            "similarityPercentage": 82.81,\n' + '            "index": -1\n' + '        },\n' + '        {\n' + '            "documentId": "2357682",\n' + '            "matchName": "Jani DODE",\n' + '            "query": "john doe",\n' + '            "type": "N",\n' + '            "score": 0.50,\n' + '            "similarityPercentage": 82.50,\n' + '            "index": -1\n' + '        },\n' + '        {\n' + '            "documentId": "1163620",\n' + '            "matchName": "Johny KUKI",\n' + '            "query": "john doe",\n' + '            "type": "N",\n' + '            "score": 0.37,\n' + '            "similarityPercentage": 82.50,\n' + '            "index": -1\n' + '        },\n' + '        {\n' + '            "documentId": "3358966",\n' + '            "matchName": "Johny KHAN",\n' + '            "query": "john doe",\n' + '            "type": "N",\n' + '            "score": 0.37,\n' + '            "similarityPercentage": 82.50,\n' + '            "index": -1\n' + '        },\n' + '        {\n' + '            "documentId": "1929468",\n' + '            "matchName": "Jason DOW",\n' + '            "query": "john doe",\n' + '            "type": "N",\n' + '            "score": 0.34,\n' + '            "similarityPercentage": 82.50,\n' + '            "index": -1\n' + '        },\n' + '        {\n' + '            "documentId": "2057422",\n' + '            "matchName": "Johm ALDO ALVES",\n' + '            "query": "john doe",\n' + '            "type": "N",\n' + '            "score": 0.53,\n' + '            "similarityPercentage": 82.44,\n' + '            "index": -1\n' + '        },\n' + '        {\n' + '            "documentId": "1939294",\n' + '            "matchName": "Jon Jon",\n' + '            "query": "john doe",\n' + '            "type": "A",\n' + '            "score": 0.30,\n' + '            "similarityPercentage": 82.38,\n' + '            "index": 0\n' + '        },\n' + '        {\n' + '            "documentId": "1825969",\n' + '            "matchName": "John DOS SANTOS GAVIER",\n' + '            "query": "john doe",\n' + '            "type": "N",\n' + '            "score": 0.39,\n' + '            "similarityPercentage": 81.66,\n' + '            "index": -1\n' + '        },\n' + '        {\n' + '            "documentId": "2988424",\n' + '            "matchName": "John CAVALCANTE DOS SANTOS",\n' + '            "query": "john doe",\n' + '            "type": "N",\n' + '            "score": 0.39,\n' + '            "similarityPercentage": 78.00,\n' + '            "index": -1\n' + '        },\n' + '        {\n' + '            "documentId": "1460759",\n' + '            "matchName": "John Lennon AMADOR DOS SANTOS",\n' + '            "query": "john doe",\n' + '            "type": "N",\n' + '            "score": 0.35,\n' + '            "similarityPercentage": 76.58,\n' + '            "index": -1\n' + '        },\n' + '        {\n' + '            "documentId": "3211350",\n' + '            "matchName": "John Herberth DOS SANTOS FLOR",\n' + '            "query": "john doe",\n' + '            "type": "N",\n' + '            "score": 0.35,\n' + '            "similarityPercentage": 76.58,\n' + '            "index": -1\n' + '        },\n' + '        {\n' + '            "documentId": "2363723",\n' + '            "matchName": "John Anderson ALMEIDA DOS SANTOS",\n' + '            "query": "john doe",\n' + '            "type": "N",\n' + '            "score": 0.35,\n' + '            "similarityPercentage": 75.39,\n' + '            "index": -1\n' + '        },\n' + '        {\n' + '            "documentId": "2992398",\n' + '            "matchName": "John COSTA DOS SANTOS",\n' + '            "query": "john doe",\n' + '            "type": "N",\n' + '            "score": 0.39,\n' + '            "similarityPercentage": 68.85,\n' + '            "index": -1\n' + '        },\n' + '        {\n' + '            "documentId": "2595283",\n' + '            "matchName": "Don John",\n' + '            "query": "john doe",\n' + '            "type": "A",\n' + '            "score": 0.70,\n' + '            "similarityPercentage": 66.67,\n' + '            "index": 0\n' + '        },\n' + '        {\n' + '            "documentId": "491065",\n' + '            "matchName": "Don John",\n' + '            "query": "john doe",\n' + '            "type": "A",\n' + '            "score": 0.70,\n' + '            "similarityPercentage": 66.67,\n' + '            "index": 1\n' + '        },\n' + '        {\n' + '            "documentId": "657945",\n' + '            "matchName": "Jose Luiz John DOS SANTOS",\n' + '            "query": "john doe",\n' + '            "type": "N",\n' + '            "score": 0.35,\n' + '            "similarityPercentage": 64.83,\n' + '            "index": -1\n' + '        },\n' + '        {\n' + '            "documentId": "2473420",\n' + '            "matchName": "Tobias John DOVE",\n' + '            "query": "john doe",\n' + '            "type": "N",\n' + '            "score": 0.80,\n' + '            "similarityPercentage": 62.80,\n' + '            "index": -1\n' + '        },\n' + '        {\n' + '            "documentId": "3056896",\n' + '            "matchName": "John Williams LIMA DOS SANTOS",\n' + '            "query": "john doe",\n' + '            "type": "N",\n' + '            "score": 0.35,\n' + '            "similarityPercentage": 59.91,\n' + '            "index": -1\n' + '        },\n' + '        {\n' + '            "documentId": "6126",\n' + '            "matchName": "SENEWIRATNE,Welathanthirige Don John",\n' + '            "query": "john doe",\n' + '            "type": "A",\n' + '            "score": 0.56,\n' + '            "similarityPercentage": 45.37,\n' + '            "index": 2\n' + '        }\n' + '    ]\n' + '}');

const columns = [{
    name: 'Match Name', selector: row => row.matchName, sortable: true
}, {
    name: 'Match Score', selector: row => row.score, sortable: true
}, {
    name: 'Similarity Percentage', selector: row => row.similarityPercentage, sortable: true
},]


const TextField = styled.input`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;

  &:hover {
    cursor: pointer;
  }
`;

const handleRowClicked = (row, event) => {
    alert(`clicked + ${row.matchName}`)
}

const FilterComponent = ({filterText, onFilter, onClear}) => (
    <div>
        <TextField
            id="search"
            type="text"
            placeholder="Filter By Name"
            aria-label="Search Input"
            value={filterText}
            onChange={onFilter}
        />
        <button onClick={onClear}>
            <FontAwesomeIcon icon={faTrash}/>
        </button>
    </div>
);


const SearchResults = () => {
    const data = [...MockResults.searchResults]
    const [filterText, setFilterText] = useState('');
    const filteredItems = data.filter(item => item.matchName && item.matchName.toLowerCase().includes(filterText.toLowerCase()),);

    const subHeaderComponentMemo = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setFilterText('');
            }
        };

        return (<FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear}
                                 filterText={filterText}/>);
    }, [filterText]);


    return (
        <DataTable
            title="Results"
            columns={columns}
            data={filteredItems}
            // fixedHeader={true}
            onRowClicked={handleRowClicked}
            pointerOnHover={true}
            subHeader
            subHeaderComponent={subHeaderComponentMemo}
            striped
            customStyles={{
                rows: {
                    style: {
                        minHeight: 48
                    }
                }
            }}
        />
    );
}

export {SearchResults}