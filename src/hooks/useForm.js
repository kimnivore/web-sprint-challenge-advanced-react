// write your custom hook here to control your checkout form
import { useState } from 'react';


const useForm = (initialValue) => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [value, setValue] = useState(initialValue);

    const handleChanges = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
      };

      return ([showSuccessMessage, value, handleChanges, handleSubmit]);

}

export default useForm;