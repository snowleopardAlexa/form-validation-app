import './formInput.css';

const FormInput = (props) => {
  return (
    <div className="formInput">
        <input 
          name={props.name}
          placeholder={props.placeholder} />
    </div>
  )
};

export default FormInput;





