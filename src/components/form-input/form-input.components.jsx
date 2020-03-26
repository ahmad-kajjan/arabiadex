import React from 'react';
import './form-input.styles.scss';
const FormInput = ({handelchange,label,...otherProps}) =>(
        <div className="group">
            {
                label ?
                (<label className={`${otherProps.value.length ? 'shrink' : '' } form-input-label`} >
                {label}
                <br/>
                    </label> 
                    )
                :null 
            }
            <input className='form-input' onChange={handelchange} {...otherProps}/>
        </div> 
    );


export default FormInput; 