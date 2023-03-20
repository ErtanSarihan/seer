import {create} from 'zustand';


const useFormStore = create((set) => ({
  formState: {
    searchTerm: '',
    maxResults: 50,
    minSimilarityPercentage: 30,
    searchType: '',
    operatorType: '',
    similarityAlgorithm: '',
    lists: []
  },
  setFormState: (formData) => set((state) => ({
    formState: formData
  })),
}))

export default useFormStore
