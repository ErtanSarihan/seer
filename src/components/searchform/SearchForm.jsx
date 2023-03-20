import {useForm, useFormContext} from "react-hook-form";
import {useEffect, useState} from "react";
import {Multiselect} from 'multiselect-react-dropdown';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Popover from 'react-bootstrap/Popover';

import useFormStore from "../../store.jsx";
import Select from "react-select";

import ErrorMessageProvider from "../errormessageprovider";

const SearchForm = () => {

  // const formState = useFormStore(state => state.formState);

  const {register, formState: {errors}} = useFormContext();

  const [selectedLists, setSelectedLists] = useState([]);
  const lists = [{name: "(", id: 5}, {name: "blank", id: 6}, {name: ")", id: 7}]

  const [selectedSearchType, setSelectedSearchType] = useState([]);
  const searchTypes = [{label: 'TERM', value: 'TERM'}, {label: 'BIC', value: 'BIC'}, {
    label: 'SENTENCE',
    value: 'SENTENCE'
  }, {label: 'COUNTRY', value: 'COUNTRY'}]

  const [selectedSimilarityAlgorithm, setSelectedSimilarityAlgorithm] = useState([]);
  const similarityAlgorithms = [{label: 'JARO WINKLER', value: 'JARO_WINKLER'}, {
    label: 'MONGE ELKAN',
    value: 'MONGE_ELKAN'
  }, {label: 'N_GRAM', value: 'N_GRAM'}, {label: 'COSINE', value: 'COSINE'}, {
    label: 'LEVENSHTEIN',
    value: 'LEVENSHTEIN'
  },]

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const onRemove = (selectedLists, list) => {
    console.log(selectedSearchType)
  }

  const onSelect = (selectedLists, list) => {
    console.log(selectedLists)
  }

  const renderTooltip = (props) => (
    <Tooltip {...props}>
      Simple tooltip
    </Tooltip>
  )

  const popover = (
    <Popover>
      <Popover.Header>Check Constraints</Popover.Header>
      <Popover.Body>
        You should check <strong> important constraint here</strong> and try again
      </Popover.Body>
    </Popover>
  )
  return (<div>
    <div className="d-flex flex-row justify-content-between">
      <label className="mt-2 ">Search Term</label>
      <ErrorMessageProvider name="searchTerm">
        <input className="m-2 border rounded w-50" type="text" placeholder="Search Term"
               id="searchTerm" {...register('searchTerm')}/>
      </ErrorMessageProvider>
    </div>
    <div className="d-flex flex-row justify-content-between">
      <label className="mt-2">Max Results</label>
      <ErrorMessageProvider name="maxResults">
        <input className="m-2 border rounded w-50" type="number"
               placeholder="Maximum Results" {...register('maxResults')}/>
      </ErrorMessageProvider>
    </div>
    <div className="d-flex flex-row justify-content-between">
      <label className="mt-2">Min Similarity Percentage (%) </label>
      <ErrorMessageProvider name="minSimilarityPercentage">
        <input className="w-50 m-2 border rounded" type="number" max={100} min={1}
               defaultValue={60} {...register('minSimilarityPercentage')}/>
      </ErrorMessageProvider>
    </div>
    <div className="d-flex flex-rows justify-content-between">
      <label className="mt-2">Operator Type</label>
      <p className="mt-2"><strong>{errors.operatorType?.message}</strong></p>
    </div>
    <div className="d-flex flex-row justify-content-around">
      <div className="d-flex flex-column align-items-center border w-50 rounded mx-1">
        <label htmlFor="and-field">AND</label>
        <input className="m-1" type="radio" id="and-field" value="AND" {...register('operatorType')}/>
      </div>
      <div className="d-flex flex-column align-items-center border w-50 rounded mx-1">
        <label htmlFor="or-field">OR</label>
        <input className="m-1" type="radio" id="or-field" value="OR" {...register('operatorType')}/>
      </div>
    </div>

    <div>
      <div className="d-flex flex-row justify-content-between">
        <label className="mt-2">
          Search Type
        </label>
        <p className="mt-2"><strong>{errors.searchType?.message}</strong></p>
      </div>
      <Select
        options={searchTypes}
        {...register('searchType')}
        onChange={(selectedType) => setSelectedSearchType({...selectedType, selectedType})}
      />
    </div>
    <div>
      <div className="d-flex flex-row justify-content-between">
        <label className="mt-2">
          Search Algorithm
        </label>
        <p className="mt-2"><strong>{errors.similarityAlgorithm?.message}</strong></p>
      </div>
      <Select
        options={similarityAlgorithms}
        {...register('similarityAlgorithm')}
        onChange={(selectedSimilarityAlgorithm) => setSelectedSimilarityAlgorithm({
          ...selectedSimilarityAlgorithm, selectedSimilarityAlgorithm
        })}
      />
    </div>
    <div className="mb-2">
      <div className="d-flex flex-row justify-content-between">
        <label className="mt-2">Lists To Search</label>
        <p className="mt-2"><strong>{errors.lists?.message}</strong></p>
      </div>
        <Multiselect
          options={lists}
          selectedValues={selectedLists}
          onSelect={onSelect}
          onRemove={onRemove}
          displayValue="name"
          placeholder="Select Lists to Search"
        />
    </div>
  </div>)
}

export {SearchForm}