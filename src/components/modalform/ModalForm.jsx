import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/Modal'
import {Button} from "react-bootstrap";
import SearchForm from "../searchform";
import useFormStore from "../../store.jsx";
import {FormProvider, useForm} from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useEffect} from "react";

function ModalForm(props) {
  const schema = yup.object().shape({
    searchTerm: yup.string().required("Please provide a term to search!"),
    maxResults: yup.number().positive().integer().min(1).required("Please enter how many results you want to search for!"),
    minSimilarityPercentage: yup.number().integer().min(1).max(100).required("Minimum similarity percentage should be provided"),
    searchType: yup.string().required("Please choose a search type"),
    operatorType: yup.string().required("Please specify the search operator"),
    similarityAlgorithm: yup.string().required("Please choose an algorithm!"),
    lists: yup.array()
      .of(
        yup.object().shape({
          id: yup.number().positive().required(),
          name: yup.string().required()
        })
      )
      .min(1, "Select at least 1 list to search!").required("At least 1 list should be selected!")
  });


  // const submitForm = useFormStore(state => state.submitForm);

  const { globalFormState, setGlobalFormState } = useFormStore();
  const formMethods = useForm({
    defaultValues: globalFormState, mode: 'onChange',
    resolver: yupResolver(schema)
  });

  const onSubmit = data => {
    setGlobalFormState(data);
  };

  return (
    <Modal show={props.showModalForm} onHide={props.hideModalForm} enforceFocus={false}>
      <Modal.Header closeButton>
        <Modal.Title> Search Form </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormProvider {...formMethods} >
          <form>
            <SearchForm/>
          </form>
        </FormProvider>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={formMethods.handleSubmit(onSubmit)}> Search </Button>
      </Modal.Footer>
    </Modal>

  );
}

export {ModalForm}