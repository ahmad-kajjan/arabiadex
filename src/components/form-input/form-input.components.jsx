import React from 'react';

const FormInput = ({handelchange,label,...otherProps}) =>(
        <div className="group">
            {
                label ?
                (<label className={`${otherProps.value.length ? 'shrink' : '' } form-input `} >
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